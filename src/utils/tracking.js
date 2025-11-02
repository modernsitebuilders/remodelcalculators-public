const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzG6EphsB_DShdNMO3K7Zh3PZ8y6g_hNEesYw_7Vh4s_JbkCDlvpE5yh3vpJPqDXJHJ/exec';

export async function trackCalculation(calculatorType, inputs, result) {
  const trackingData = {
    siteId: 'construction-calcs',
    calculatorType,
    inputs,
    result,
    userAgent: navigator.userAgent,
    pageUrl: window.location.href,
    timestamp: new Date().toISOString()
  };

  console.log('Sending tracking data:', trackingData);

  try {
    // Use a more robust fetch with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn('Sheets tracking failed with status:', response.status);
      return false;
    }

    const responseData = await response.json();
    console.log('Tracking response:', responseData);
    return true;

  } catch (err) {
    console.warn('Sheets tracking error:', err.name, err.message);
    return false;
  }

  // Track to GA4 separately
  if (typeof window.gtag !== 'undefined') {
    try {
      window.gtag('event', 'calculator_use', {
        calculator_type: calculatorType,
        result_value: result?.cubicYards || 'unknown'
      });
    } catch (gaError) {
      console.warn('GA4 tracking error:', gaError);
    }
  }
}
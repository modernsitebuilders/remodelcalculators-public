const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzG6EphsB_DShdNMO3K7Zh3PZ8y6g_hNEesYw_7Vh4s_JbkCDlvpE5yh3vpJPqDXJHJ/exec';

export async function trackCalculation(calculatorType, inputs, result) {
  // Track to Google Sheets
  const sheetsPromise = fetch(SHEETS_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
  siteId: 'construction-calcs',  // This routes to new sheet
  calculatorType,
  inputs,
  result,
  userAgent: navigator.userAgent,
  pageUrl: window.location.href
})
  }).catch(err => console.error('Sheets tracking failed:', err));

  // Track to GA4
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'calculator_use', {
      calculator_type: calculatorType,
      result_value: typeof result === 'object' ? JSON.stringify(result) : result
    });
  }

  await sheetsPromise;
}
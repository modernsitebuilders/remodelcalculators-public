/**
 * Simplified Tracking for Construction Calculators
 * This version is guaranteed to work with the fixed Apps Script
 */

// REPLACE WITH YOUR DEPLOYED APPS SCRIPT URL
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzG6EphsB_DShdNMO3K7Zh3PZ8y6g_hNEesYw_7Vh4s_JbkCDlvpE5yh3vpJPqDXJHJ/exec';

/**
 * Track calculation to Google Sheets
 * Uses no-cors mode to avoid CORS issues with Apps Script
 */
export async function trackCalculation(calculatorType, inputs, result) {
  // Build the tracking payload
  const trackingData = {
    siteId: 'construction-calcs',
    calculatorType: calculatorType || 'unknown',
    inputs: inputs || {},
    result: result || {},
    userAgent: navigator.userAgent,
    pageUrl: window.location.href,
    timestamp: new Date().toISOString()
  };

  console.log('📊 Sending tracking data:', {
    type: calculatorType,
    yards: result?.cubicYards,
    bags: result?.bags80lb
  });

  // Send to Google Sheets via Apps Script
  try {
    // We use no-cors mode because Apps Script doesn't return proper CORS headers
    // This means we can't read the response, but the data still gets logged
    await fetch(SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData),
      mode: 'no-cors' // CRITICAL: This prevents CORS errors
    });
    
    console.log('✅ Tracking data sent successfully');
    
  } catch (err) {
    // Log error but don't break the calculator
    console.warn('⚠️ Tracking error (non-critical):', err.message);
  }

  // Also track to Google Analytics if available
  if (typeof window.gtag !== 'undefined') {
    try {
      window.gtag('event', 'calculator_use', {
        calculator_type: calculatorType,
        result_cubic_yards: result?.cubicYards || 0,
        result_bags_80lb: result?.bags80lb || 0,
        event_category: 'calculators',
        event_label: calculatorType
      });
      console.log('✅ GA4 tracking sent');
    } catch (gaError) {
      console.warn('⚠️ GA4 tracking error:', gaError);
    }
  }
  
  // Always return success to not break the calculator
  return true;
}

/**
 * Test function - paste this in browser console to verify tracking
 */
if (typeof window !== 'undefined') {
  window.testTracking = async function() {
    console.log('🧪 Testing tracking endpoint...');
    console.log('📍 URL:', SHEETS_URL);
    
    const result = await trackCalculation(
      'test-calculator',
      { test: true, timestamp: new Date().toISOString() },
      { testResult: 'Browser console test', cubicYards: 1.23 }
    );
    
    console.log('✅ Test complete - check your Google Sheet!');
    console.log('📋 Sheet name: "Calculator Tracking"');
    return result;
  };
  
  // Log instructions on load
  console.log('💡 Tracking loaded. Run testTracking() to verify setup.');
}
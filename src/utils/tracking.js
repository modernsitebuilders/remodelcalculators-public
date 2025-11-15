/**
 * Enhanced Tracking for Construction Calculators
 * Tracks to both Google Sheets and Google Analytics 4
 */

// REPLACE WITH YOUR DEPLOYED APPS SCRIPT URL
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzG6EphsB_DShdNMO3K7Zh3PZ8y6g_hNEesYw_7Vh4s_JbkCDlvpE5yh3vpJPqDXJHJ/exec';

/**
 * Track calculation to both Google Sheets and GA4
 * @param {string} calculatorType - Type of calculator (concrete, drywall, etc)
 * @param {object} inputs - User input values
 * @param {object} result - Calculation results
 * @returns {Promise<boolean>}
 */
export async function trackCalculation(calculatorType, inputs, result) {
  console.log('🔍 trackCalculation called:', { calculatorType, inputs, result });
  
  // Build the tracking payload for Sheets
  const trackingData = {
    siteId: 'job-calculators',
    calculatorType: calculatorType || 'unknown',
    inputs: inputs || {},
    result: result || {},
    userAgent: navigator.userAgent,
    pageUrl: window.location.href,
    timestamp: new Date().toISOString()
  };

  console.log('📊 Tracking data prepared:', trackingData);

  // Track to Google Sheets
  await trackToSheets(trackingData);
  
  // Track to Google Analytics
  trackToGA4(calculatorType, inputs, result);
  
  return true;
}

/**
 * Send tracking data to Google Sheets
 */
async function trackToSheets(trackingData) {
  try {
    console.log('📤 Sending to Google Sheets...');
    
    await fetch(SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData),
      mode: 'no-cors' // Required for Apps Script
    });
    
    console.log('✅ Sheets tracking sent successfully');
  } catch (err) {
    console.warn('⚠️ Sheets tracking error (non-critical):', err.message);
  }
}

/**
 * Send tracking event to Google Analytics 4
 */
function trackToGA4(calculatorType, inputs, result) {
  // Check if gtag is available
  if (typeof window.gtag === 'undefined') {
    console.warn('⚠️ GA4 not available - gtag function not found');
    console.log('💡 This is normal if GA4 script hasn\'t loaded yet');
    return;
  }

  try {
    console.log('📤 Sending to GA4...');
    
    // Send calculator_use event
    window.gtag('event', 'calculator_use', {
      event_category: 'calculators',
      event_label: calculatorType,
      calculator_type: calculatorType,
      // Include relevant result data (calculator-specific)
      ...(result?.cubicYards && { result_cubic_yards: result.cubicYards }),
      ...(result?.bags80lb && { result_bags_80lb: result.bags80lb }),
      ...(result?.sheets && { result_sheets: result.sheets }),
      ...(result?.gallons && { result_gallons: result.gallons }),
      ...(result?.squareFeet && { result_square_feet: result.squareFeet }),
      value: 1 // Generic value for counting uses
    });
    
    console.log('✅ GA4 tracking sent:', {
      event: 'calculator_use',
      calculator_type: calculatorType
    });
    
  } catch (gaError) {
    console.error('❌ GA4 tracking error:', gaError);
  }
}

/**
 * Test function - Run in browser console to verify tracking
 * Usage: window.testTracking()
 */
if (typeof window !== 'undefined') {
  window.testTracking = async function() {
    console.log('🧪 Testing tracking system...');
    console.log('📍 Sheets URL:', SHEETS_URL);
    console.log('📍 gtag available:', typeof window.gtag !== 'undefined');
    
    const result = await trackCalculation(
      'test-calculator',
      { test: true, length: 10, width: 10 },
      { testResult: 'Browser console test', cubicYards: 3.7 }
    );
    
    console.log('✅ Test complete!');
    console.log('📋 Check your Google Sheet: "Calculator Tracking" tab');
    console.log('📊 Check GA4: Realtime → Events');
    return result;
  };
  
  // Check GA4 status on load
  window.checkGA4 = function() {
    console.log('🔍 Checking GA4 status...');
    console.log('gtag available:', typeof window.gtag !== 'undefined');
    console.log('dataLayer available:', typeof window.dataLayer !== 'undefined');
    if (typeof window.dataLayer !== 'undefined') {
      console.log('dataLayer contents:', window.dataLayer);
    }
  };
  
  // Log instructions on page load
  console.log('💡 Tracking utilities loaded:');
  console.log('  - Run testTracking() to test both Sheets and GA4');
  console.log('  - Run checkGA4() to verify GA4 status');
}
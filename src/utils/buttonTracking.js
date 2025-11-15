/**
 * Button Click Tracking
 * Tracks all button interactions across calculators
 */

/**
 * Track button click to Google Analytics
 * @param {string} buttonName - Name/label of the button clicked
 * @param {string} calculatorType - Type of calculator (concrete, drywall, etc)
 * @param {object} additionalData - Any additional data to track
 */
export function trackButtonClick(buttonName, calculatorType, additionalData = {}) {
  if (typeof window.gtag !== 'undefined') {
    try {
      window.gtag('event', 'button_click', {
        event_category: 'engagement',
        event_label: buttonName,
        calculator_type: calculatorType,
        ...additionalData
      });
      console.log('📊 GA4 Button Click:', {
        button: buttonName,
        calculator: calculatorType,
        ...additionalData
      });
    } catch (error) {
      console.warn('⚠️ GA4 button tracking error:', error);
    }
  } else {
    console.warn('⚠️ gtag not available for button tracking');
  }
}

/**
 * Track specific calculator interactions
 */
export const trackCalculatorInteraction = {
  /**
   * Track when Calculate button is pressed
   */
  calculate: (calculatorType, hasResults) => {
    trackButtonClick('Calculate', calculatorType, { 
      has_results: hasResults,
      interaction_type: 'calculate'
    });
  },

  /**
   * Track when Start Over/Reset button is pressed
   */
  startOver: (calculatorType) => {
    trackButtonClick('Start Over', calculatorType, { 
      interaction_type: 'reset'
    });
  },

  /**
   * Track when Copy Results button is pressed
   */
  copyResults: (calculatorType) => {
    trackButtonClick('Copy Results', calculatorType, { 
      interaction_type: 'copy'
    });
  },

  /**
   * Track when Print button is pressed
   */
  print: (calculatorType) => {
    trackButtonClick('Print', calculatorType, { 
      interaction_type: 'print'
    });
  },

  /**
   * Track form field interactions
   */
  fieldChange: (calculatorType, fieldName, fieldValue) => {
    if (typeof window.gtag !== 'undefined') {
      try {
        window.gtag('event', 'form_interaction', {
          event_category: 'engagement',
          calculator_type: calculatorType,
          field_name: fieldName,
          field_value: typeof fieldValue === 'number' ? fieldValue : 'text'
        });
      } catch (error) {
        console.warn('⚠️ GA4 field tracking error:', error);
      }
    }
  }
};
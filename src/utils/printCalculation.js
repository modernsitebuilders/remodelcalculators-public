/**
 * Universal print function for all calculators
 * Automatically formats and prints the current page
 */
export function printCalculation(calculatorName) {
  // Set calculator name and date on body for print stylesheet
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  document.body.setAttribute('data-calculator-name', calculatorName);
  document.body.setAttribute('data-print-date', today);
  
  // Trigger print dialog
  window.print();
  
  // Clean up attributes after print
  setTimeout(() => {
    document.body.removeAttribute('data-calculator-name');
    document.body.removeAttribute('data-print-date');
  }, 1000);
}
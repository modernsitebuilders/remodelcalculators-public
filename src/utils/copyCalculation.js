// Universal copy calculation function for all calculators
export function copyCalculation(calculatorName, inputs, outputs, note = '') {
  const date = new Date().toLocaleDateString('en-US');
  
  // Format inputs
  let inputsText = '';
  Object.entries(inputs).forEach(([key, value]) => {
    if (value && value !== '0' && value !== '') {
      inputsText += `${key}: ${value}\n`;
    }
  });
  
  // Format outputs
  let outputsText = '';
  Object.entries(outputs).forEach(([key, value]) => {
    if (value && value !== '0' && value !== '') {
      outputsText += `${key}: ${value}\n`;
    }
  });
  
  // Build formatted text
  const calcText = `
${calculatorName} - ${date}
────────────────────────────────
INPUTS:
${inputsText}
MATERIALS NEEDED:
${outputsText}
${note ? 'Note: ' + note : ''}

Calculated at jobcalculators.com
  `.trim();

  // Copy to clipboard
  return navigator.clipboard.writeText(calcText).then(() => {
    return true; // Success
  }).catch(() => {
    return false; // Failed
  });
}
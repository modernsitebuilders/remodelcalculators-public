/**
 * Universal validation system for all calculators
 * Shows warnings for impossible/problematic inputs
 */

export const ValidationTypes = {
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
};

/**
 * Validation rule structure:
 * {
 *   field: 'fieldName',
 *   condition: (value, allValues) => boolean,
 *   message: 'Warning message',
 *   type: ValidationTypes.WARNING
 * }
 */

export function validateInput(value, rules, allValues = {}) {
  const violations = [];
  
  rules.forEach(rule => {
    if (rule.condition(value, allValues)) {
      violations.push({
        field: rule.field,
        message: rule.message,
        type: rule.type || ValidationTypes.WARNING
      });
    }
  });
  
  return violations;
}

export function validateAllInputs(values, rulesets) {
  const allViolations = [];
  
  Object.keys(rulesets).forEach(field => {
    const fieldValue = values[field];
    const rules = rulesets[field];
    const violations = validateInput(fieldValue, rules, values);
    allViolations.push(...violations);
  });
  
  return allViolations;
}

// Common validation rules (reusable across calculators)
export const CommonRules = {
  // Numeric validations
  tooLarge: (max, message) => ({
    condition: (val) => parseFloat(val) > max,
    message: message || `Value exceeds ${max}`,
    type: ValidationTypes.WARNING
  }),
  
  tooSmall: (min, message) => ({
    condition: (val) => parseFloat(val) < min && parseFloat(val) > 0,
    message: message || `Value below ${min}`,
    type: ValidationTypes.WARNING
  }),
  
  unrealistic: (min, max, context) => ({
    condition: (val) => {
      const num = parseFloat(val);
      return num > 0 && (num < min || num > max);
    },
    message: `${context}: Typical range is ${min}-${max}. Please verify measurement.`,
    type: ValidationTypes.WARNING
  }),
  
  // Building code warnings
  codeViolation: (message) => ({
    condition: (val) => parseFloat(val) > 0,
    message: message,
    type: ValidationTypes.ERROR
  }),
  
  // Ratio validations
  ratioWarning: (otherField, minRatio, maxRatio, message) => ({
    condition: (val, allVals) => {
      const num = parseFloat(val);
      const other = parseFloat(allVals[otherField]);
      if (!num || !other) return false;
      const ratio = num / other;
      return ratio < minRatio || ratio > maxRatio;
    },
    message: message,
    type: ValidationTypes.WARNING
  })
};
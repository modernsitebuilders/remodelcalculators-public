'use client';

import { useState, useCallback } from 'react';
import { validateAllInputs } from '@/utils/validation';

/**
 * Universal validation hook for all calculators
 * Usage: const { violations, validate, ValidationDisplay } = useValidation(rules);
 */
export function useValidation(validationRules) {
  const [violations, setViolations] = useState([]);

  const validate = useCallback((values) => {
    const newViolations = validateAllInputs(values, validationRules);
    setViolations(newViolations);
  }, [validationRules]);

  // Auto-generate the display component
  const ValidationDisplay = useCallback(() => {
    if (!violations || violations.length === 0) return null;

    return (
      <div className="space-y-2 mb-4">
        {violations.map((violation, index) => {
          const isError = violation.type === 'error';
          const isInfo = violation.type === 'info';
          
          const bgColor = isError ? 'bg-red-50' : isInfo ? 'bg-blue-50' : 'bg-yellow-50';
          const borderColor = isError ? 'border-red-200' : isInfo ? 'border-blue-200' : 'border-yellow-200';
          const textColor = isError ? 'text-red-800' : isInfo ? 'text-blue-800' : 'text-yellow-800';
          const icon = isError ? '🚫' : isInfo ? 'ℹ️' : '⚠️';

          return (
            <div
              key={index}
              className={`${bgColor} ${borderColor} border rounded-lg p-3 flex items-start gap-2`}
            >
              <span className="text-lg">{icon}</span>
              <p className={`text-sm ${textColor} flex-1`}>
                {violation.message}
              </p>
            </div>
          );
        })}
      </div>
    );
  }, [violations]);

  return { violations, validate, ValidationDisplay };
}

/**
 * Helper to create an onChange handler with validation
 */
export function withValidation(setter, validate, values) {
  return (e) => {
    const newValue = e.target.value;
    setter(newValue);
    // Validate after state updates
    setTimeout(() => validate(values), 100);
  };
}
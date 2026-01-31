/**
 * React Hooks for Calculator Tracking
 * Use these hooks in your calculator components
 */

import { useEffect, useState, useRef } from 'react';
import {
  trackCalculatorStart,
  trackFieldInteraction,
  trackCalculatorAbandonment,
  trackResultAction,
  trackCalculatorFlow
} from './enhanced-tracking';

/**
 * Track calculator lifecycle
 * Usage: useCalculatorTracking('concrete-calculator')
 */
export function useCalculatorTracking(calculatorType) {
  const hasStarted = useRef(false);
  const fieldsInteracted = useRef(new Set());
  
  useEffect(() => {
    // Track calculator start on first render
    if (!hasStarted.current) {
      trackCalculatorStart(calculatorType);
      hasStarted.current = true;
    }
    
    // Track abandonment on unmount (if no calculation completed)
    return () => {
      const totalFields = document.querySelectorAll('input, select, textarea').length;
      const completed = fieldsInteracted.current.size;
      
      if (completed > 0 && completed < totalFields) {
        trackCalculatorAbandonment(calculatorType, completed, totalFields);
      }
    };
  }, [calculatorType]);
  
  /**
   * Track field interaction
   */
  const trackField = (fieldName, value) => {
    fieldsInteracted.current.add(fieldName);
    trackFieldInteraction(calculatorType, fieldName, value);
  };
  
  /**
   * Track result action (copy, print, etc.)
   */
  const trackAction = (action) => {
    trackResultAction(calculatorType, action);
  };
  
  return { trackField, trackAction };
}

/**
 * Track form field changes with debouncing
 * Usage: const handleChange = useFieldTracking('concrete-calculator', 'length')
 */
export function useFieldTracking(calculatorType, fieldName, debounceMs = 1000) {
  const timeoutRef = useRef(null);
  
  return (value) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      trackFieldInteraction(calculatorType, fieldName, value);
    }, debounceMs);
  };
}

/**
 * Track calculator navigation flow
 * Usage: useCalculatorFlow('concrete-calculator')
 */
export function useCalculatorFlow(currentCalculator) {
  useEffect(() => {
    const previousCalculator = sessionStorage.getItem('lastCalculator');
    
    if (previousCalculator && previousCalculator !== currentCalculator) {
      trackCalculatorFlow(previousCalculator, currentCalculator);
    }
    
    sessionStorage.setItem('lastCalculator', currentCalculator);
  }, [currentCalculator]);
}

/**
 * Track time spent on calculator
 * Usage: const timeSpent = useCalculatorTime()
 */
export function useCalculatorTime() {
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startTime]);
  
  return timeSpent;
}
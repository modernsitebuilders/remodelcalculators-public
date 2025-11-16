'use client';

import { Calculator, RotateCcw } from 'lucide-react';

/**
 * ActionButtons - Standardized button sets for calculators
 * 
 * Two variants:
 * 1. Primary: Calculate + Start Over buttons
 * 2. Results: Copy + Print buttons
 */

export function CalculateButtons({
  onCalculate,
  onStartOver,
  showStartOver = false,
  calculateText = 'Calculate',
  startOverText = 'Start Over'
}) {
  return (
    <div className="space-y-3">
      <button
        onClick={onCalculate}
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        {calculateText}
      </button>
      
      {showStartOver && (
        <button
          onClick={onStartOver}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {startOverText}
        </button>
      )}
    </div>
  );
}

export function ResultsButtons({
  onCopy,
  onPrint,
  copyButtonText = '📋 Copy Calculation',
  printButtonText = '🖨️ Print Results'
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex gap-3">
        <button 
          onClick={onCopy}
          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {copyButtonText}
        </button>
        <button 
          onClick={onPrint}
          className="flex-1 bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {printButtonText}
        </button>
      </div>
    </div>
  );
}
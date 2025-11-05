'use client';

import { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * CalculatorMethodology Component
 * 
 * Displays the exact formulas and methodology used in calculations
 * Builds trust by showing transparency in how results are calculated
 * 
 * @param {Object} props
 * @param {string} props.calculatorType - Type of calculator (concrete, paint, etc.)
 * @param {Array} props.formulas - Array of formula objects with {name, formula, explanation}
 * @param {Array} props.constants - Array of constant objects with {name, value, description}
 * @param {string} props.source - Primary source/standard used (e.g., "ACI 318", "NWFA")
 */
export default function CalculatorMethodology({ 
  calculatorType, 
  formulas = [], 
  constants = [],
  source = "Industry Standards"
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-8">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <div className="flex items-start gap-3 flex-1">
          <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0 mt-0.5">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              How We Calculate
            </h3>
            <p className="text-sm text-gray-700">
              Industry-standard formulas based on <strong>{source}</strong>. Click to view exact calculations.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-blue-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-blue-600" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 space-y-6 border-t-2 border-blue-200 pt-6">
          {/* Formulas Section */}
          {formulas.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Calculation Formulas
              </h4>
              <div className="space-y-4">
                {formulas.map((formula, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="font-semibold text-gray-900 mb-2">
                      {formula.name}
                    </div>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-800 mb-2 overflow-x-auto">
                      {formula.formula}
                    </div>
                    {formula.explanation && (
                      <p className="text-sm text-gray-600">
                        {formula.explanation}
                      </p>
                    )}
                    {formula.example && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Example:</p>
                        <p className="text-xs text-gray-600">{formula.example}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Constants Section */}
          {constants.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Standard Constants
              </h4>
              <div className="bg-white rounded-lg border border-blue-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Constant</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {constants.map((constant, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{constant.name}</td>
                        <td className="px-4 py-3 font-mono text-gray-700">{constant.value}</td>
                        <td className="px-4 py-3 text-gray-600">{constant.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Additional Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> All calculations include appropriate waste factors based on project complexity and material type. Results are estimates and should be verified by professionals before purchasing materials.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
'use client';

import { useState } from 'react';
import { MapPin, AlertTriangle, ChevronDown, ChevronUp, Info } from 'lucide-react';

/**
 * RegionalVariations Component
 * 
 * Alerts users to regional code variations and requirements
 * Helps users understand local building code differences
 * 
 * @param {Object} props
 * @param {Array} props.variations - Array of regional variation objects
 * @param {string} props.warningMessage - General warning about checking local codes
 */
export default function RegionalVariations({ 
  variations = [],
  warningMessage = "Building codes and requirements vary by location. Always check with your local building department before starting construction."
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (variations.length === 0) return null;

  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 my-8">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <div className="flex items-start gap-3 flex-1">
          <div className="bg-amber-500 p-2 rounded-lg flex-shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
              Regional Code Variations
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </h3>
            <p className="text-sm text-gray-700">
              {warningMessage}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-amber-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-amber-600" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 space-y-4 border-t-2 border-amber-300 pt-6">
          {variations.map((variation, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 border-2 border-amber-200"
            >
              {/* Title & Icon */}
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                  <Info className="w-5 h-5 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {variation.title}
                  </h4>
                  {variation.subtitle && (
                    <p className="text-sm text-gray-600">
                      {variation.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-3 ml-14">
                {variation.description}
              </p>

              {/* Examples by Region */}
              {variation.examples && variation.examples.length > 0 && (
                <div className="ml-14 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-700 mb-2">
                    Regional Examples:
                  </p>
                  <div className="space-y-2">
                    {variation.examples.map((example, exIdx) => (
                      <div key={exIdx} className="flex items-start gap-2">
                        <MapPin className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-xs font-medium text-gray-900">
                            {example.region}:
                          </span>
                          <span className="text-xs text-gray-600 ml-1">
                            {example.requirement}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact Statement */}
              {variation.impact && (
                <div className="ml-14 mt-3 flex items-start gap-2 text-xs text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                  <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Impact:</strong> {variation.impact}</span>
                </div>
              )}
            </div>
          ))}

          {/* Action Items */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mt-6">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-blue-600" />
              Before You Build
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Contact your local building department for specific requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Verify frost line depths, wind zones, and seismic requirements for your area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Check if permits are required and schedule required inspections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Consult with licensed contractors familiar with local codes</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
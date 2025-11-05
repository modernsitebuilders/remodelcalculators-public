'use client';

import { BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';

/**
 * IndustryStandards Component
 * 
 * Displays authoritative industry standards and sources with links
 * Builds credibility by showing where calculations come from
 * 
 * @param {Object} props
 * @param {Array} props.standards - Array of standard objects
 * @param {string} props.lastVerified - Date standards were last verified (e.g., "November 2025")
 */
export default function IndustryStandards({ 
  standards = [],
  lastVerified = "November 2025"
}) {
  if (standards.length === 0) return null;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
          <BookOpen className="w-6 h-6 text-green-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Industry Standards Referenced
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Last verified: {lastVerified}</span>
          </div>
        </div>
      </div>

      {/* Standards List */}
      <div className="space-y-4">
        {standards.map((standard, index) => (
          <div 
            key={index}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors"
          >
            {/* Standard Name */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <h4 className="font-bold text-gray-900 flex-1">
                {standard.name}
                {standard.code && (
                  <span className="ml-2 text-sm font-normal text-gray-600">
                    ({standard.code})
                  </span>
                )}
              </h4>
              {standard.url && (
                <a
                  href={standard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium flex-shrink-0"
                  aria-label={`View ${standard.name} documentation`}
                >
                  View Standard
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed">
              {standard.description}
            </p>

            {/* Specific Requirements (Optional) */}
            {standard.requirements && standard.requirements.length > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-300">
                <p className="text-xs font-semibold text-gray-700 mb-2">Key Requirements:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {standard.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applies To (Optional) */}
            {standard.appliesTo && (
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600">Applies to:</span>
                <span className="text-xs text-gray-600">{standard.appliesTo}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 pt-6 border-t-2 border-gray-200">
        <p className="text-xs text-gray-600 leading-relaxed">
          <strong>Standards Disclaimer:</strong> Standards and codes are subject to periodic updates. 
          Always verify current requirements with local building authorities and professional engineers 
          before beginning construction. Links provided are for reference only.
        </p>
      </div>
    </div>
  );
}
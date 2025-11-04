'use client';

import { ExternalLink, Calculator } from 'lucide-react';

/**
 * Smart sidebar that links to dumpster-size-calculator.com
 * Routes to specific calculators for roofing, concrete, and drywall pages
 * Routes to main site for all other pages
 */
export default function DumpsterSidebar({ calculatorType = 'general' }) {
  // Define routing logic
  const getDestination = () => {
    const baseUrl = 'https://dumpster-size-calculator.com';
    const utmBase = 'utm_source=jobcalculators&utm_medium=sidebar';
    
    switch(calculatorType) {
      case 'roofing':
        return {
          url: `${baseUrl}/roofing-dumpster-calculator?${utmBase}&utm_campaign=roofing-calculator`,
          title: 'Roofing Dumpster Calculator',
          description: 'Calculate exact dumpster size for shingle and roofing debris removal',
          highlight: 'Roofing projects generate 40-80 lbs per square. Proper sizing prevents overage fees.',
          icon: '🏠'
        };
      
      case 'concrete':
        return {
          url: `${baseUrl}/concrete-dumpster-calculator?${utmBase}&utm_campaign=concrete-calculator`,
          title: 'Concrete Dumpster Calculator',
          description: 'Heavy materials require specialized containers. Calculate your needs.',
          highlight: 'Concrete weighs 4,000 lbs/yard. Weight limits apply—calculate before ordering.',
          icon: '🏗️'
        };
      
      case 'drywall':
        return {
          url: `${baseUrl}/drywall-dumpster-calculator?${utmBase}&utm_campaign=drywall-calculator`,
          title: 'Drywall Dumpster Calculator',
          description: 'Calculate disposal needs for drywall sheets and renovation debris',
          highlight: 'Drywall is bulky but recyclable. Plan disposal before starting demo.',
          icon: '📐'
        };
      
      default:
        return {
          url: `${baseUrl}?${utmBase}&utm_campaign=${calculatorType}`,
          title: 'Dumpster Size Calculator',
          description: 'Calculate perfect dumpster size for your project waste',
          highlight: 'Proper container sizing reduces costs and prevents project delays.',
          icon: '🗑️'
        };
    }
  };

  const destination = getDestination();

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200 p-4">
        <div className="flex items-start gap-3">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <Calculator className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-600 font-medium mb-1">
              Dumpster-Size-Calculator.com
            </div>
            <div className="text-sm text-gray-500">
              Partner Site
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Calculator Icon & Title */}
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">{destination.icon}</span>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              {destination.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={destination.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center text-sm group mb-4"
        >
          <span className="flex items-center justify-center gap-2">
            Calculate Dumpster Size →
          </span>
        </a>

        {/* Key Highlight */}
        <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded-r mb-4">
          <p className="text-xs text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Industry Standard:</strong> {destination.highlight}
          </p>
        </div>

        {/* Most Popular Calculators */}
        <div className="border-t border-gray-100 pt-4">
          <h4 className="font-semibold text-gray-900 text-sm mb-3">
            Most Popular Calculators
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <a href={`https://dumpster-size-calculator.com?utm_source=jobcalculators&utm_medium=sidebar&utm_campaign=${calculatorType}-list`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                General Dumpster Calculator
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <a href={`https://dumpster-size-calculator.com/roofing-dumpster-calculator?utm_source=jobcalculators&utm_medium=sidebar&utm_campaign=${calculatorType}-list`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                Roofing Dumpster
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <a href={`https://dumpster-size-calculator.com/concrete-dumpster-calculator?utm_source=jobcalculators&utm_medium=sidebar&utm_campaign=${calculatorType}-list`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                Concrete Dumpster
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <a href={`https://dumpster-size-calculator.com/drywall-dumpster-calculator?utm_source=jobcalculators&utm_medium=sidebar&utm_campaign=${calculatorType}-list`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                Drywall Dumpster
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <span className="text-gray-500">And More...</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
          Free • No Login Required
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

/**
 * SectionCard - Groups related inputs or results with a title
 * 
 * Used for:
 * - Input sections ("Project Dimensions", "Material Options")
 * - Result sections ("Materials Required", "Coverage Area")
 * - Info sections ("Important Notes", "Industry Standards")
 */

export function SectionCard({
  title,
  icon: Icon,
  children,
  variant = 'default',
  collapsible = false,
  defaultExpanded = true
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const variantClasses = {
    default: 'bg-white shadow-lg',
    info: 'bg-blue-50 border-2 border-blue-200',
    warning: 'bg-yellow-50 border-2 border-yellow-200',
    success: 'bg-green-50 border-2 border-green-200'
  };

  const headerContent = (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5 text-blue-600" />}
      <h3 className="font-bold text-gray-800">{title}</h3>
    </div>
  );

  return (
    <div className={`${variantClasses[variant]} rounded-lg p-6`}>
      {collapsible ? (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-left mb-3"
          >
            {headerContent}
            <span className="text-2xl">{isExpanded ? '−' : '+'}</span>
          </button>
          {isExpanded && children}
        </>
      ) : (
        <>
          {title && <div className="mb-4">{headerContent}</div>}
          {children}
        </>
      )}
    </div>
  );
}
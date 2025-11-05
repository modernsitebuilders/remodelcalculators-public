'use client';

import { AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { ValidationTypes } from '@/utils/validation';

export default function ValidationWarning({ violations }) {
  if (!violations || violations.length === 0) return null;

  return (
    <div className="space-y-2 mb-4">
      {violations.map((violation, index) => {
        const isError = violation.type === ValidationTypes.ERROR;
        const isInfo = violation.type === ValidationTypes.INFO;
        
        const bgColor = isError ? 'bg-red-50' : isInfo ? 'bg-blue-50' : 'bg-yellow-50';
        const borderColor = isError ? 'border-red-200' : isInfo ? 'border-blue-200' : 'border-yellow-200';
        const textColor = isError ? 'text-red-800' : isInfo ? 'text-blue-800' : 'text-yellow-800';
        const Icon = isError ? AlertCircle : isInfo ? Info : AlertTriangle;
        const iconColor = isError ? 'text-red-600' : isInfo ? 'text-blue-600' : 'text-yellow-600';

        return (
          <div
            key={index}
            className={`${bgColor} ${borderColor} border rounded-lg p-3 flex items-start gap-2`}
          >
            <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
            <p className={`text-sm ${textColor} flex-1`}>
              {violation.message}
            </p>
          </div>
        );
      })}
    </div>
  );
}
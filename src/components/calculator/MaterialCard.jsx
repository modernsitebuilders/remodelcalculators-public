'use client';

import { Package } from 'lucide-react';

/**
 * MaterialCard - Displays a material quantity in results
 * 
 * Used for showing calculated materials like:
 * - "80 lb bags: 45 bags"
 * - "Drywall Sheets: 32"
 * - "Joint Compound: 8 gal"
 */

export function MaterialCard({
  title,
  value,
  subtitle = '',
  note = '',
  unit = '',
  color = 'blue',
  icon: Icon = Package,
  highlight = false
}) {
  const colorClasses = {
    blue: {
      bg: highlight ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50',
      text: 'text-blue-600',
      iconBg: 'bg-blue-500'
    },
    cyan: {
      bg: highlight ? 'bg-cyan-50 border-2 border-cyan-500' : 'bg-gray-50',
      text: 'text-cyan-600',
      iconBg: 'bg-cyan-500'
    },
    green: {
      bg: highlight ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50',
      text: 'text-green-600',
      iconBg: 'bg-green-500'
    },
    orange: {
      bg: highlight ? 'bg-orange-50 border-2 border-orange-500' : 'bg-gray-50',
      text: 'text-orange-600',
      iconBg: 'bg-orange-500'
    },
    purple: {
      bg: highlight ? 'bg-purple-50 border-2 border-purple-500' : 'bg-gray-50',
      text: 'text-purple-600',
      iconBg: 'bg-purple-500'
    },
    red: {
      bg: highlight ? 'bg-red-50 border-2 border-red-500' : 'bg-gray-50',
      text: 'text-red-600',
      iconBg: 'bg-red-500'
    },
    gray: {
      bg: highlight ? 'bg-gray-100 border-2 border-gray-500' : 'bg-gray-50',
      text: 'text-gray-600',
      iconBg: 'bg-gray-500'
    }
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`flex items-center justify-between p-4 ${colors.bg} rounded-lg`}>
      <div className="flex-1">
        <div className="font-bold text-gray-900">{title}</div>
        {subtitle && (
          <div className="text-sm text-gray-600 mt-0.5">{subtitle}</div>
        )}
        {note && (
          <div className="text-xs text-gray-500 mt-1">{note}</div>
        )}
      </div>
      <div className={`text-3xl font-bold ${colors.text} ml-4`}>
        {value}{unit && ` ${unit}`}
      </div>
    </div>
  );
}
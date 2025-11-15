'use client';

/**
 * StatCard - Display a single statistic/metric
 * 
 * Used in area summaries and coverage grids
 */

export function StatCard({
  label,
  value,
  unit = '',
  color = 'blue',
  highlight = false,
  size = 'default'
}) {
  const colorClasses = {
    blue: 'text-blue-600',
    cyan: 'text-cyan-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    gray: 'text-gray-900'
  };

  const sizeClasses = {
    small: 'text-xl',
    default: 'text-3xl',
    large: 'text-4xl'
  };

  return (
    <div className={`bg-white rounded-lg p-4 text-center ${highlight ? 'border-2 border-' + color + '-500' : ''}`}>
      <div className={`${sizeClasses[size]} font-bold ${colorClasses[color]}`}>
        {value}{unit}
      </div>
      <div className={`text-sm ${highlight ? 'font-semibold text-gray-700' : 'text-gray-600'} mt-1`}>
        {label}
      </div>
    </div>
  );
}

/**
 * InputGrid - Responsive grid layout for form inputs
 * 
 * Automatically handles 1-4 column responsive layouts
 */

export function InputGrid({
  columns = 2,
  children,
  gap = 4
}) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-${gap}`}>
      {children}
    </div>
  );
}
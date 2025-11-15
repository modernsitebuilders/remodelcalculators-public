'use client';

/**
 * NumberInput - Standardized number input for all calculators
 * 
 * Handles:
 * - Scroll prevention (no accidental value changes)
 * - Visual validation states (orange = empty required, yellow = dropdown, gray = complete)
 * - Units display
 * - Consistent styling across all calculators
 */

export function NumberInput({
  label,
  value,
  onChange,
  unit = '',
  required = false,
  min,
  max,
  step = '0.1',
  fieldName,
  placeholder = '',
  helpText = ''
}) {
  // Prevent scroll from changing values
  const handleWheel = (e) => {
    e.target.blur();
  };

 const getBorderColor = () => {
  if (required && (!value || value === '')) return 'border-red-400';
  return 'border-gray-300';
};

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onWheel={handleWheel}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border-2 ${getBorderColor()} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium pointer-events-none">
            {unit}
          </span>
        )}
      </div>
      
      {helpText && (
        <p className="mt-1 text-xs text-gray-500">{helpText}</p>
      )}
    </div>
  );
}
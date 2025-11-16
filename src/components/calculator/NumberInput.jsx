'use client';

/**
 * NumberInput - Standardized number input for all calculators
 * 
 * Handles:
 * - Scroll prevention (no accidental value changes)
 * - Visual validation states (red = empty required, yellow = filled)
 * - Units display
 * - Consistent styling across all calculators
 */

export function NumberInput({
  label,
  value,
  onChange,
  unit = '',
  required = false,
  disabled = false,  // ✅ ADD THIS
  min,
  max,
  step = '0.1',
  fieldName,
  placeholder = '',
  note = ''  // ✅ CHANGE helpText to note (matches DrywallCalculator)
}) {
  // Prevent scroll from changing values
  const handleWheel = (e) => {
    e.target.blur();
  };

  const borderColor = required && (value === '' || value === null || value === undefined)
    ? 'border-red-400'
    : 'border-yellow-400';

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
          onWheel={(e) => e.target.blur()}
          disabled={disabled}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className={`w-full px-4 py-2 border-2 ${borderColor} rounded-lg focus:outline-none transition-colors ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
          } [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium pointer-events-none">
            {unit}
          </span>
        )}
      </div>
      
      {note && (
        <p className="mt-1 text-xs text-gray-500">{note}</p>
      )}
    </div>
  );
}
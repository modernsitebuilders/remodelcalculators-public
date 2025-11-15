'use client';

/**
 * SelectInput - Standardized select/dropdown for all calculators
 * 
 * Handles:
 * - Consistent styling with NumberInput
 * - Visual state (yellow border for dropdowns)
 * - Options can be array of strings or objects with value/label
 */

export function SelectInput({
  label,
  value,
  onChange,
  options = [],
  required = false,
  fieldName,
  helpText = ''
}) {
  // Options can be simple array ['option1', 'option2'] 
  // or array of objects [{value: 'opt1', label: 'Option 1'}]
  const renderOptions = () => {
    if (options.length === 0) return null;
    
    // Check if first option is object or string
    if (typeof options[0] === 'object') {
      return options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ));
    }
    
    // Simple string array
    return options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <select
  value={value}
  onChange={(e) => onChange(e.target.value)}
className="w-full px-4 py-2 border-2 border-yellow-400 rounded-lg focus:outline-none transition-colors bg-white"
  style={{ width: '100%' }}
>
        {renderOptions()}
      </select>
      
      {helpText && (
        <p className="mt-1 text-xs text-gray-500">{helpText}</p>
      )}
    </div>
  );
}
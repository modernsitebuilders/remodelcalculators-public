export default function DumpsterCalculatorPromo() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-lg shadow-sm">
      <div className="flex items-start gap-3">
        <span className="text-3xl flex-shrink-0">🗑️</span>
        <div>
          <p className="text-gray-900 font-semibold mb-1">
            Don't Forget Waste Removal
          </p>
          <p className="text-gray-700 text-sm">
            After calculating materials, plan for debris disposal with our{' '}
            <a 
              href="https://dumpster-size-calculator.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:text-blue-800 hover:underline transition-colors"
            >
              Dumpster Size Calculator
            </a>
            {' '}— Free tool to find the perfect container size and avoid overage fees.
          </p>
        </div>
      </div>
    </div>
  );
}
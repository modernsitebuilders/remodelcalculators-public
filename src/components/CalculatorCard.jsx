import { Link } from 'react-router-dom'

export default function CalculatorCard({ calculator }) {
  return (
    <Link to={calculator.path} className="calculator-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{calculator.icon}</div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {calculator.name}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4">
        {calculator.description}
      </p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">{calculator.category}</span>
        <span className="text-primary-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
          Calculate →
        </span>
      </div>
    </Link>
  )
}
import Link from 'next/link';

export default function CalculatorBlogLink({ calculatorSlug, guideSlug, guideTitle }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
      <div className="flex items-start gap-3">
        <span className="text-3xl">📚</span>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Want to Learn More?
          </h3>
          <p className="text-gray-700 mb-3">
            Check out our comprehensive guide with industry standards, specifications, and best practices.
          </p>
          <Link 
            href={`/blog/${guideSlug}`}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline"
          >
            Read the {guideTitle} Guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

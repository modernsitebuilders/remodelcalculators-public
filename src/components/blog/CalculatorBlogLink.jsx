import Link from 'next/link';

export default function CalculatorBlogLink({ blogSlug, blogTitle, description }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-4xl">📚</div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Want to Learn More?
          </h3>
          <p className="text-gray-700 mb-4">
            {description || `Check out our comprehensive guide on ${blogTitle.toLowerCase()} with industry standards, specifications, and best practices.`}
          </p>
          <Link 
            href={`/blog/${blogSlug}`}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Read the Guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

export const metadata = {
  title: 'Construction Guides & Resources | Construction Calculators',
  description: 'Expert guides on concrete, drywall, roofing, paint, flooring, and fencing calculations. Industry standards and building codes explained.',
};

export default function BlogPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Construction Guides
          </h1>
          <p className="text-xl text-gray-600">
            Expert guides covering industry standards, building codes, and material calculations.
            No fluff—just facts and specifications.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Icon/Image */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-center">
                  <div className="text-6xl mb-2">{post.image}</div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Calculator?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            All our guides reference our free construction calculators. Get instant material estimates.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            View All Calculators →
          </Link>
        </div>
      </div>
    </div>
  );
}
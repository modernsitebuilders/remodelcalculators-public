import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Construction Guides & Resources | Construction Calculators',
  description: 'Expert guides on concrete, drywall, roofing, paint, flooring, and more. Industry standards and professional specifications for contractors and DIY builders.',
  alternates: { canonical: 'https://remodelcalculators.com/blog' },
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction Guides & Resources</h1>
      <p className="text-xl text-gray-600 mb-12">
        Industry-standard guides and specifications for professional contractors and DIY enthusiasts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full">
              <div className="text-4xl mb-4">{post.image}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                Read Guide →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
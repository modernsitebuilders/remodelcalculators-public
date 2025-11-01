import { notFound } from 'next/navigation';
import { getBlogPost, blogPosts } from '@/data/blogPosts';
import Link from 'next/link';

// Import all blog post components
import ConcreteGuide from '@/components/blog/posts/ConcreteGuide';
import DrywallGuide from '@/components/blog/posts/DrywallGuide';
import RoofingGuide from '@/components/blog/posts/RoofingGuide';
import InteriorPaintGuide from '@/components/blog/posts/InteriorPaintGuide';
import ExteriorPaintGuide from '@/components/blog/posts/ExteriorPaintGuide';
import DeckStainGuide from '@/components/blog/posts/DeckStainGuide';
import FlooringGuide from '@/components/blog/posts/FlooringGuide';
import FenceGuide from '@/components/blog/posts/FenceGuide';
import SidingGuide from '@/components/blog/posts/SidingGuide';
import MulchGuide from '@/components/blog/posts/MulchGuide';

// Map slugs to components
const postComponents = {
  'concrete-calculation-guide': ConcreteGuide,
  'drywall-material-guide': DrywallGuide,
  'roofing-square-calculator': RoofingGuide,
  'interior-paint-coverage-guide': InteriorPaintGuide,
  'exterior-paint-coverage-guide': ExteriorPaintGuide,
  'deck-stain-coverage-guide': DeckStainGuide,
  'flooring-material-calculator': FlooringGuide,
  'fence-post-spacing-guide': FenceGuide,
  'siding-material-calculator': SidingGuide,
  'mulch-calculator-guide': MulchGuide,
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = 'https://jobcalculators.com'; // Change to your actual domain
  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    
    // Canonical URL
    alternates: {
      canonical: url,
    },
    
    // Open Graph tags for Facebook, LinkedIn
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      siteName: 'Construction Calculators',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `${baseUrl}/og-image-blog.jpg`, // Create a default blog OG image
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    
    // Twitter Card tags
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${baseUrl}/og-image-blog.jpg`],
    },
  };
}

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const PostComponent = postComponents[params.slug];
  
  if (!PostComponent) {
    notFound();
  }

  const baseUrl = 'https://jobcalculators.com'; // Change to your actual domain
  const url = `${baseUrl}/blog/${post.slug}`;

  // Article Schema (JSON-LD) for rich results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${baseUrl}/og-image-blog.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Construction Calculators',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`, // Add your logo
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.keywords.join(', '),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                    Guides
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{post.category}</li>
              </ol>
            </nav>

            {/* Post Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-gray-600 text-sm">{post.readTime}</span>
              <span className="text-gray-600 text-sm">{post.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="bg-white">
        <PostComponent />
      </article>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Calculate Your Materials?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our free calculator to get accurate material estimates based on industry standards.
          </p>
          <Link
            href={`/${post.slug.replace('-guide', '').replace('-calculator', '')}`}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Try the Calculator →
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{relatedPost.image}</div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {relatedPost.description.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
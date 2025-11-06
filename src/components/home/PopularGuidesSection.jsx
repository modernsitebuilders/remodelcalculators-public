import Link from 'next/link';
import { BookOpen, GraduationCap, Paintbrush, Ruler } from 'lucide-react';

export default function PopularGuidesSection() {
  const featuredGuides = [
    {
      slug: 'measure-room-square-footage',
      title: 'How to Measure Your Room',
      description: 'Step-by-step guide to accurately measure walls, calculate square footage, and account for openings. Professional measurement techniques.',
      icon: Ruler,
      color: 'blue',
      tag: 'Start Here'
    },
    {
      slug: 'when-you-need-primer',
      title: 'When You Need Primer',
      description: 'Industry guidelines on primer requirements with no marketing BS. Learn when primer is required, optional, or unnecessary.',
      icon: Paintbrush,
      color: 'purple',
      tag: 'Popular'
    },
    {
      slug: 'paint-sheen-guide',
      title: 'Choosing the Right Paint Sheen',
      description: 'Complete comparison of flat, eggshell, satin, semi-gloss, and gloss finishes with room-by-room recommendations.',
      icon: GraduationCap,
      color: 'green',
      tag: 'Essential'
    },
    {
      slug: 'interior-painting-guide',
      title: 'Complete Interior Painting Guide',
      description: 'Professional start-to-finish painting guide covering planning, prep, application, and finishing. Industry standards throughout.',
      icon: BookOpen,
      color: 'orange',
      tag: 'Comprehensive'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 group-hover:bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-200 hover:border-blue-500',
      tag: 'bg-blue-100 text-blue-700'
    },
    purple: {
      bg: 'bg-purple-50 group-hover:bg-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-200 hover:border-purple-500',
      tag: 'bg-purple-100 text-purple-700'
    },
    green: {
      bg: 'bg-green-50 group-hover:bg-green-100',
      text: 'text-green-600',
      border: 'border-green-200 hover:border-green-500',
      tag: 'bg-green-100 text-green-700'
    },
    orange: {
      bg: 'bg-orange-50 group-hover:bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-200 hover:border-orange-500',
      tag: 'bg-orange-100 text-orange-700'
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Professional Guides</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from the Experts
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-standard guides with no marketing fluff. Professional techniques, measurements, and specifications.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredGuides.map((guide) => {
            const IconComponent = guide.icon;
            const colors = colorClasses[guide.color];
            
            return (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className={`group block bg-white rounded-xl border-2 ${colors.border} hover:shadow-xl transition-all duration-200 overflow-hidden`}
              >
                {/* Card Header */}
                <div className={`${colors.bg} p-4 transition-colors`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${colors.bg.replace('group-hover:', '')} p-2 rounded-lg`}>
                      <IconComponent className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <span className={`text-xs font-bold ${colors.tag} px-2 py-1 rounded-full`}>
                      {guide.tag}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold ${colors.text} group-hover:underline`}>
                    {guide.title}
                  </h3>
                </div>
                
                {/* Card Body */}
                <div className="p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-900">
                    Read Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <BookOpen className="w-5 h-5" />
            View All Guides
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Trust Signal */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All guides based on industry standards from{' '}
            <span className="font-semibold text-gray-700">ACI, NWFA, PDCA, PCA, MPI, NRCA</span> and more
          </p>
        </div>
      </div>
    </div>
  );
}
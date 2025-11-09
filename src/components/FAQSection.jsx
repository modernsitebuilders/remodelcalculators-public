import React from 'react';
import { calculatorFAQs } from '@/data/calculator-faqs';

export const FAQSection = ({ calculatorId }) => {
  const faqs = calculatorFAQs[calculatorId];

  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema - invisible to users, visible to search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Visible FAQ Section - WHITE CARD STYLE */}
      <section className="bg-white rounded-xl shadow-lg p-8 mt-12 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-cyan-500 transition-colors"
            >
              <summary className="cursor-pointer p-5 font-semibold text-gray-900 text-lg hover:text-cyan-600 transition-colors list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <svg 
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
};
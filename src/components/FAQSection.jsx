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

      {/* Visible FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">
                {faq.question}
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
};
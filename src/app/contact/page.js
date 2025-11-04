export const metadata = {
  title: 'Contact Us | Job Calculators',
  description: 'Get in touch with Job Calculators for questions, feedback, or support.',
  alternates: { canonical: 'https://jobcalculators.com/contact' },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Questions, feedback, or suggestions? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Website</h3>
                <a 
                  href="https://jobcalculators.com" 
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  jobcalculators.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Built By</h3>
                <p className="text-gray-700 mb-2">Modern Site Builders</p>
                <a 
                  href="https://modernsitebuilders.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                  Visit our website
                  <span>→</span>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-700">
                  We typically respond within 1-2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are the calculators free?</h3>
                <p className="text-gray-700 text-sm">
                  Yes, all calculators are 100% free with no sign-up required.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do I need to create an account?</h3>
                <p className="text-gray-700 text-sm">
                  No, all calculators work without any registration or login.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are calculations accurate?</h3>
                <p className="text-gray-700 text-sm">
                  Yes, we use industry-standard formulas. However, always verify with professionals before ordering materials.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I suggest new calculators?</h3>
                <p className="text-gray-700 text-sm">
                  Absolutely! We're always looking to add new tools based on user feedback.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you save my data?</h3>
                <p className="text-gray-700 text-sm">
                  No, all calculations are done in your browser. We don't store your project data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">We Value Your Feedback</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Help us improve Job Calculators by sharing your experience, reporting issues, or suggesting new features. Your input helps us build better tools for the construction community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <p className="text-sm font-semibold text-gray-900 mb-1">Found a Bug?</p>
              <p className="text-xs text-gray-600">Let us know what's not working</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <p className="text-sm font-semibold text-gray-900 mb-1">Feature Request?</p>
              <p className="text-xs text-gray-600">Tell us what you need</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <p className="text-sm font-semibold text-gray-900 mb-1">General Feedback?</p>
              <p className="text-xs text-gray-600">Share your thoughts</p>
            </div>
          </div>
        </div>

        {/* Business Inquiries */}
        <div className="mt-8 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Business Inquiries</h2>
          <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
            For partnership opportunities, advertising, or custom calculator development, please contact Modern Site Builders.
          </p>
          <a 
            href="https://modernsitebuilders.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Modern Site Builders →
          </a>
        </div>
      </div>
    </div>
  );
}
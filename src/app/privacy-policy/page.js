export const metadata = {
  title: 'Privacy Policy | Job Calculators',
  description: 'Privacy policy for Job Calculators - how we handle user data and protect your privacy.',
  alternates: { canonical: 'https://jobcalculators.com/privacy-policy' },
};

export default function PrivacyPolicy() {
  const lastUpdated = "October 31, 2025";

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Job Calculators ("we," "our," or "us") operates jobcalculators.com. This Privacy Policy explains how we collect, use, and protect information when you use our construction calculator tools.
            </p>
            <p className="text-gray-700">
              We are committed to protecting your privacy. Our calculators are designed to work entirely in your browser without requiring personal information or user accounts.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
            <p className="text-gray-700 mb-4">
              Our calculators process measurements and project specifications that you enter. This information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Is processed locally in your browser</li>
              <li>Is not transmitted to our servers</li>
              <li>Is not stored or saved by us</li>
              <li>Disappears when you close or refresh the page</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>IP address (anonymized)</li>
            </ul>
            <p className="text-gray-700">
              This information is collected through standard web server logs and analytics tools to improve our service.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Information</h2>
            <p className="text-gray-700 mb-4">
              We use automatically collected information to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Improve calculator functionality and user experience</li>
              <li>Analyze which calculators are most used</li>
              <li>Identify and fix technical issues</li>
              <li>Understand website traffic patterns</li>
              <li>Enhance website security</li>
            </ul>
            <p className="text-gray-700">
              We do not sell, rent, or share your information with third parties for marketing purposes.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We may use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Remember your preferences (if any)</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Improve site functionality</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Disabling cookies may limit some website functionality but will not prevent calculator usage.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party services for analytics and website hosting:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hosting</h3>
            <p className="text-gray-700 mb-4">
              Our website is hosted on Vercel. Vercel may collect technical information necessary to provide hosting services. Review Vercel's privacy policy at vercel.com/legal/privacy-policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics</h3>
            <p className="text-gray-700 mb-4">
              We may use Google Analytics or similar services to understand how visitors use our site. These services collect information anonymously and report website trends without identifying individual visitors.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement reasonable security measures to protect information collected through our website. However, no internet transmission is completely secure. We cannot guarantee absolute security of information transmitted to our site.
            </p>
            <p className="text-gray-700">
              Since calculator inputs are processed locally in your browser and not transmitted to our servers, your project measurements remain private on your device.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us to have it removed.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have rights regarding your information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Access information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="text-gray-700">
              Since we do not collect personal information through our calculators, these rights primarily apply to any contact information you may provide through other means.
            </p>
          </section>

          {/* External Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Links</h2>
            <p className="text-gray-700">
              Our website may contain links to external websites. We are not responsible for the privacy practices of other sites. We encourage you to review the privacy policies of any external websites you visit.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p className="font-semibold">Job Calculators</p>
              <p>Website: <a href="https://jobcalculators.com" className="text-blue-600 hover:underline">jobcalculators.com</a></p>
              <p>Built by Modern Site Builders</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Calculator Disclaimer</h2>
            <p className="text-gray-700 mb-2">
              Our calculators provide estimates based on industry-standard formulas. Results are for informational purposes only and should not replace professional advice.
            </p>
            <p className="text-gray-700">
              Always verify calculations with qualified professionals before starting any construction project. We are not liable for decisions made based on calculator results.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata = {
  title: 'Privacy Policy | Remodel Calculators',
  description: 'Privacy policy for Remodel Calculators - how we handle user data and protect your privacy.',
  alternates: { canonical: 'https://remodelcalculators.com/privacy-policy' },
};

export default function PrivacyPolicy() {

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">
  Last Updated: {SITE_CONFIG.legal.privacyPolicyLastUpdated}
</p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Remodel Calculators ("we," "our," or "us") operates remodelcalculators.com. This Privacy Policy explains how we collect, use, and protect information when you use our construction calculator tools.
            </p>
            <p className="text-gray-700">
              Our calculators log the measurements and calculations you enter for analysis and improvement purposes. We do not require user accounts or collect personal identifiers such as names, email addresses, or IP addresses.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Calculator Input Data</h3>
            <p className="text-gray-700 mb-4">
              When you use our calculators, we collect and store:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Measurements and values you enter</li>
              <li>Calculation results generated</li>
              <li>Which calculator was used</li>
              <li>Timestamp of calculation</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This data is logged to help us understand how our calculators are used and to improve accuracy. We do not collect your name, email address, or other personal identifiers with this data.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect anonymous usage data:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Which calculators are accessed</li>
              <li>Page views and navigation patterns</li>
              <li>Time spent on pages</li>
              <li>General browser and device information</li>
            </ul>
            <p className="text-gray-700">
              We do not collect or store IP addresses or other personally identifiable information. All data collected is anonymous and used solely for improving calculator functionality and user experience.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Information</h2>
            <p className="text-gray-700 mb-4">
              We use calculator input data and usage analytics to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Verify calculator accuracy and identify potential errors</li>
              <li>Understand typical use cases and input ranges</li>
              <li>Improve calculator functionality</li>
              <li>Analyze which calculators are most used</li>
              <li>Identify and fix technical issues</li>
            </ul>
            <p className="text-gray-700">
              We do not sell, rent, or share any data with third parties for marketing purposes.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Track calculator usage patterns</li>
              <li>Analyze site traffic</li>
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
              We use third-party services for data logging, analytics, and website hosting:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Storage</h3>
            <p className="text-gray-700 mb-4">
              Calculator inputs and results are logged to Google Sheets for analysis. Google may process this data according to their privacy policy at policies.google.com/privacy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hosting</h3>
            <p className="text-gray-700 mb-4">
              Our website is hosted on Vercel. Vercel may collect technical information necessary to provide hosting services. Review Vercel's privacy policy at vercel.com/legal/privacy-policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics</h3>
            <p className="text-gray-700 mb-4">
              We use analytics services to track calculator usage and site performance. These services collect anonymous data about how visitors use our site without identifying individual users.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              Calculator inputs and results are logged for analysis purposes. While we do not collect personal identifiers like names or email addresses with this data, the measurements and calculations you enter are stored.
            </p>
            <p className="text-gray-700">
              We use standard security measures to protect stored data. However, no internet transmission is completely secure. Do not enter sensitive or confidential project information if privacy is a concern.
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
              While we log calculator inputs and results, this data is not linked to personal identifiers. Since we do not collect names, email addresses, or user accounts, we cannot identify which specific calculations belong to which users.
            </p>
            <p className="text-gray-700">
              If you have concerns about data we may have collected, contact us. You can control cookie preferences through your browser settings.
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
              <p className="font-semibold">Remodel Calculators</p>
              <p>Website: <a href="https://remodelcalculators.com" className="text-blue-600 hover:underline">remodelcalculators.com</a></p>
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
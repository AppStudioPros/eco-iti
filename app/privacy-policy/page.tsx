import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ECO Integrated Technologies',
  description: 'Privacy Policy for ECO Integrated Technologies. Learn how we collect, use, and protect your personal information.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>Legal</p>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1A2535' }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: '#4A5E72' }}>Last updated: September 1, 2026</p>

        <div className="prose max-w-none" style={{ color: '#1A2535' }}>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Overview</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              ECO Integrated Technologies ("ECO," "we," "our," or "us") operates the website located at ecoiti.com. This Privacy Policy explains what information we collect when you visit our site, how we use it, and the choices you have regarding your data.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              We take data privacy seriously. We do not sell your personal information to third parties, and we do not use your data for advertising purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Information We Collect</h2>
            <p className="leading-relaxed mb-3" style={{ color: '#4A5E72' }}>We collect information in two ways:</p>
            <p className="font-semibold mb-1" style={{ color: '#1A2535' }}>Information you provide directly</p>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              When you fill out a contact form on our website, we collect your name, email address, phone number (if provided), company name (if provided), and the content of your message. We use this information only to respond to your inquiry.
            </p>
            <p className="font-semibold mb-1" style={{ color: '#1A2535' }}>Information collected automatically</p>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              When you visit our website, we may automatically collect certain technical information including your IP address, browser type, operating system, referring URLs, and pages visited. This information is collected through standard web technologies including cookies and analytics tools. See our Cookie Policy for more detail.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>How We Use Your Information</h2>
            <p className="leading-relaxed mb-3" style={{ color: '#4A5E72' }}>We use the information we collect for the following purposes:</p>
            <ul className="list-none space-y-2 mb-4" style={{ color: '#4A5E72' }}>
              {[
                'To respond to inquiries submitted through our contact form',
                'To improve the performance and content of our website',
                'To understand how visitors use our site so we can make it more useful',
                'To comply with applicable laws and regulations',
                'To protect the security and integrity of our website',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 leading-relaxed">
                  <span style={{ color: '#1A835A', flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              We do not use contact form submissions for marketing or unsolicited outreach. We will only contact you in direct response to a message you sent us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Information Sharing</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              We do not sell, rent, or trade your personal information. We may share data with trusted third-party service providers who assist in operating our website (such as web hosting and analytics providers), but only to the extent necessary for those services and subject to confidentiality obligations.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              We may disclose your information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect the rights, property, or safety of ECO, our users, or the public.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>California Privacy Rights (CCPA)</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              If you are a California resident, the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA) gives you certain rights regarding your personal information. These include the right to:
            </p>
            <ul className="list-none space-y-2 mb-4" style={{ color: '#4A5E72' }}>
              {[
                'Know what personal information we collect about you and how we use it',
                'Request deletion of your personal information',
                'Opt out of the sale or sharing of your personal information (we do not sell or share personal information)',
                'Non-discrimination for exercising your privacy rights',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 leading-relaxed">
                  <span style={{ color: '#1A835A', flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              To exercise any of these rights, contact us at info@ecoiti.com. We will respond within 45 days as required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Data Retention</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              We retain contact form submissions for as long as necessary to respond to your inquiry and for a reasonable period thereafter for internal records. Analytics data is retained in aggregated, anonymized form. You may request deletion of your personal information at any time by contacting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Data Security</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Third-Party Links</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies before submitting any personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Changes to This Policy</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Contact Us</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              If you have questions about this Privacy Policy or how we handle your data, contact us at:
            </p>
            <div className="mt-4 p-6 rounded-xl" style={{ backgroundColor: '#F4F8FC', border: '1px solid #D0E4F4' }}>
              <p className="font-semibold mb-1" style={{ color: '#1A2535' }}>ECO Integrated Technologies</p>
              <p style={{ color: '#4A5E72' }}>23986 Aliso Creek Road #312</p>
              <p style={{ color: '#4A5E72' }}>Laguna Niguel, CA 92677</p>
              <p className="mt-2" style={{ color: '#4A5E72' }}>Email: <a href="mailto:info@ecoiti.com" style={{ color: '#1663AF' }}>info@ecoiti.com</a></p>
              <p style={{ color: '#4A5E72' }}>Phone: <a href="tel:18774770021" style={{ color: '#1663AF' }}>1-877-477-0021</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | ECO Integrated Technologies',
  description: 'Cookie Policy for ECO Integrated Technologies. Learn how we use cookies on our website.',
  robots: { index: false, follow: false },
}

export default function CookiePolicyPage() {
  return (
    <main className="bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>Legal</p>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1A2535' }}>Cookie Policy</h1>
        <p className="text-sm mb-12" style={{ color: '#4A5E72' }}>Last updated: September 1, 2026</p>

        <div className="prose max-w-none">

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>What Are Cookies</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and in some cases enable certain features to work properly. Cookies are widely used across the internet and are not harmful to your device.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>How We Use Cookies</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              The ECO Integrated Technologies website (ecoiti.com) uses a limited number of cookies to operate and improve the site. We do not use cookies for advertising or to track you across other websites.
            </p>

            <div className="rounded-xl overflow-hidden mb-6" style={{ border: '1px solid #D0E4F4' }}>
              <div className="px-6 py-4" style={{ backgroundColor: '#0B2240' }}>
                <p className="font-bold text-white text-sm">Essential Cookies</p>
              </div>
              <div className="px-6 py-4" style={{ backgroundColor: '#F4F8FC' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>
                  These cookies are necessary for the website to function. They include session cookies that enable basic site navigation and form submissions to work correctly. These cannot be disabled without affecting how the site functions.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mb-6" style={{ border: '1px solid #D0E4F4' }}>
              <div className="px-6 py-4" style={{ backgroundColor: '#0B2240' }}>
                <p className="font-bold text-white text-sm">Analytics Cookies</p>
              </div>
              <div className="px-6 py-4" style={{ backgroundColor: '#F4F8FC' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>
                  We may use analytics tools (such as Google Analytics) to understand how visitors interact with our website. These cookies collect anonymized data including pages visited, time spent on pages, and how visitors arrived at our site. This data helps us improve the site experience. No personally identifiable information is collected through analytics cookies.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #D0E4F4' }}>
              <div className="px-6 py-4" style={{ backgroundColor: '#0B2240' }}>
                <p className="font-bold text-white text-sm">Preference Cookies</p>
              </div>
              <div className="px-6 py-4" style={{ backgroundColor: '#F4F8FC' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>
                  These cookies remember choices you make on our site (such as form field entries) to provide a more convenient experience on return visits. They do not track activity across other websites.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Third-Party Cookies</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Some content or features on our site may be provided by third-party services, which may set their own cookies. We do not control these third-party cookies and recommend reviewing the privacy and cookie policies of those services directly. Examples may include embedded maps, video content, or analytics platforms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Managing Cookies</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-none space-y-2 mb-4" style={{ color: '#4A5E72' }}>
              {[
                'View what cookies have been set',
                'Allow, block, or delete cookies from specific sites',
                'Block all cookies from being set',
                'Delete all cookies when you close your browser',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 leading-relaxed">
                  <span style={{ color: '#1A835A', flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Please be aware that blocking or deleting cookies may affect the functionality of this and other websites. For instructions on managing cookies in your specific browser, visit the browser's help section or a resource such as <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: '#1663AF' }}>allaboutcookies.org</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Do Not Track</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Some browsers offer a "Do Not Track" (DNT) setting. Because there is no consistent industry standard for responding to DNT signals, our website does not currently change its behavior based on DNT signals. We continue to use cookies as described in this policy regardless of DNT settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Updates to This Policy</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Last updated" date at the top of this page will reflect when the most recent changes were made.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Contact</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>Questions about our use of cookies? Contact us:</p>
            <div className="mt-4 p-6 rounded-xl" style={{ backgroundColor: '#F4F8FC', border: '1px solid #D0E4F4' }}>
              <p className="font-semibold mb-1" style={{ color: '#1A2535' }}>ECO Integrated Technologies</p>
              <p style={{ color: '#4A5E72' }}>23986 Aliso Creek Road #312, Laguna Niguel, CA 92677</p>
              <p className="mt-2" style={{ color: '#4A5E72' }}>Email: <a href="mailto:info@ecoiti.com" style={{ color: '#1663AF' }}>info@ecoiti.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

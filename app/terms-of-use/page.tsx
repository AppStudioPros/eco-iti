import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | ECO Integrated Technologies',
  description: 'Terms of Use for the ECO Integrated Technologies website.',
  robots: { index: false, follow: false },
}

export default function TermsOfUsePage() {
  return (
    <main className="bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>Legal</p>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1A2535' }}>Terms of Use</h1>
        <p className="text-sm mb-12" style={{ color: '#4A5E72' }}>Last updated: September 1, 2026</p>

        <div className="prose max-w-none">

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Acceptance of Terms</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              By accessing or using the ECO Integrated Technologies website at ecoiti.com ("Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use this Site. ECO Integrated Technologies reserves the right to modify these terms at any time. Your continued use of the Site after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Use of the Site</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              This Site is provided for informational purposes only. You may use this Site for lawful purposes consistent with these terms. You agree not to:
            </p>
            <ul className="list-none space-y-2" style={{ color: '#4A5E72' }}>
              {[
                'Use the Site in any way that violates applicable local, state, federal, or international laws or regulations',
                'Attempt to gain unauthorized access to any portion of the Site or any systems connected to it',
                'Transmit any unsolicited or unauthorized advertising or promotional material',
                'Use automated means (such as bots or scrapers) to access or collect data from the Site without our prior written consent',
                'Interfere with or disrupt the integrity or performance of the Site',
                'Reproduce, distribute, or create derivative works from any content on this Site without express written permission',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 leading-relaxed">
                  <span style={{ color: '#1A835A', flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Intellectual Property</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              All content on this Site, including but not limited to text, images, graphics, logos, technology descriptions, process diagrams, and the ECO Regenion™ and ECO H2O Recover™ brand names and materials, is the property of ECO Integrated Technologies or its licensors and is protected by applicable intellectual property laws.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Nothing on this Site grants any license or right to use any trademark, trade name, or proprietary technology of ECO Integrated Technologies without prior written permission. Unauthorized use of ECO's intellectual property is strictly prohibited.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Not Engineering or Professional Advice</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              The information provided on this Site is for general informational purposes only. Nothing on this Site constitutes engineering advice, scientific guidance, environmental consulting, investment advice, or any other form of professional service. ECO Integrated Technologies makes no representations that information on this Site is appropriate or applicable to your specific situation. You should consult qualified professionals before making any decisions based on information found on this Site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Disclaimer of Warranties</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              This Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. ECO Integrated Technologies does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or timeliness of any content on the Site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Limitation of Liability</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              To the fullest extent permitted by applicable law, ECO Integrated Technologies and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use this Site, even if ECO has been advised of the possibility of such damages. Our total liability for any claim arising out of or related to these Terms or your use of the Site shall not exceed one hundred U.S. dollars ($100).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Third-Party Links</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              This Site may contain links to third-party websites. These links are provided for your convenience only. ECO Integrated Technologies has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them. Linking to a third-party site does not imply any endorsement, approval, or association with that site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Governing Law</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              These Terms of Use are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding relating to this Site or these Terms shall be brought exclusively in the state or federal courts located in Orange County, California.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Contact</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>Questions about these Terms? Reach us at:</p>
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

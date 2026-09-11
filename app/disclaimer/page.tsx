import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | ECO Integrated Technologies',
  description: 'Important disclaimers regarding technology performance claims and forward-looking statements from ECO Integrated Technologies.',
  robots: { index: false, follow: false },
}

export default function DisclaimerPage() {
  return (
    <main className="bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>Legal</p>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1A2535' }}>Disclaimer</h1>
        <p className="text-sm mb-12" style={{ color: '#4A5E72' }}>Last updated: September 1, 2026</p>

        <div className="prose max-w-none">

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>General Disclaimer</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              The information contained on the ECO Integrated Technologies website (ecoiti.com) is provided for general informational purposes only. While we make reasonable efforts to keep information accurate and up to date, ECO Integrated Technologies makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of any information on this Site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Technology Performance Claims</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              Descriptions of ECO Integrated Technologies' proprietary platforms, including ECO Regenion™ and the CLAW Water Recovery Technology (ECO H2O Recover™), represent design targets, engineering goals, and intended capabilities based on current development and testing. Actual performance in commercial or field deployment may vary based on input conditions, operational parameters, site-specific factors, and regulatory requirements.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              References to performance targets such as "zero liquid discharge" (ZLD) represent engineering objectives and not guaranteed outcomes. No information on this Site should be interpreted as a warranty, guarantee, or representation of specific performance results for any particular application or deployment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Forward-Looking Statements</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              This website may contain forward-looking statements within the meaning of applicable securities laws. These statements relate to future events or our future performance and include statements regarding our business strategy, technology development, market opportunities, and anticipated results.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              Forward-looking statements are based on current expectations and assumptions and involve known and unknown risks, uncertainties, and other factors that could cause actual results to differ materially from those expressed or implied. ECO Integrated Technologies does not undertake any obligation to update forward-looking statements to reflect events that occur after the date they were made.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Words such as "targeting," "anticipates," "expects," "plans," "projects," "will," "potential," and similar expressions are intended to identify forward-looking statements, though not all forward-looking statements contain these words.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Not an Offer to Invest</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Nothing on this Site constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation of any security or investment product. ECO Integrated Technologies is a privately held company. Any information relating to the company's financial performance, investor backing, or business structure is provided for background informational purposes only and should not be relied upon for investment decisions. Interested parties should consult qualified legal and financial advisors.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Environmental and Regulatory Claims</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              Statements regarding the environmental benefits, regulatory compliance, or sustainability outcomes of ECO's technologies are based on current understanding and available data. Environmental regulations vary by jurisdiction and may change. Nothing on this Site should be interpreted as a guarantee that use of ECO's technologies will result in regulatory compliance in any specific jurisdiction. Operators are responsible for ensuring compliance with all applicable laws and regulations in their areas of operation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>No Professional Advice</h2>
            <p className="leading-relaxed" style={{ color: '#4A5E72' }}>
              The content on this Site does not constitute engineering advice, environmental consulting, legal advice, financial advice, or any other form of professional service. You should not act or refrain from acting based solely on information found on this Site. Always consult qualified professionals with relevant expertise before making decisions that may affect your operations, environment, or financial position.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#0B2240' }}>Contact</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>Questions about this Disclaimer? Contact us at:</p>
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

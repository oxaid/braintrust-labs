import PageLayout from "../components/PageLayout"
import SectionWrapper from "../components/SectionWrapper"

export default function Privacy() {
  return (
      <section className="max-w-3xl mx-auto text-white px-6 md:px-16 py-36 leading-relaxed">
      <div className="max-w-5xl mx-auto space-y-10 text-base md:text-[16px] tracking-tight leading-normal md:leading-[26px]">
        <h1 className="text-3xl md:text-5xl font-bold">🛡️ Privacy Policy</h1>
        <p className="text-gray-400">Last Updated: June 15, 2025</p>

        <p>
          Welcome to <strong>Braintrust</strong>, a decentralized platform that enables users to mint, archive,
          and trade <em>Thought Capsules</em> — encrypted bundles of AI-generated ideas, strategies,
          or predictions stored on the blockchain.
        </p>

        <p>Your privacy matters. This Privacy Policy explains how we collect, use, and protect your information when you interact with Braintrust.</p>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">📦 1. What We Collect</h2>
          <p>
            Braintrust does <strong>not collect personal information</strong> unless you provide it explicitly
            (e.g., email for waitlist or support). We access:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Your public wallet address (e.g., Solana)</li>
            <li>Capsule activity (minting, trading, viewing)</li>
            <li>Capsule metadata (title, category, timestamp)</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">🔐 2. How We Use Your Data</h2>
          <p>All on-chain data is immutable and public. We use it for:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Capsule indexing and display</li>
            <li>Marketplace functionality</li>
            <li>DAO curation features</li>
          </ul>
          <p>Emails (if provided) are used for updates and support only. We never sell or rent your data.</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">🧱 3. Security and Wallet Responsibility</h2>
          <p>
            We never store private keys or wallet access. You are responsible for the safety of your own wallet.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">🧠 4. Third-Party Tools</h2>
          <p>
            We may use tools like wallet connectors (Phantom), decentralized analytics (Dune, Helios), and AI plugins. These services may have their own privacy policies.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">🌍 5. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>You control your on-chain data</li>
            <li>You can opt out of emails at any time</li>
            <li>You may remain anonymous while using Braintrust</li>
          </ul>
        </div>

      
        <p className="pt-10 text-lg font-semibold text-[#37B7C3]">
          Think freely. Own your thoughts. Stay in control.
        </p>

        <p className="text-sm text-gray-500">— The Braintrust Team</p>
      </div>
    </section>
  )
}

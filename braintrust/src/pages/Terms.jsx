import PageLayout from "../components/PageLayout"
import SectionWrapper from "../components/SectionWrapper"

export default function Terms() {
  return (
      <section className="max-w-3xl mx-auto text-white px-6 md:px-16 py-36 leading-relaxed">
        <div className="max-w-5xl mx-auto space-y-10 text-base md:text-[16px] tracking-tight leading-normal md:leading-[26px]">
          <h1 className="text-3xl md:text-5xl font-bold font-mono">[Terms of Service]</h1>
        <p className="text-gray-400">Last Updated: June 15, 2025</p>

        <p>
          Welcome to <strong>Braintrust</strong>, a decentralized platform built on Solana that allows users to mint, archive, and trade encrypted AI-generated data capsules — known as <em>Thought Capsules</em>.
        </p>
        <p>
          By using Braintrust, you agree to the following Terms of Service
          ("Terms"). Please read them carefully. If you do not agree, do not use
          the platform.
        </p>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By connecting your wallet or using any Braintrust feature, you agree
            to be bound by these Terms, our Privacy Policy, and future updates.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">2. Eligibility</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Must be 18+ or of legal age in your jurisdiction</li>
            <li>Must use a supported crypto wallet (e.g., Phantom)</li>
            <li>You’re responsible for legal compliance in your region</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">3. Use of the Platform</h2>
          <p>You may use Braintrust to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Mint and trade Thought Capsules</li>
            <li>Publish AI-generated insights or predictions</li>
            <li>Participate in DAO-curated ecosystems</li>
          </ul>
          <p>Do not use Braintrust to publish harmful, illegal, or plagiarized content.</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">4. Wallets & Responsibility</h2>
          <p>
            Braintrust is non-custodial. We do not store or access your wallet
            keys. You are 100% responsible for your wallet and assets.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
          <p>
            You retain ownership of content you mint. However, it's stored on-chain and may be visible or tradable by others. Braintrust may display public capsules across the platform.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">6. Platform Changes</h2>
          <p>
            We may add or remove features, update smart contracts, or pause access when needed — with notice and DAO participation where applicable.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">7. No Financial Advice</h2>
          <p>
            Braintrust is not responsible for financial losses. Content minted by users is not investment advice. Do your own research (DYOR).
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">8. Termination</h2>
          <p>
            We may restrict access if you abuse the system. On-chain data will remain immutable, but interface-level access can be revoked.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
          <p>
            Braintrust is provided “as is.” We are not liable for bugs, downtime,
            third-party errors, or user mistakes.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">10. Dispute Resolution</h2>
          <p>
            Any disputes should be resolved through dialogue or DAO governance.
            Jurisdiction may be determined by smart contract rules or chain logic.
          </p>
        </div>

        <p className="pt-10 text-lg font-semibold text-[#37B7C3]">
          Think freely. Build openly. Own your mind.
        </p>
        <p className="text-sm text-gray-500">— The Braintrust Team</p>
        </div>
      </section>
  )
}

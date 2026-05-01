import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import DefinitionCard from "@/components/DefinitionCard";
import SecondaryLink from "@/components/SecondaryLink";

export const metadata: Metadata = {
  title: "What Is LTI in Star Citizen? | pledgemeaning.com",
  description:
    "LTI (Lifetime Insurance) is permanent ship insurance in Star Citizen. Learn what LTI means, why it matters, and how to get it.",
};

export default function WhatIsLTI() {
  return (
    <>
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-10">
          <p className="text-amber text-sm font-medium mb-2 uppercase tracking-wider">
            Star Citizen Glossary
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            What Is <span className="text-amber">LTI</span> in Star Citizen?
          </h1>
          <p className="text-xl text-muted max-w-3xl leading-relaxed">
            <strong className="text-cream">LTI</strong> stands for{" "}
            <strong className="text-cream">Lifetime Insurance</strong> — a special insurance
            tier attached to certain ship pledges that provides permanent hull insurance,
            meaning the ship is always covered for free replacement if destroyed.
          </p>
        </section>

        <section className="mb-16">
          <div className="bg-midnight-mid border border-amber/30 rounded-xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-cream">LTI Explained</h2>
            <p className="text-cream leading-relaxed">
              In Star Citizen, every ship has insurance. Standard insurance is time-limited (3
              months, 6 months, 1 year) — when it expires, you must renew it with in-game UEC.
              LTI ships never require renewal: the ship is insured forever, at no ongoing cost.
            </p>
            <p className="text-muted leading-relaxed">
              If your LTI ship is destroyed in-game, you can claim it at an insurance terminal
              and receive a replacement hull. LTI does <em>not</em> cover cargo, weapons, or
              components — only the ship hull itself.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">
            Why Does LTI Matter?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DefinitionCard
              term="Peace of Mind"
              definition="You never have to worry about renewing hull insurance. For expensive ships, this removes a recurring UEC cost and eliminates the risk of flying uninsured."
              example="Example: Your Carrack has LTI — you can take it on dangerous exploration missions without fear of permanently losing it."
            />
            <DefinitionCard
              term="Pledge Store Value"
              definition="LTI ships hold their pledge-store value better. Some players seek out LTI versions of ships specifically. CCU chains are often used to upgrade an LTI starter to a larger ship."
              example="Example: Buy an LTI starter pack, then CCU it up to a larger ship — the LTI transfers to the new ship."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">How to Get LTI</h2>
          <div className="bg-midnight-mid border border-amber/20 rounded-xl p-8">
            <ul className="space-y-4">
              {[
                {
                  title: "Limited-time pledge events",
                  desc: "CIG occasionally offers LTI ships during special events like CitizenCon, IAE (Intergalactic Aerospace Expo), or anniversary sales.",
                },
                {
                  title: "Concept sales",
                  desc: "New ships introduced as 'concepts' often come with LTI as a reward for early backers who support the design.",
                },
                {
                  title: "Cross-Chassis Upgrades (CCU)",
                  desc: "If you own an LTI ship, you can CCU up to a more expensive ship and the Lifetime Insurance transfers to the new ship.",
                },
                {
                  title: "Store credit purchases",
                  desc: "Sometimes LTI tokens appear in the pledge store — small standalone items that grant LTI when applied to a ship.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-amber font-bold text-lg shrink-0">{i + 1}.</span>
                  <div>
                    <p className="text-cream font-medium">{item.title}</p>
                    <p className="text-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">
            LTI vs. Standard Insurance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-midnight-mid border border-amber/30 rounded-xl p-6">
              <h3 className="text-amber font-bold text-xl mb-3">LTI</h3>
              <ul className="space-y-2 text-muted text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-amber shrink-0">✓</span> Never expires</li>
                <li className="flex gap-2"><span className="text-amber shrink-0">✓</span> No UEC renewal cost</li>
                <li className="flex gap-2"><span className="text-amber shrink-0">✓</span> Transfers via CCU</li>
                <li className="flex gap-2"><span className="text-amber shrink-0">✓</span> Permanent peace of mind</li>
              </ul>
            </div>
            <div className="bg-midnight-mid border border-amber/20 rounded-xl p-6">
              <h3 className="text-cream font-bold text-xl mb-3">Standard Insurance</h3>
              <ul className="space-y-2 text-muted text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-muted shrink-0">→</span> Time-limited (3mo, 6mo, 1yr)</li>
                <li className="flex gap-2"><span className="text-muted shrink-0">→</span> Must renew with in-game UEC</li>
                <li className="flex gap-2"><span className="text-muted shrink-0">→</span> Standard for all new ships</li>
                <li className="flex gap-2"><span className="text-muted shrink-0">→</span> Affordable to maintain</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Related Terms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors"
            >
              <p className="text-amber font-bold mb-1">Pledge</p>
              <p className="text-muted text-sm">What a pledge is and how it works in Star Citizen</p>
            </a>
            <a
              href="/what-is-uec"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors"
            >
              <p className="text-amber font-bold mb-1">UEC</p>
              <p className="text-muted text-sm">United Earth Credits — the in-game currency</p>
            </a>
            <a
              href="/what-is-ccu"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors"
            >
              <p className="text-amber font-bold mb-1">CCU</p>
              <p className="text-muted text-sm">Cross-Chassis Upgrade — how LTI transfers to bigger ships</p>
            </a>
          </div>
        </section>

        <section className="mb-16 text-center">
          <p className="text-muted mb-2 text-sm">See all Star Citizen terms</p>
          <SecondaryLink href="https://dayonecitizen.com/glossary">
            Full SC Glossary on Day One Citizen →
          </SecondaryLink>
        </section>

        <section className="text-center py-12 border-t border-amber/20">
          <h2 className="text-2xl font-bold text-cream mb-3">
            Make Your First Pledge — Get 50,000 UEC Free
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Use our referral code when signing up to maximize your in-game currency bonus.
          </p>
          <CTAButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

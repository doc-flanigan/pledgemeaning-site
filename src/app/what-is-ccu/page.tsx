import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import DefinitionCard from "@/components/DefinitionCard";
import SecondaryLink from "@/components/SecondaryLink";

export const metadata: Metadata = {
  title: "What Is a CCU in Star Citizen? | pledgemeaning.com",
  description:
    "A CCU (Cross-Chassis Upgrade) lets you upgrade one Star Citizen ship pledge to another. Learn how CCUs work and why players use them.",
};

export default function WhatIsCCU() {
  return (
    <>
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-10">
          <p className="text-amber text-sm font-medium mb-2 uppercase tracking-wider">
            Star Citizen Glossary
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            What Is a <span className="text-amber">CCU</span> in Star Citizen?
          </h1>
          <p className="text-xl text-muted max-w-3xl leading-relaxed">
            <strong className="text-cream">CCU</strong> stands for{" "}
            <strong className="text-cream">Cross-Chassis Upgrade</strong> — a pledge store item
            that lets you upgrade one ship to a more expensive ship, paying only the price
            difference. CCUs transfer insurance (including LTI) to the new ship.
          </p>
        </section>

        <section className="mb-16">
          <div className="bg-midnight-mid border border-amber/30 rounded-xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-cream">CCU Explained</h2>
            <p className="text-cream leading-relaxed">
              Think of a CCU as a trade-in voucher. If you pledged for a ship worth $50, you can
              buy a CCU to a $100 ship for just $50 — rather than buying the $100 ship outright.
              The CCU replaces your original ship with the upgraded one, and your insurance
              (including LTI) carries over to the new ship.
            </p>
            <p className="text-muted leading-relaxed">
              Experienced players use &ldquo;CCU chains&rdquo; — a series of upgrades from a
              cheap LTI starter all the way to an expensive endgame ship. This is often cheaper
              than buying the target ship directly, and preserves Lifetime Insurance along the way.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">How CCUs Work</h2>
          <div className="bg-midnight-mid border border-amber/20 rounded-xl p-8">
            <ol className="space-y-5">
              {[
                {
                  title: "Start with a ship pledge",
                  desc: "You need to own a ship first — this is the ship you'll be upgrading from. Ideally, an LTI ship if you want to preserve Lifetime Insurance.",
                },
                {
                  title: "Buy a CCU from the pledge store",
                  desc: "Find the CCU for your target ship. The price is the difference between your current ship's base price and the target ship's base price.",
                },
                {
                  title: "Apply the CCU to your ship",
                  desc: "In your RSI Hangar, apply the CCU to your current ship. Your ship becomes the upgraded version. Insurance status transfers.",
                },
                {
                  title: "Repeat to chain upgrades",
                  desc: "You can buy and apply multiple CCUs over time to step up from a starter ship to progressively larger ships, always paying just the price difference.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-amber font-bold text-xl shrink-0">{i + 1}.</span>
                  <div>
                    <p className="text-cream font-medium">{item.title}</p>
                    <p className="text-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">CCU Example</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <DefinitionCard
              term="Step 1 — Starter (LTI)"
              definition="Buy an LTI game package with the Aurora MR for $45. You have an Aurora + LTI + game access."
              example="Cost so far: $45"
            />
            <DefinitionCard
              term="Step 2 — CCU Up"
              definition="Buy a CCU from Aurora to Avenger Titan ($20 difference). Apply it. Now you have an Avenger Titan + LTI."
              example="Cost so far: $65"
            />
            <DefinitionCard
              term="Step 3 — CCU Up Again"
              definition="Buy a CCU from Avenger to Cutlass Black ($55 difference). Apply it. Now you have a Cutlass Black + LTI."
              example="Cost so far: $120 (vs. $140 direct)"
            />
          </div>
          <p className="text-muted text-sm mt-4 text-center">
            The CCU chain delivers the same ship + LTI for less than buying the Cutlass Black directly.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Types of CCUs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DefinitionCard
              term="Standard CCU"
              definition="Available year-round in the pledge store. Price is always the difference between ship base values. Straightforward and reliable."
              example="Aurora to Avenger CCU — available anytime for $20."
            />
            <DefinitionCard
              term="Warbond CCU"
              definition="Special CCUs available only during events, priced with a discount — but must be purchased with new money (not store credit). Limited availability."
              example="Warbond CCUs during IAE can save 5-10% vs standard price."
            />
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
              href="/what-is-lti"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors"
            >
              <p className="text-amber font-bold mb-1">LTI</p>
              <p className="text-muted text-sm">Lifetime Insurance — why it transfers via CCUs</p>
            </a>
            <a
              href="/what-is-uec"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors"
            >
              <p className="text-amber font-bold mb-1">UEC</p>
              <p className="text-muted text-sm">United Earth Credits — what you earn in-game</p>
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
            Start Your CCU Chain — Get 50,000 UEC Free
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Create your account with our referral code. Get your starter ship + 50,000 UEC
            bonus, then CCU your way to the ship you really want.
          </p>
          <CTAButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import DefinitionCard from "@/components/DefinitionCard";
import SecondaryLink from "@/components/SecondaryLink";

export const metadata: Metadata = {
  title: "What Is UEC in Star Citizen? | pledgemeaning.com",
  description:
    "UEC (United Earth Credits) is Star Citizen's in-game currency used to buy ships, gear, and services. Learn how to earn and spend UEC.",
};

export default function WhatIsUEC() {
  return (
    <>
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-10">
          <p className="text-amber text-sm font-medium mb-2 uppercase tracking-wider">
            Star Citizen Glossary
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            What Is <span className="text-amber">UEC</span> in Star Citizen?
          </h1>
          <p className="text-xl text-muted max-w-3xl leading-relaxed">
            <strong className="text-cream">UEC</strong> stands for{" "}
            <strong className="text-cream">United Earth Credits</strong> — the official in-game
            currency of Star Citizen used to buy ships, gear, ammunition, and services inside
            the game.
          </p>
        </section>

        <section className="mb-16">
          <div className="bg-midnight-mid border border-amber/30 rounded-xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-cream">UEC Explained</h2>
            <p className="text-cream leading-relaxed">
              UEC is Star Citizen&rsquo;s primary in-game economy currency. You spend it at
              in-game shops, terminals, and landing zones across the Stanton system. Everything
              from a pistol to a multi-crew spacecraft can be bought with UEC if you have enough.
            </p>
            <p className="text-muted leading-relaxed">
              During Alpha, you&rsquo;ll see the term <strong className="text-cream">aUEC</strong>{" "}
              (Alpha UEC). This is the current version of the currency — it functions the same
              way but is labeled &ldquo;Alpha&rdquo; because the game is still in development.
              aUEC resets periodically with major patches.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">Types of UEC</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DefinitionCard
              term="aUEC (Alpha UEC)"
              definition="The current in-game currency during Star Citizen's Alpha phase. Earned by completing missions, trading, mining, and bounty hunting. Resets periodically with major game patches."
              example="Example: You earn 15,000 aUEC completing a delivery mission, then spend it at Dumpers Depot on a new weapon."
            />
            <DefinitionCard
              term="UEC (Live UEC)"
              definition="The permanent version of the currency that will carry forward when Star Citizen fully launches. Some UEC can be purchased via the RSI store and is not affected by resets."
              example="Example: A referral bonus of 5,000 UEC is added to your account and will be available at launch."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-6">How to Get UEC</h2>
          <div className="bg-midnight-mid border border-amber/20 rounded-xl p-8">
            <ul className="space-y-4">
              {[
                {
                  title: "Use a referral code when signing up",
                  desc: "You get a bonus of 5,000 UEC just for using a referral code. This is the easiest free UEC.",
                },
                {
                  title: "Complete missions in-game",
                  desc: "Delivery, bounty hunting, mining, salvage, and trading all pay aUEC. The primary way to earn currency during gameplay.",
                },
                {
                  title: "Purchase UEC from the RSI store",
                  desc: "Small amounts of UEC can be purchased directly from the Roberts Space Industries store to give you a head start.",
                },
                {
                  title: "Join organizations and events",
                  desc: "Some community events and in-game events award UEC bonuses to participants.",
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
              <p className="text-muted text-sm">Lifetime Insurance — permanent ship coverage</p>
            </a>
            <a
              href="/what-is-ccu"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors"
            >
              <p className="text-amber font-bold mb-1">CCU</p>
              <p className="text-muted text-sm">Cross-Chassis Upgrade — swap your ship pledge</p>
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
            Start with 50,000 UEC Bonus
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Create your account with our referral code and get 50,000 UEC in bonuses — the best
            possible start to your Star Citizen career.
          </p>
          <CTAButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

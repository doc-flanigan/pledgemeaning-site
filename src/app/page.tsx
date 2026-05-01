import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CTAButton from "@/components/CTAButton";
import SecondaryLink from "@/components/SecondaryLink";
import DefinitionCard from "@/components/DefinitionCard";

export const metadata: Metadata = {
  title: "What Does Pledge Mean in Star Citizen? | pledgemeaning.com",
  description:
    "In Star Citizen, a 'pledge' is a purchase from the RSI store that funds game development. Here's everything you need to know.",
};

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* H1 + above-fold answer */}
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            What Does &ldquo;Pledge&rdquo; Mean in{" "}
            <span className="text-amber">Star Citizen?</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            A <strong className="text-cream">pledge</strong> is a purchase made on the Roberts
            Space Industries (RSI) store that directly funds Star Citizen&rsquo;s development.
            Unlike a typical game purchase, you&rsquo;re backing the project — and you get a
            ship, package, or item in return.
          </p>
        </section>

        {/* Hero Carousel */}
        <section className="mb-16">
          <HeroCarousel />
        </section>

        {/* The Quick Answer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">The Quick Answer</h2>
          <div className="bg-midnight-mid border border-amber/30 rounded-xl p-8">
            <p className="text-lg text-cream leading-relaxed mb-4">
              In Star Citizen, <strong className="text-amber">pledge</strong> = purchase that
              funds development. When you &ldquo;pledge&rdquo; for a ship or a starter package,
              you&rsquo;re providing real money to Cloud Imperium Games (CIG) to help build the
              game. In exchange, you receive access to the game and whatever ship or items were
              included in your package.
            </p>
            <p className="text-muted leading-relaxed">
              The term comes from crowdfunding roots — Star Citizen started on Kickstarter in
              2012 where backers &ldquo;pledged&rdquo; money to support development. The language
              stuck even as the game moved to its own store.
            </p>
          </div>
        </section>

        {/* Pledge vs. Buy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">
            Pledge vs. Buy — What&rsquo;s the Difference?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-midnight-mid border border-amber/20 rounded-xl p-6">
              <h3 className="text-amber font-bold text-xl mb-3">Pledging (in Star Citizen)</h3>
              <ul className="space-y-2 text-muted text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-amber shrink-0">→</span>
                  You fund ongoing development of an unfinished game
                </li>
                <li className="flex gap-2">
                  <span className="text-amber shrink-0">→</span>
                  Ships and items can be reclaimed if lost in-game
                </li>
                <li className="flex gap-2">
                  <span className="text-amber shrink-0">→</span>
                  Store credit (aUEC) and upgrade paths available
                </li>
                <li className="flex gap-2">
                  <span className="text-amber shrink-0">→</span>
                  Some pledges include Lifetime Insurance (LTI)
                </li>
              </ul>
            </div>
            <div className="bg-midnight-mid border border-amber/20 rounded-xl p-6">
              <h3 className="text-cream font-bold text-xl mb-3">Buying (a traditional game)</h3>
              <ul className="space-y-2 text-muted text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-muted shrink-0">→</span>
                  You purchase a finished product
                </li>
                <li className="flex gap-2">
                  <span className="text-muted shrink-0">→</span>
                  In-game items are tied to the game&rsquo;s economy only
                </li>
                <li className="flex gap-2">
                  <span className="text-muted shrink-0">→</span>
                  No upgrade or exchange path
                </li>
                <li className="flex gap-2">
                  <span className="text-muted shrink-0">→</span>
                  No insurance concept
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Can You Pledge For? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">What Can You Pledge For?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <DefinitionCard
              term="Ships"
              definition="The most popular pledges. Ranges from starter fighters (Mustang Alpha, Aurora) to massive capital ships. Each has a role: combat, exploration, mining, cargo, and more."
              example="Example: The Avenger Titan is a popular pledge for new players who want a combat-capable starter."
            />
            <DefinitionCard
              term="Game Packages"
              definition="Bundles that include game access plus a starter ship. Required if you don't already own the game. The cheapest way to get into Star Citizen."
              example="Example: The Mustang Omega package includes game access + the starter Mustang ship."
            />
            <DefinitionCard
              term="Gear & Weapons"
              definition="Armor sets, personal weapons, multi-tools, and accessories for your character. Smaller pledges, often part of bundles or limited events."
              example="Example: The Lightspeed helmet is available as a standalone gear pledge."
            />
          </div>
        </section>

        {/* Do You Need to Pledge to Play? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">
            Do You Need to Pledge to Play?
          </h2>
          <div className="bg-midnight-mid border border-amber/20 rounded-xl p-8 space-y-4">
            <p className="text-cream leading-relaxed">
              <strong className="text-amber">To play permanently:</strong> yes, you need at least
              one game package pledge to get a persistent account with a ship. The minimum entry
              is a starter package — these start around $45 USD.
            </p>
            <p className="text-cream leading-relaxed">
              <strong className="text-amber">To try for free:</strong> Cloud Imperium Games runs{" "}
              <em>Free Fly events</em> several times a year. During these events, anyone can
              create an account and play Star Citizen for free for a limited time, with access to
              a rotating selection of ships.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Free Fly events are a great way to try the game before pledging. Keep an eye on{" "}
              <a
                href="https://dayonecitizen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:underline"
              >
                dayonecitizen.com
              </a>{" "}
              for announcements.
            </p>
          </div>
        </section>

        {/* What Is a Starter Package? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">What Is a Starter Package?</h2>
          <div className="bg-midnight-mid border border-amber/30 rounded-xl p-8">
            <p className="text-cream leading-relaxed mb-4">
              A <strong className="text-amber">starter package</strong> is the recommended first
              pledge for new players. It includes:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Full game access to Star Citizen (and sometimes Squadron 42)",
                "A starter ship (typically the Aurora MR or Mustang Alpha)",
                "Starting aUEC (in-game Alpha UEC currency)",
                "3-month insurance on your ship",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span className="text-amber font-bold shrink-0">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted text-sm">
              Starter ships are capable vessels — don&rsquo;t let the &ldquo;starter&rdquo; label
              put you off. Many veteran players keep an Aurora as a utility ship for years.
            </p>
          </div>
        </section>

        {/* The Referral Bonus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">The Referral Bonus</h2>
          <div className="bg-midnight-mid border border-amber/30 rounded-xl p-8">
            <p className="text-cream leading-relaxed mb-4">
              When you create a new Star Citizen account using a referral code, you receive a
              bonus of <strong className="text-amber">5,000 UEC</strong> added to your account.
              More importantly, when you make your first pledge (buy a game package), both you
              and the referrer earn additional rewards.
            </p>
            <p className="text-cream leading-relaxed mb-4">
              Using our referral code{" "}
              <code className="bg-midnight text-amber px-2 py-1 rounded font-mono text-sm">
                STAR-GCQJ-N6NC
              </code>{" "}
              when you sign up maximizes the value of your first pledge — you get up to{" "}
              <strong className="text-amber">50,000 UEC</strong> in total bonuses, which gives
              you extra in-game currency to spend on upgrades, equipment, and trading.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <CTAButton />
            </div>
          </div>
        </section>

        {/* Related Terms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cream mb-6">Related Star Citizen Terms</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <a
              href="/what-is-uec"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors group"
            >
              <p className="text-amber font-bold text-lg mb-1 group-hover:text-amber">UEC</p>
              <p className="text-muted text-sm">
                United Earth Credits — Star Citizen&rsquo;s in-game currency
              </p>
            </a>
            <a
              href="/what-is-lti"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors group"
            >
              <p className="text-amber font-bold text-lg mb-1">LTI</p>
              <p className="text-muted text-sm">
                Lifetime Insurance — permanent ship insurance coverage
              </p>
            </a>
            <a
              href="/what-is-ccu"
              className="bg-midnight-mid border border-amber/20 rounded-xl p-5 hover:border-amber/50 transition-colors group"
            >
              <p className="text-amber font-bold text-lg mb-1">CCU</p>
              <p className="text-muted text-sm">
                Cross-Chassis Upgrade — upgrade one ship to another
              </p>
            </a>
          </div>
          <div className="text-center">
            <SecondaryLink href="https://dayonecitizen.com/glossary">
              Full Star Citizen Glossary on Day One Citizen →
            </SecondaryLink>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12 border-t border-amber/20">
          <h2 className="text-2xl font-bold text-cream mb-3">Ready to Make Your First Pledge?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Use our referral code to get 50,000 UEC free when you create your account and make
            your first pledge. It costs nothing extra.
          </p>
          <CTAButton />
        </section>
      </main>
      <Footer />
    </>
  );
}

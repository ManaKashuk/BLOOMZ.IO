import Image from "next/image";

const streamlitLink = "https://bloomzcore.streamlit.app/";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1f2a24]">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <Image
          src="/assets/logos/bloomz-logo-full.png"
          alt="BLOOMZ.io logo"
          width={300}
          height={100}
          priority
        />

        <a
          href={streamlitLink}
          target="_blank"
          className="rounded-full bg-[#2f5f2a] px-5 py-2 text-sm font-semibold text-white"
        >
          Try BLOOMZ Analyzer
        </a>
      </nav>

      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 py-16 md:py-24 items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5f2a]">
            Bioactive Library for Mass Spectrometry Instant Optimization
          </p>

          <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            BLOOMZ.io
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-[#3f4d43]">
            A smart bioactive compound library designed to help researchers
            match mass spectrometry data to known plant compounds faster.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={streamlitLink}
              target="_blank"
              className="rounded-full bg-[#2f5f2a] px-8 py-4 font-semibold text-white"
            >
              Launch Analyzer
            </a>

            <a
              href="#overview"
              className="rounded-full border border-[#2f5f2a] px-8 py-4 font-semibold text-[#2f5f2a]"
            >
              View Overview
            </a>
          </div>
        </div>

        <Image
          src="/assets/images/hero-founder.png"
          alt="BLOOMZ research visual"
          width={700}
          height={700}
          priority
          className="rounded-[3rem] shadow-xl"
        />
      </section>

      <section id="overview" className="px-6 md:px-12 py-20 bg-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            BLOOMZ Spectral Intelligence
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg text-[#4a574d]">
            We build tools we once wished we had: faster matching, cleaner
            workflows, and practical insight for natural products research.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Upload MS data",
              "Get compound matches",
              "Explore suppliers",
              "Export results",
              "Track projects",
              "Compare extraction methods"
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[#faf7f2] p-6 shadow-sm"
              >
                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 py-24 items-center">
        <Image
          src="/assets/images/lab-botanical-research.png"
          alt="Botanical research"
          width={650}
          height={650}
          className="rounded-[3rem] shadow-xl"
        />

        <div>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Why Researchers Love BLOOMZ
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-[#4a574d]">
            BLOOMZ helps researchers move from raw spectral data to possible
            bioactive compound matches with a workflow designed for speed,
            clarity, and scientific decision-making.
          </p>

          <a
            href={streamlitLink}
            target="_blank"
            className="font-semibold text-[#2f5f2a]"
          >
            Try the analyzer →
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 py-24 items-center bg-[#1f2a24] text-white">
        <div>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Why Labs and Suppliers Choose BLOOMZ
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-white/80">
            BLOOMZ connects compound discovery with practical sourcing,
            helping labs and suppliers communicate around relevant botanical
            extracts, compounds, and research needs.
          </p>
        </div>

        <Image
          src="/assets/images/product-botanicals.png"
          alt="Botanical product visual"
          width={650}
          height={650}
          className="rounded-[3rem] shadow-xl"
        />
      </section>

      <section className="px-6 md:px-12 py-24 text-center">
        <h2 className="mb-6 text-5xl font-bold">Ready to Bloom?</h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-[#4a574d]">
          Explore a smarter way to connect mass spectrometry, natural products,
          bioactive compounds, and supplier discovery.
        </p>

        <Image
          src="/assets/images/team-bloomz.png"
          alt="BLOOMZ team"
          width={850}
          height={500}
          className="mx-auto mb-10 rounded-[3rem] shadow-xl"
        />

        <a
          href={streamlitLink}
          target="_blank"
          className="rounded-full bg-[#2f5f2a] px-10 py-4 font-semibold text-white"
        >
          Launch BLOOMZ Analyzer
        </a>
      </section>

      <footer className="border-t border-[#ddd2c2] px-6 py-8 text-center text-sm text-[#4a574d]">
        © 2026 BLOOMZ.io. All rights reserved.
      </footer>
    </main>
  );
}

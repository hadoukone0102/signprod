export default function BannierView() {
  return (
    <section className="w-full bg-[#0a1628] overflow-hidden">
      {/* ── HERO ── */}
      <div className="relative min-h-[560px] flex flex-col justify-end">

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,#2ac4c4 60px,#2ac4c4 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#2ac4c4 60px,#2ac4c4 61px)",
          }}
        />

        {/* Glow accents */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.18)_0%,transparent_70%)]" />
        <div className="absolute bottom-10 -left-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.10)_0%,transparent_70%)]" />

        {/* Main content */}
        <div className="relative z-10 px-8 md:px-12 pt-20 pb-12 max-w-4xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-[rgba(26,188,188,0.15)] border border-[rgba(26,188,188,0.4)] text-[#1abcbc] text-[11px] font-semibold tracking-[2px] uppercase px-3.5 py-1.5 rounded-[2px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1abcbc]" />
            Expert en communication visuelle
          </div>

          {/* Title */}
          <h1 className="font-black text-white uppercase leading-none tracking-tight text-[clamp(42px,6vw,72px)] mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Votre enseigne,<br />
            <span className="text-[#1abcbc]">notre signature.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-[17px] leading-relaxed max-w-xl mb-9">
            Conception, fabrication et pose de solutions d&apos;enseigne et de
            signalétique sur mesure à Abidjan.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1abcbc] hover:bg-[#22d8d8] text-[#0a1628] font-bold text-sm uppercase tracking-wide px-8 py-3.5 rounded-[2px] transition-colors">
              Demander un devis gratuit
            </button>
            <button className="flex items-center gap-2 border border-white/35 hover:border-white/70 text-white font-semibold text-sm uppercase tracking-wide px-8 py-3.5 rounded-[2px] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1 .36 1.97.72 2.9a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.93.36 1.9.6 2.9.72A2 2 0 0122 16.92z" />
              </svg>
              Nous appeler
            </button>
          </div>
        </div>

        {/* Stats — desktop only */}
        <div className="hidden lg:flex absolute right-12 bottom-12 z-10 flex-col gap-5 items-end">
          {[
            { num: "+500", label: "Projets réalisés" },
            { num: "24h",  label: "Délai de devis"  },
            { num: "10+",  label: "Ans d'expérience" },
          ].map((s, i) => (
            <div key={i} className="text-right">
              <div className="text-[#1abcbc] text-[40px] font-black leading-none"
                   style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {s.num}
              </div>
              <div className="text-white/45 text-[10px] uppercase tracking-[1.5px]">
                {s.label}
              </div>
              {i < 2 && <div className="mt-5 w-10 h-px bg-white/15 ml-auto" />}
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORY CARDS ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[rgba(26,188,188,0.2)]">
        {[
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            ),
            label: "Intérieur & Extérieur",
            title: "Enseignes\nLumineuses",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
            label: "Façade & Identité",
            title: "Concept\nFaçade",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              </svg>
            ),
            label: "Grand Format",
            title: "Impression &\nSignalétique",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            ),
            label: "LED & Rétroéclairé",
            title: "Totems &\nPylônes",
          },
        ].map((cat, i) => (
          <div
            key={i}
            className="group relative flex flex-col gap-2 p-6 md:p-7 bg-[#0d1f35] border-r border-[rgba(26,188,188,0.1)] last:border-r-0 cursor-pointer transition-colors hover:bg-[#102233] overflow-hidden"
          >
            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1abcbc] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

            <div className="w-10 h-10 bg-[rgba(26,188,188,0.12)] rounded-[4px] flex items-center justify-center mb-1">
              {cat.icon}
            </div>
            <span className="text-[#1abcbc] text-[10px] font-semibold uppercase tracking-[1.5px]">
              {cat.label}
            </span>
            <span className="font-black text-white text-[18px] uppercase leading-tight whitespace-pre-line"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {cat.title}
            </span>
            <span className="text-white/30 group-hover:text-[#1abcbc] group-hover:translate-x-1 transition-all text-lg mt-1">
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
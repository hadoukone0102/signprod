export default function DevisPage() {
  return (
    <div className="bg-[#F6F9FC]">
      <section className="sp-page-hero sp-page-hero--center">
        <div className="container sp-page-hero__inner">
          <p className="sp-kicker">Demande De Devis</p>
          <h1 className="sp-title max-w-3xl">Obtenez une proposition claire sous 24h.</h1>
          <p className="sp-lead max-w-2xl">
            Decrivez votre besoin, votre localisation et votre delai. Notre equipe vous
            envoie une proposition adaptee rapidement.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid grid-cols-1 gap-7 lg:grid-cols-5">
          <div className="mx-auto w-full max-w-3xl rounded-3xl border border-[#D8E4F1] bg-white p-7 md:p-9 shadow-[0_6px_18px_rgba(13,24,33,0.05)] lg:col-span-3">
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2]" placeholder="Nom complet" />
              <input className="rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2]" placeholder="Telephone" />
              <input className="rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2] md:col-span-2" placeholder="Email" />
              <input className="rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2] md:col-span-2" placeholder="Type de projet (enseigne, signaletique...)" />
              <textarea className="min-h-36 rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2] md:col-span-2" placeholder="Votre besoin en detail" />
              <button type="button" className="btn btn-primary md:col-span-2 md:w-fit">
                Envoyer ma demande
              </button>
            </form>
          </div>

          <aside className="rounded-3xl border border-[#D8E4F1] bg-white p-7 md:p-9 shadow-[0_6px_18px_rgba(13,24,33,0.05)] lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0097B2]">Pourquoi Signprod ?</p>
            <ul className="mt-4 space-y-3 text-sm text-[#5B6D83]">
              <li>• Reponse rapide sous 24h</li>
              <li>• Conseils techniques et esthetiques</li>
              <li>• Fabrication locale avec controle qualite</li>
              <li>• Equipe de pose experimentee</li>
            </ul>
            <div className="mt-5 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                alt="Exemple d'atelier de production"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

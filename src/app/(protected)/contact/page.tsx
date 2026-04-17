export default function ContactPage() {
  return (
    <div className="bg-[#F6F9FC]">
      <section className="sp-page-hero">
        <div className="container sp-page-hero__inner">
          <p className="sp-kicker">Nous Contacter</p>
          <h1 className="sp-title max-w-3xl">Parlons de votre projet de communication visuelle.</h1>
          <p className="sp-lead max-w-3xl">
            Notre equipe vous accompagne de l&apos;idee initiale jusqu&apos;a la mise en place,
            avec une approche claire et orientee resultat.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid grid-cols-1 gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#D8E4F1] bg-white p-7 md:p-9 shadow-[0_6px_18px_rgba(13,24,33,0.05)]">
            <h2 className="text-2xl font-bold text-[#1A2B3C]">Informations</h2>
            <div className="mt-5 space-y-3 text-[#5A6B82]">
              <p>Abidjan, Cote d&apos;Ivoire</p>
              <p>+225 00 00 00 00</p>
              <p>contact@signprod.com</p>
              <p>Lundi - Vendredi : 8h00 - 18h00</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#D8E4F1] bg-white p-7 md:p-9 shadow-[0_6px_18px_rgba(13,24,33,0.05)]">
            <h2 className="text-2xl font-bold text-[#1A2B3C]">Envoyer un message</h2>
            <form className="mt-5 grid grid-cols-1 gap-4">
              <input className="rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2]" placeholder="Nom" />
              <input className="rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2]" placeholder="Email" />
              <textarea className="min-h-36 rounded-xl border border-[#D1DDEB] px-4 py-3 outline-none focus:border-[#0097B2]" placeholder="Message" />
              <button type="button" className="btn btn-primary w-fit">Envoyer</button>
            </form>
          </div>
        </div>

        <div className="container mt-8">
          <div className="overflow-hidden rounded-3xl border border-[#D8E4F1]">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
              alt="Exemple de showroom et espace client"
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

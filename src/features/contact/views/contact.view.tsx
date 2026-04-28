"use client";

import { useState, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import { CONTACT } from "@/shared/constants/contact.info";

const COORDONNEES = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: [CONTACT.address.short],
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: [CONTACT.phone.label],
    href: CONTACT.phone.href,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [CONTACT.email.label],
    href: CONTACT.email.href,
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: [...CONTACT.hours.compact],
  },
];

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Nous contacter"
        title="Parlons de votre"
        highlight="prochain projet"
        description="Une question, un projet ou simplement envie d'échanger ? Notre équipe est à votre écoute pour vous accompagner."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nous Contacter" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COORDONNEES.map((c) => {
              const Icon = c.icon;
              const Inner = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[rgba(0,151,178,0.1)] text-[#0097B2] transition-colors group-hover:bg-[#0097B2] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xs font-bold uppercase tracking-[2px] text-[#0097B2]">
                    {c.title}
                  </h3>
                  {c.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm font-semibold text-[#0a1628]">
                      {line}
                    </p>
                  ))}
                </>
              );
              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  className="group block border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#0097B2] hover:shadow-md"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={c.title}
                  className="group border border-slate-200 bg-white p-6 transition-all hover:border-[#0097B2]"
                >
                  {Inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#0097B2]">
                <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
                Nous écrire
              </span>
              <h2
                className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-[#0a1628] md:text-4xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Une question ? <br />
                <span className="text-[#0097B2]">Écrivez-nous.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Pour toute demande d&apos;information ou de partenariat, utilisez ce formulaire ou contactez-nous directement par téléphone ou par email. Nous vous répondons sous 24h ouvrées.
              </p>

              <div className="mt-8 aspect-video overflow-hidden border border-slate-200 bg-[#0a1628]">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0a1628] to-[#0097B2]">
                  <div className="text-center text-white/60">
                    <MapPin className="mx-auto h-10 w-10 text-[#1abcbc]" />
                    <p className="mt-3 text-xs font-bold uppercase tracking-[2px]">Carte interactive</p>
                    <p className="mt-1 text-sm">{CONTACT.address.short}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center border border-[#0097B2] bg-white p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0097B2] text-white">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2
                    className="mt-6 text-2xl font-black uppercase tracking-tight text-[#0a1628]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Message envoyé !
                  </h2>
                  <p className="mt-3 max-w-md text-sm text-slate-600">
                    Merci pour votre message. Notre équipe vous répond sous 24h ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5 border border-slate-200 bg-white p-6 md:p-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
                        Nom complet *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0097B2] focus:ring-2 focus:ring-[#0097B2]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="vous@entreprise.com"
                        className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0097B2] focus:ring-2 focus:ring-[#0097B2]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
                      Sujet *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Objet de votre message"
                      className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0097B2] focus:ring-2 focus:ring-[#0097B2]/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Votre message…"
                      className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0097B2] focus:ring-2 focus:ring-[#0097B2]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#0097B2] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#00b4d4] hover:shadow-lg sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  Send,
} from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import { CONTACT } from "@/shared/constants/contact.info";

const SERVICES = [
  "Enseignes lumineuses",
  "Signalétique intérieure",
  "Signalétique extérieure",
  "Concept façade",
  "Impression grand format",
  "Totem / pylône",
  "Habillage véhicule",
  "Autre",
];

const BUDGETS = [
  "< 500 000 FCFA",
  "500 000 – 2 000 000 FCFA",
  "2 000 000 – 5 000 000 FCFA",
  "> 5 000 000 FCFA",
  "À définir",
];

const DELAIS = ["Urgent (< 2 semaines)", "Sous 1 mois", "Sous 3 mois", "Flexible"];

export default function DevisView() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Demande de devis"
        title="Recevez votre étude"
        highlight="sous 24h"
        description="Remplissez ce formulaire et notre équipe vous recontacte rapidement pour étudier votre projet et vous proposer une solution adaptée."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Demande de Devis" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <h2
                className="text-2xl font-black uppercase tracking-tight text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Pourquoi demander <br />
                <span className="text-[#0097B2]">un devis SignProd</span> ?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Une étude personnalisée, transparente et sans engagement pour transformer votre projet en réalité.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: Clock, title: "Réponse sous 24h", desc: "Notre équipe vous recontacte rapidement." },
                  { icon: ShieldCheck, title: "Sans engagement", desc: "Le devis est totalement gratuit." },
                  { icon: Sparkles, title: "Solution sur mesure", desc: "Adaptée à votre besoin et à votre budget." },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <li key={b.title} className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(0,151,178,0.1)] text-[#0097B2]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#0a1628]">{b.title}</h3>
                        <p className="text-sm text-slate-600">{b.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 border-l-2 border-[#0097B2] bg-[#F8FAFC] p-5">
                <p className="text-xs font-bold uppercase tracking-[2px] text-[#0097B2]">
                  Besoin urgent ?
                </p>
                <a
                  href={CONTACT.phone.href}
                  className="mt-2 block text-2xl font-bold text-[#0a1628]"
                >
                  {CONTACT.phone.label}
                </a>
                <p className="mt-1 text-xs text-slate-500">
                  {CONTACT.hours.compact[0]}
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center border border-[#0097B2] bg-gradient-to-br from-[#F8FAFC] to-white p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0097B2] text-white">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2
                    className="mt-6 text-2xl font-black uppercase tracking-tight text-[#0a1628] md:text-3xl"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Demande envoyée !
                  </h2>
                  <p className="mt-3 max-w-md text-sm text-slate-600">
                    Merci pour votre confiance. Notre équipe étudie votre projet et vous recontacte sous 24h ouvrées.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold uppercase tracking-[2px] text-[#0097B2] hover:underline"
                  >
                    Envoyer une nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6 border border-slate-200 bg-white p-6 md:p-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Nom complet *" name="name" required placeholder="Votre nom" />
                    <Field
                      label="Entreprise"
                      name="company"
                      placeholder="Nom de votre société"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Email *"
                      name="email"
                      type="email"
                      required
                      placeholder="vous@entreprise.com"
                    />
                    <Field
                      label="Téléphone *"
                      name="phone"
                      type="tel"
                      required
                      placeholder={CONTACT.phone.short}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
                      Type de prestation *
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {SERVICES.map((s) => (
                        <label
                          key={s}
                          className="group flex cursor-pointer items-center gap-2 border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 transition has-[:checked]:border-[#0097B2] has-[:checked]:bg-[#0097B2]/5 has-[:checked]:text-[#0097B2] hover:border-[#0097B2]/50"
                        >
                          <input
                            type="checkbox"
                            name="service"
                            value={s}
                            className="h-3.5 w-3.5 accent-[#0097B2]"
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <SelectField label="Budget estimé" name="budget" options={BUDGETS} />
                    <SelectField label="Délai souhaité" name="delai" options={DELAIS} />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Dimensions, lieu d'installation, contraintes spécifiques, etc."
                      className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0097B2] focus:ring-2 focus:ring-[#0097B2]/20"
                    />
                  </div>

                  <div className="flex items-start gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500">
                    <input
                      id="rgpd"
                      type="checkbox"
                      required
                      className="mt-0.5 h-3.5 w-3.5 accent-[#0097B2]"
                    />
                    <label htmlFor="rgpd">
                      J&apos;accepte que mes données soient utilisées dans le cadre du traitement de ma demande. Aucune donnée ne sera transmise à des tiers.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#0097B2] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#00b4d4] hover:shadow-lg sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer ma demande
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

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0097B2] focus:ring-2 focus:ring-[#0097B2]/20"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
}

function SelectField({ label, name, options }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#0a1628]">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0097B2] focus:ring-2 focus:ring-[#0097B2]/20"
      >
        <option value="" disabled>
          Sélectionner…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import ContactForm from "../_components/contact-form";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Entre em contacto com a ZUTIC para falar sobre desenvolvimento de software, consultoria tecnológica e soluções digitais em Angola.",
};

const contactChannels = [
  {
    title: "Telefone",
    description: "Ligue-nos para falar diretamente com a equipa.",
    detail: "+244 900 000 000",
    href: "tel:+244900000000",
    action: "Ligar agora",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    description: "Envie uma mensagem e conte-nos como podemos ajudar.",
    detail: "Atendimento por mensagem",
    href: "https://wa.me/244900000000",
    action: "Abrir WhatsApp",
    icon: MessageCircle,
  },
  {
    title: "Correio eletrónico",
    description: "Para propostas, dúvidas ou informações gerais.",
    detail: "geral@zutic.co.ao",
    href: "mailto:geral@zutic.co.ao",
    action: "Enviar e-mail",
    icon: Mail,
  },
];

export default function ContactosPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-cyan-900/30">
        <div
          aria-hidden="true"
          className="brand-hero-background absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(8,145,178,0.18),_transparent_55%),linear-gradient(135deg,_#07090e,_#0b0f19_55%,_#07090e)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"
        />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Contactos &amp; atendimento
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Vamos conversar sobre o seu{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                próximo projeto.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Fale com a equipa ZUTIC sobre software, consultoria ou tecnologia para a sua empresa.
              Estamos disponíveis para ouvir o seu desafio e ajudar a encontrar o próximo passo.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-channels-title" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Canais diretos
            </span>
            <h2 id="contact-channels-title" className="mt-2 text-2xl font-bold text-slate-100 sm:text-3xl">
              Escolha como prefere falar connosco
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contactChannels.map(({ title, description, detail, href, action, icon: Icon }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-cyan-900/40 bg-[#0b0f19] p-5 transition-colors hover:border-cyan-500/50 sm:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/70 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">{title}</h3>
                <p className="mt-2 min-h-10 text-sm leading-relaxed text-slate-400">{description}</p>
                <p className="mt-4 break-words text-sm font-semibold text-slate-200">{detail}</p>
                <a
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {action}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
          <ContactForm />

          <aside className="space-y-6">
            <section className="rounded-3xl border border-cyan-900/40 bg-[#0b0f19] p-6 sm:p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/70 text-cyan-400">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Onde estamos
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-100">Luanda, Angola</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                A equipa ZUTIC está em Luanda. Contacte-nos para combinar os detalhes do atendimento.
              </p>
              <a
                href="https://maps.google.com/?q=Luanda%2C+Angola"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 px-4 py-3 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-950/60"
              >
                Ver Luanda no mapa <ArrowUpRight className="h-4 w-4" />
              </a>
            </section>

            <section className="rounded-3xl border border-cyan-900/40 bg-[#0b0f19] p-6 sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/70 text-cyan-400">
                <Clock3 className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Atendimento</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Para garantir que a equipa certa está disponível, o atendimento presencial é feito mediante agendamento.
              </p>
              <a
                href="mailto:geral@zutic.co.ao?subject=Agendamento%20de%20atendimento"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Solicitar agendamento <ArrowUpRight className="h-4 w-4" />
              </a>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

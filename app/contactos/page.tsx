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
    description: "Fale diretamente com a nossa equipa.",
    detail: "+244 900 000 000",
    href: "tel:+244900000000",
    action: "Ligar agora",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    description: "Envie uma mensagem à equipa.",
    detail: "Atendimento por mensagem",
    href: "https://wa.me/244900000000",
    action: "Abrir WhatsApp",
    icon: MessageCircle,
  },
  {
    title: "Correio eletrónico",
    description: "Para propostas e informações gerais.",
    detail: "geral@zutic.co.ao",
    href: "mailto:geral@zutic.co.ao",
    action: "Enviar e-mail",
    icon: Mail,
  },
];

export default function ContactosPage() {
  return (
    <main>
      <section aria-labelledby="contact-channels-title" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Canais diretos
            </span>
            <h2
              id="contact-channels-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Fale connosco
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactChannels.map(({ title, description, detail, href, action, icon: Icon }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm shadow-slate-900/5 transition-shadow hover:shadow-lg hover:shadow-blue-950/10"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                <p className="mt-4 break-words text-sm font-semibold text-slate-800">{detail}</p>
                <a
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
                >
                  {action}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
          <ContactForm />

          <aside className="space-y-4">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Onde estamos
              </span>
              <h2 className="mt-2 text-xl font-bold text-blue-950">Luanda, Angola</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                O atendimento presencial é feito mediante agendamento.
              </p>
              <a
                href="https://maps.google.com/?q=Luanda%2C+Angola"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
              >
                Ver Luanda no mapa <ArrowUpRight className="h-4 w-4" />
              </a>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Clock3 className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-blue-950">Atendimento</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Marque uma conversa com a equipa ZUTIC.
              </p>
              <a
                href="mailto:geral@zutic.co.ao?subject=Agendamento%20de%20atendimento"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
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

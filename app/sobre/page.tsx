import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Eye,
  Lightbulb,
  LockKeyhole,
  MapPin,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a ZUTIC",
  description:
    "Conheça a ZUTIC, a sua abordagem à tecnologia e os princípios que orientam o desenvolvimento de soluções digitais para empresas.",
};

const principles = [
  {
    title: "Missão",
    description:
      "Transformar desafios empresariais em soluções tecnológicas práticas, seguras e ajustadas às necessidades de cada organização.",
    icon: Target,
  },
  {
    title: "Visão",
    description:
      "Contribuir para um futuro em que empresas em Angola possam crescer com confiança através da tecnologia.",
    icon: Eye,
  },
  {
    title: "Valores",
    description:
      "Trabalhamos com responsabilidade, transparência, rigor técnico e compromisso com os resultados dos nossos clientes.",
    icon: Lightbulb,
  },
];

const capabilities = [
  {
    title: "Software à medida",
    description:
      "Aplicações, plataformas e sistemas concebidos para responder aos processos e objetivos específicos de cada negócio.",
    icon: Code2,
    href: "/#servicos",
    action: "Conhecer os serviços",
  },
  {
    title: "Consultoria e arquitetura",
    description:
      "Apoio na escolha de tecnologias, desenho de arquiteturas e planeamento de soluções preparadas para evoluir.",
    icon: Users,
    href: "/#servicos",
    action: "Explorar soluções",
  },
  {
    title: "Cloud e segurança",
    description:
      "Infraestrutura, práticas de segurança e acompanhamento técnico para manter os sistemas fiáveis e protegidos.",
    icon: LockKeyhole,
    href: "/#servicos",
    action: "Falar com a equipa",
  },
];

export default function SobrePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-cyan-900/30">
        <div
          aria-hidden="true"
          className="theme-hero-background absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(8,145,178,0.18),_transparent_55%),linear-gradient(135deg,_#07090e,_#0b0f19_55%,_#07090e)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"
        />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Sobre a ZUTIC
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tecnologia para impulsionar{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                negócios em Angola.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Somos uma equipa de tecnologia focada em ajudar empresas a resolver desafios reais
              com software, consultoria e soluções digitais pensadas para o seu contexto.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-intro-title" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              A nossa trajetória e propósito
            </span>
            <h2 id="about-intro-title" className="mt-3 text-3xl font-extrabold leading-tight text-slate-100 sm:text-4xl">
              Tecnologia que aproxima{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                desafios e soluções.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              <p>
                Acreditamos que a tecnologia deve servir os objetivos das pessoas e das empresas.
                Por isso, começamos por compreender cada necessidade antes de propor uma solução.
              </p>
              <p>
                Da ideia à implementação, trabalhamos lado a lado com os nossos clientes para criar
                sistemas úteis, sustentáveis e preparados para acompanhar a evolução do negócio.
              </p>
            </div>
            <ul className="mt-7 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                Soluções alinhadas com os objetivos e processos de cada empresa.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                Acompanhamento técnico desde o planeamento até à evolução da solução.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                Uma abordagem próxima, clara e focada na qualidade.
              </li>
            </ul>
          </div>

          <aside className="rounded-3xl border border-cyan-900/40 bg-[#0b0f19] p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/70 text-cyan-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                  Presença local
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-100">Luanda, Angola</h3>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Trabalhamos com empresas que procuram um parceiro tecnológico próximo para desenhar,
              desenvolver e melhorar as suas soluções digitais.
            </p>
            <div className="my-6 h-px bg-cyan-900/40" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-slate-100">À medida</p>
                <p className="mt-1 text-xs text-slate-500">Soluções pensadas para cada negócio</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-100">Em parceria</p>
                <p className="mt-1 text-xs text-slate-500">Colaboração próxima com cada cliente</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="border-y border-cyan-900/20 bg-[#0b0f19]/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              O que nos orienta
            </span>
            <h2 id="principles-title" className="mt-3 text-3xl font-extrabold text-slate-100 sm:text-4xl">
              Princípios que guiam a nossa{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                atuação diária.
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              São estes princípios que orientam a forma como colaboramos, tomamos decisões e
              entregamos cada projeto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-cyan-900/40 bg-[#07090e] p-6 transition-colors hover:border-cyan-500/40 sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/70 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="capabilities-title" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Como podemos ajudar
            </span>
            <h2 id="capabilities-title" className="mt-3 text-3xl font-extrabold text-slate-100 sm:text-4xl">
              Competências para acompanhar{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                o seu negócio.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map(({ title, description, icon: Icon, href, action }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-cyan-900/40 bg-[#0b0f19] p-6 transition-colors hover:border-cyan-500/40 sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/70 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
                <Link
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {action} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#07090e] p-7 shadow-2xl sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Vamos construir em conjunto
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Tem um desafio para resolver com tecnologia?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Conte-nos o que a sua empresa precisa e vamos conversar sobre uma solução adequada.
                </p>
              </div>
              <Link
                href="/contactos"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold text-slate-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Fale connosco <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

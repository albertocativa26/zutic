import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Eye,
  Lightbulb,
  MapPin,
  Network,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a ZUTIC",
  description:
    "Conheça a ZUTIC, a sua missão, os seus valores e o compromisso com o desenvolvimento de soluções tecnológicas para empresas em Angola.",
};

const principles = [
  {
    title: "Missão",
    description:
      "Transformar desafios empresariais em soluções tecnológicas práticas e seguras, ajustadas às necessidades de cada organização.",
    icon: Target,
  },
  {
    title: "Visão",
    description:
      "Contribuir para que empresas em Angola possam crescer e inovar com confiança através da tecnologia.",
    icon: Eye,
  },
  {
    title: "Valores",
    description:
      "Agir com responsabilidade, transparência, rigor técnico e compromisso com os objetivos dos nossos clientes.",
    icon: Lightbulb,
  },
];

const capabilities = [
  {
    title: "Software à medida",
    description:
      "Aplicações web, plataformas e sistemas de gestão concebidos em função dos processos e objetivos específicos de cada empresa.",
    icon: Code2,
    href: "/solucoes#software",
    action: "Explorar desenvolvimento",
  },
  {
    title: "Consultoria e arquitetura",
    description:
      "Análise e planeamento tecnológico para ajudar a escolher soluções sustentáveis e preparadas para evoluir.",
    icon: Network,
    href: "/solucoes#consultoria",
    action: "Conhecer a consultoria",
  },
];

const commitments = [
  {
    title: "Segurança e responsabilidade",
    description:
      "Consideramos a proteção dos sistemas e dos dados desde o planeamento até à entrega de cada solução.",
    icon: ShieldCheck,
  },
  {
    title: "Colaboração próxima",
    description:
      "Trabalhamos em conjunto com a sua equipa, com comunicação clara e decisões alinhadas com as prioridades do negócio.",
    icon: Users,
  },
  {
    title: "Tecnologia com propósito",
    description:
      "Escolhemos abordagens técnicas pela sua utilidade e adequação ao problema, não pela complexidade.",
    icon: CheckCircle2,
  },
  {
    title: "Evolução contínua",
    description:
      "Desenhamos soluções que podem ser acompanhadas, mantidas e melhoradas à medida que a empresa cresce.",
    icon: ArrowUpRight,
  },
];

export default function SobrePage() {
  return (
    <main>
      <section aria-labelledby="about-hero-title" className="home-hero relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#06142e] sm:min-h-[790px]" >
        <div aria-hidden="true" className="home-hero-grid absolute inset-0" />
        <div aria-hidden="true" className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
        <div aria-hidden="true" className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Sobre a ZUTIC
          </span>
          <h1
            id="about-hero-title"
            className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl"
          >
            Uma empresa angolana de{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              tecnologia e inovação.
            </span>
          </h1>
          <p className="home-hero-copy mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
            Desenvolvemos soluções digitais e software à medida para ajudar empresas a resolver
            desafios e preparar o próximo passo.
          </p>
        </div>
        <svg
          aria-hidden="true"
          className="hero-wave hero-wave-back absolute -bottom-px -left-[5%] h-12 w-[110%] sm:h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,55 C220,100 390,10 650,45 C900,80 1120,5 1440,45 L1440,100 L0,100 Z" fill="#dbeafe" />
        </svg>
        <svg
          aria-hidden="true"
          className="hero-wave hero-wave-front absolute -bottom-px -left-[5%] h-12 w-[110%] sm:h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,72 C250,30 460,110 720,65 C980,25 1210,80 1440,35 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </section>

      <section aria-labelledby="about-intro-title" className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              A nossa trajetória e propósito
            </span>
            <h2
              id="about-intro-title"
              className="mt-3 text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl"
            >
              Tecnologia que aproxima{" "}
              <span className="text-blue-600">desafios e soluções.</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                Acreditamos que a tecnologia deve servir os objetivos das pessoas e das empresas.
                Por isso, começamos por compreender cada necessidade antes de propor uma solução.
              </p>
              <p>
                Da ideia à implementação, colaboramos com os nossos clientes para criar sistemas
                úteis, sustentáveis e preparados para acompanhar a evolução do negócio.
              </p>
            </div>
            <ul className="mt-7 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                Soluções alinhadas com os objetivos e processos de cada empresa.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                Acompanhamento técnico do planeamento à evolução da solução.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                Uma abordagem próxima, clara e focada na qualidade.
              </li>
            </ul>
          </div>

          <aside className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Presença local
                </p>
                <h3 className="mt-1 text-lg font-bold text-blue-950">Luanda, Angola</h3>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Trabalhamos com empresas que procuram um parceiro tecnológico próximo para desenhar,
              desenvolver e melhorar as suas soluções digitais.
            </p>
            <div className="my-6 h-px bg-blue-100" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-blue-950">À medida</p>
                <p className="mt-1 text-xs text-slate-500">
                  Soluções pensadas para cada negócio
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-blue-950">Em parceria</p>
                <p className="mt-1 text-xs text-slate-500">
                  Colaboração próxima com cada cliente
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        aria-labelledby="principles-title"
        className="border-y border-blue-100 bg-blue-50/80 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              O que nos orienta
            </span>
            <h2
              id="principles-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Princípios que guiam a nossa{" "}
              <span className="text-blue-600">atuação diária.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              São estes princípios que orientam a forma como colaboramos, tomamos decisões e
              entregamos cada projeto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5 transition-shadow hover:shadow-md sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-blue-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="capabilities-title" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Áreas de atuação
            </span>
            <h2
              id="capabilities-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Competências para acompanhar{" "}
              <span className="text-blue-600">o seu negócio.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Combinamos engenharia, consultoria e tecnologia para responder às necessidades da sua empresa.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map(({ title, description, icon: Icon, href, action }) => (
              <article
                key={title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5 transition-shadow hover:shadow-lg hover:shadow-blue-950/10 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    ZUTIC Tech
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                <Link
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
                >
                  {action} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="commitments-title"
        className="border-y border-blue-100 bg-blue-50/80 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              O nosso compromisso
            </span>
            <h2
              id="commitments-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Tecnologia com{" "}
              <span className="text-blue-600">responsabilidade e confiança.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Trabalhamos com rigor técnico, proximidade e atenção à continuidade de cada solução.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-blue-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="home-cta-panel relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-800/50 bg-[#06142e] p-7 shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12">
          <div aria-hidden="true" className="home-hero-grid absolute inset-0 opacity-40" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Vamos construir em conjunto
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Tem um desafio para resolver com tecnologia?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100/80">
                Conte-nos o que a sua empresa precisa e vamos conversar sobre uma solução adequada.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-bold text-white">Fale com a equipa ZUTIC</p>
              <p className="mt-2 text-xs leading-relaxed text-blue-100/70">
                Estamos disponíveis para ouvir as suas necessidades e orientar os próximos passos.
              </p>
              <Link
                href="/contactos"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
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

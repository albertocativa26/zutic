import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Cpu, Database, LockKeyhole, Network, Smartphone, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Explore as soluções tecnológicas da ZUTIC: software à medida, sistemas de gestão, aplicações, integrações, cloud e segurança.",
};

const featuredSolutions = [
  {
    eyebrow: "Software empresarial",
    title: "Sistemas de gestão feitos para o seu negócio",
    description:
      "Centralize operações, organize informação e acompanhe processos com software desenvolvido em função da realidade da sua empresa.",
    icon: Code2,
    features: [
      "Plataformas web e portais internos",
      "Sistemas ERP e CRM à medida",
      "Painéis de gestão e relatórios",
      "Integração com ferramentas existentes",
    ],
    href: "/solucoes#software",
    action: "Explorar software à medida",
  },
  {
    eyebrow: "Ecossistemas digitais",
    title: "Aplicações e sistemas que trabalham em conjunto",
    description:
      "Ligue os seus canais digitais, aplicações e processos através de experiências integradas, acessíveis e preparadas para evoluir.",
    icon: Network,
    features: [
      "Aplicações para web e dispositivos móveis",
      "Integrações através de APIs e serviços",
      "Automação de processos operacionais",
      "Infraestrutura preparada para crescer",
    ],
    href: "/solucoes#mobile",
    action: "Conhecer aplicações e integrações",
  },
];

const specializedServices = [
  {
    title: "Engenharia de software",
    description:
      "Desenvolvimento de aplicações, plataformas e sistemas empresariais com foco em qualidade e adequação aos processos.",
    icon: Code2,
    tag: "Desenvolvimento",
    id: "software",
    href: "/contactos?assunto=Engenharia%20de%20software",
  },
  {
    title: "Aplicações móveis",
    description:
      "Experiências móveis para aproximar os seus serviços de clientes e equipas, em iOS e Android.",
    icon: Smartphone,
    tag: "Mobilidade",
    id: "mobile",
    href: "/contactos?assunto=Aplicações%20móveis",
  },
  {
    title: "Integração e automação",
    description:
      "Ligação entre sistemas e automatização de tarefas para reduzir trabalho manual e melhorar os fluxos.",
    icon: Zap,
    tag: "Operações",
    id: "automacao",
    href: "/contactos?assunto=Integração%20e%20automação",
  },
  {
    title: "Cloud e infraestrutura",
    description:
      "Ambientes, publicações e monitorização para apoiar a disponibilidade e evolução das suas soluções.",
    icon: Database,
    tag: "Infraestrutura",
    id: "cloud",
    href: "/contactos?assunto=Cloud%20e%20infraestrutura",
  },
  {
    title: "Cibersegurança",
    description:
      "Práticas de proteção, gestão de acessos e recomendações para reforçar a segurança dos sistemas e dados.",
    icon: LockKeyhole,
    tag: "Segurança",
    id: "seguranca",
    href: "/contactos?assunto=Cibersegurança",
  },
  {
    title: "Consultoria tecnológica",
    description:
      "Análise de necessidades, arquitetura e orientação técnica para decisões tecnológicas mais informadas.",
    icon: Cpu,
    tag: "Consultoria",
    id: "consultoria",
    href: "/contactos?assunto=Consultoria%20tecnológica",
  },
];

export default function SolucoesPage() {
  return (
    <main>
      <section
        aria-labelledby="solutions-hero-title"
        className="home-hero relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#06142e] sm:min-h-[790px]"
      >
        <div aria-hidden="true" className="home-hero-grid absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]"
        />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Soluções tecnológicas ZUTIC
          </span>
          <h1
            id="solutions-hero-title"
            className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl"
          >
            Soluções digitais para{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              impulsionar empresas.
            </span>
          </h1>
          <p className="home-hero-copy mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
            Software, aplicações e infraestrutura desenvolvidos para responder aos desafios da sua
            organização e acompanhar a sua evolução.
          </p>
          <Link
            href="/contactos"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-blue-500"
          >
            Fale com a nossa equipa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <svg
          aria-hidden="true"
          className="hero-wave hero-wave-back absolute -bottom-px -left-[5%] h-12 w-[110%] sm:h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,55 C220,100 390,10 650,45 C900,80 1120,5 1440,45 L1440,100 L0,100 Z"
            fill="#dbeafe"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="hero-wave hero-wave-front absolute -bottom-px -left-[5%] h-12 w-[110%] sm:h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,72 C250,30 460,110 720,65 C980,25 1210,80 1440,35 L1440,100 L0,100 Z"
            fill="#f1f5f9"
          />
        </svg>
      </section>

      <section
        aria-labelledby="featured-solutions-title"
        className="bg-slate-50 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Soluções para a sua operação
            </span>
            <h2
              id="featured-solutions-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Tecnologia alinhada com os seus objetivos.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Combinamos engenharia e conhecimento do negócio para criar ferramentas que apoiam o
              trabalho diário das organizações.
            </p>
          </div>

          <div className="space-y-5">
            {featuredSolutions.map(({ eyebrow, title, description, icon: Icon, features, href, action }, index) => (
              <article
                key={title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 sm:p-8 lg:p-9"
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        {eyebrow}
                      </span>
                    </div>
                    <h3 className="max-w-xl text-2xl font-extrabold leading-tight text-blue-950 sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                    <Link
                      href={href}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                    >
                      {action} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <ul
                    className={`grid gap-3 sm:grid-cols-2 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex min-h-20 items-start gap-3 rounded-2xl border border-slate-200 bg-slate-100/80 p-4 text-sm leading-relaxed text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="specialized-services-title"
        className="border-y border-slate-200 bg-slate-100 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Especialidades
            </span>
            <h2
              id="specialized-services-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Serviços especializados em{" "}
              <span className="text-blue-600">tecnologia.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Áreas técnicas que podem ser contratadas em conjunto ou de acordo com a necessidade
              específica da sua empresa.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specializedServices.map(({ id, title, description, icon: Icon, tag, href }) => (
              <article
                key={title}
                id={id}
                className="flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition-shadow hover:shadow-lg hover:shadow-blue-950/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-blue-950">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
                <Link
                  href={href}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-blue-600 transition-colors hover:text-blue-800"
                >
                  Saber mais <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="home-cta-panel relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-800/50 bg-[#06142e] p-7 shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12">
          <div aria-hidden="true" className="home-hero-grid absolute inset-0 opacity-40" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Próximo passo
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Pronto para encontrar a solução certa?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100/80">
                Conte-nos sobre as necessidades da sua empresa. A nossa equipa ajuda a definir uma
                abordagem alinhada com os seus objetivos.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-bold text-white">Fale com a equipa ZUTIC</p>
              <p className="mt-2 text-xs leading-relaxed text-blue-100/70">
                Estamos disponíveis para conversar sobre software, aplicações e infraestrutura.
              </p>
              <Link
                href="/contactos"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Pedir uma proposta <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

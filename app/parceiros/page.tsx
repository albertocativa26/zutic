import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  Handshake,
  Network,
  Puzzle,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Parceiros",
  description:
    "Conheça o modelo de colaboração da ZUTIC e saiba como empresas de tecnologia podem construir soluções em conjunto.",
};

const partnerProfiles = [
  {
    title: "Empresas de tecnologia",
    category: "Tecnologia",
    image: "/images/partners/technology.svg",
    imageAlt: "Ilustração de uma equipa a colaborar num projeto tecnológico",
    description:
      "Equipas e empresas com produtos ou competências que complementam projetos de software, cloud e infraestrutura.",
    icon: Code2,
  },
  {
    title: "Consultores e especialistas",
    category: "Especialização",
    image: "/images/partners/specialists.svg",
    imageAlt: "Ilustração de especialistas a partilhar conhecimentos",
    description:
      "Profissionais com experiência em áreas de negócio ou técnicas que ajudam a responder a desafios específicos.",
    icon: Users,
  },
  {
    title: "Empresas e organizações",
    category: "Colaboração",
    image: "/images/partners/organizations.svg",
    imageAlt: "Ilustração de organizações ligadas por uma rede digital",
    description:
      "Organizações interessadas em desenvolver iniciativas digitais e criar valor através da colaboração tecnológica.",
    icon: Building2,
  },
];

const collaborationPrinciples = [
  {
    title: "Objetivos alinhados",
    description:
      "Definimos o propósito, as responsabilidades e os resultados esperados antes de iniciar cada colaboração.",
    icon: CheckCircle2,
  },
  {
    title: "Competências complementares",
    description:
      "Unimos conhecimentos para responder ao contexto do projeto, mantendo clareza sobre o papel de cada equipa.",
    icon: Puzzle,
  },
  {
    title: "Confiança e segurança",
    description:
      "Promovemos comunicação responsável e atenção à proteção da informação ao longo do trabalho conjunto.",
    icon: ShieldCheck,
  },
  {
    title: "Relações sustentáveis",
    description:
      "Valorizamos parcerias profissionais, transparentes e orientadas para relações de longo prazo.",
    icon: Handshake,
  },
];

export default function ParceirosPage() {
  return (
    <main>
      <section
        aria-labelledby="partners-hero-title"
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
            Rede de colaboração ZUTIC
          </span>
          <h1
            id="partners-hero-title"
            className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl"
          >
            Juntos, criamos mais{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              possibilidades.
            </span>
          </h1>
          <p className="home-hero-copy mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
            Acreditamos que a colaboração entre empresas e especialistas ajuda a criar soluções
            tecnológicas mais completas para os desafios reais dos negócios.
          </p>
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
            fill="#ffffff"
          />
        </svg>
      </section>

      <section aria-labelledby="partner-network-title" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Rede de parceiros
            </span>
            <h2
              id="partner-network-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Competências diferentes. Objetivos em comum.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Estamos abertos a conhecer organizações e profissionais que queiram colaborar em
              projetos e iniciativas tecnológicas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {partnerProfiles.map(({ title, category, image, imageAlt, description, icon: Icon }) => (
              <article
                key={title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm shadow-slate-900/5 transition-shadow hover:shadow-lg hover:shadow-blue-950/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white/90 text-blue-600 shadow-sm backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-blue-950">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="collaboration-title"
        className="border-y border-slate-200 bg-slate-100 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Como colaboramos
            </span>
            <h2
              id="collaboration-title"
              className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl"
            >
              Parcerias baseadas em confiança e clareza.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Cada colaboração é pensada em função das pessoas, das competências envolvidas e dos
              objetivos do projeto.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {collaborationPrinciples.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </span>
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
                Vamos colaborar?
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Tem uma ideia ou competência para partilhar?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100/80">
                Apresente a sua organização ou proposta. A equipa ZUTIC está disponível para
                conversar sobre oportunidades de colaboração.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-bold text-white">Contacto de parcerias</p>
              <p className="mt-2 text-xs leading-relaxed text-blue-100/70">
                Envie-nos uma breve apresentação e indique como gostaria de colaborar.
              </p>
              <Link
                href="/contactos?assunto=Parceria"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Fale connosco <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="mt-4 flex items-center justify-center gap-2 text-xs text-blue-100/70">
                <Network className="h-4 w-4" />
                Colaboração em tecnologia
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

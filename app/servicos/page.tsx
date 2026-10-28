import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  LockKeyhole,
  Rocket,
  Smartphone,
  Target,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da ZUTIC: desenvolvimento de software, aplicações móveis, consultoria de TI, automação, cibersegurança e cloud.",
};

const services = [
  {
    id: "software",
    title: "Desenvolvimento de Software à Medida",
    description:
      "Criamos produtos digitais desenhados para a realidade da sua empresa, desde plataformas web a sistemas de gestão e integrações.",
    icon: Code2,
    features: [
      "Sistemas web, portais e plataformas internas",
      "ERP e CRM adaptados aos seus processos",
      "Painéis de gestão e relatórios",
      "Integração com sistemas e APIs existentes",
    ],
  },
  {
    id: "mobile",
    title: "Aplicações Móveis",
    description:
      "Levamos os seus serviços aos dispositivos dos seus clientes com aplicações móveis funcionais, seguras e alinhadas com a sua marca.",
    icon: Smartphone,
    features: [
      "Aplicações para iOS e Android",
      "Experiências nativas ou multiplataforma",
      "Notificações e funcionalidades offline",
      "Preparação para publicação nas lojas",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria & Arquitetura de TI",
    description:
      "Apoiamos as suas decisões tecnológicas com análise, planeamento e arquiteturas preparadas para acompanhar o crescimento do negócio.",
    icon: Cpu,
    features: [
      "Análise de requisitos e sistemas existentes",
      "Auditoria técnica e diagnóstico",
      "Desenho de arquiteturas escaláveis",
      "Planeamento de migrações e modernização",
    ],
  },
  {
    id: "automacao",
    title: "Integrações & Automação",
    description:
      "Ligamos os seus sistemas e automatizamos tarefas repetitivas para reduzir trabalho manual, erros e atrasos nos processos.",
    icon: Zap,
    features: [
      "Integração entre plataformas e serviços",
      "Automação de processos repetitivos",
      "APIs, webhooks e sincronização de dados",
      "Mapeamento e melhoria de fluxos de trabalho",
    ],
  },
  {
    id: "seguranca",
    title: "Cibersegurança & Conformidade",
    description:
      "Ajudamos a proteger os seus sistemas e dados com práticas de segurança adequadas à operação e às responsabilidades da sua empresa.",
    icon: LockKeyhole,
    features: [
      "Revisão de segurança de aplicações",
      "Gestão de acessos e políticas de proteção",
      "Boas práticas de proteção de dados",
      "Recomendações e plano de mitigação",
    ],
  },
  {
    id: "cloud",
    title: "Infraestrutura Cloud & DevOps",
    description:
      "Configuramos ambientes, processos de publicação e monitorização para manter as suas soluções fiáveis e prontas a evoluir.",
    icon: Database,
    features: [
      "Configuração e gestão de ambientes cloud",
      "Pipelines de integração e entrega contínuas",
      "Monitorização e alertas operacionais",
      "Otimização de infraestrutura e custos",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Conhecemos o seu negócio, os objetivos e o desafio a resolver.",
    icon: Target,
  },
  {
    number: "02",
    title: "Planeamento",
    description: "Definimos o âmbito, a abordagem técnica e as próximas etapas.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos a solução com entregas e acompanhamento ao longo do projeto.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Lançamento e evolução",
    description: "Preparamos a entrada em produção e apoiamos os passos seguintes.",
    icon: Rocket,
  },
];

export default function ServicosPage() {
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
              Serviços ZUTIC
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tecnologia à medida para{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                fazer o seu negócio avançar.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Do primeiro levantamento ao lançamento, desenvolvemos soluções digitais que respondem
              aos desafios reais da sua empresa.
            </p>
            <Link
              href="/contactos"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold text-slate-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Pedir orçamento <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-title" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              O que fazemos
            </span>
            <h2 id="services-title" className="mt-3 text-3xl font-extrabold text-slate-100 sm:text-4xl">
              Soluções digitais do conceito à operação.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Escolha o serviço que melhor responde às suas necessidades, ou fale connosco para
              combinar diferentes áreas numa solução integrada.
            </p>
          </div>

          <div className="space-y-5">
            {services.map(({ id, title, description, icon: Icon, features }, index) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-24 rounded-3xl border border-cyan-900/40 bg-[#0b0f19] p-6 transition-colors hover:border-cyan-500/40 sm:p-8 lg:p-9"
              >
                <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/80 text-cyan-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-500/80">
                      Serviço {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-100 sm:text-3xl">{title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                      {description}
                    </p>
                    <Link
                      href={`/contactos?assunto=${encodeURIComponent(title)}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 px-4 py-3 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-950/60"
                    >
                      Pedir orçamento <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <ul
                    className={`grid gap-3 rounded-2xl border border-cyan-900/40 bg-[#07090e]/70 p-5 sm:grid-cols-2 sm:p-6 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="border-y border-cyan-900/20 bg-[#0b0f19]/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Uma parceria transparente
            </span>
            <h2 id="process-title" className="mt-3 text-3xl font-extrabold text-slate-100 sm:text-4xl">
              Como trabalhamos
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Um processo claro para acompanhar o projeto desde a primeira conversa até ao lançamento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="rounded-2xl border border-cyan-900/40 bg-[#07090e] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/70 text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm font-bold text-cyan-500/70">{number}</span>
                </div>
                <h3 className="font-bold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#07090e] p-7 shadow-2xl sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Próximo passo
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Vamos encontrar a solução certa para a sua empresa?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Partilhe o seu desafio com a nossa equipa e receba uma proposta alinhada com os
                  seus objetivos.
                </p>
              </div>
              <Link
                href="/contactos"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold text-slate-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Fale com a ZUTIC <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

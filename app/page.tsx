"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import type { Service } from "@/types/service";

const services: Service[] = [
  {
    id: "software",
    title: "Desenvolvimento de Software à Medida",
    tagline: "Sistemas web, ERPs e aplicações empresariais",
    desc: "Criamos plataformas e sistemas de gestão adaptados aos processos da sua empresa. Automatize tarefas e acompanhe a informação num só lugar.",
    icon: <Code2 className="h-6 w-6" />,
    features: [
      "Levantamento e análise de requisitos",
      "Sistemas web e aplicações empresariais",
      "Painéis de gestão e relatórios",
      "Integração com ferramentas existentes",
    ],
    deliverables: ["Análise e prototipagem", "Desenvolvimento iterativo", "Testes e validação", "Publicação e acompanhamento"],
  },
  {
    id: "mobile",
    title: "Aplicações Móveis",
    tagline: "Aplicações para iOS e Android",
    desc: "Colocamos os seus serviços na mão dos clientes com aplicações móveis intuitivas, funcionais e alinhadas com a identidade da sua marca.",
    icon: <Smartphone className="h-6 w-6" />,
    features: [
      "Aplicações para iOS e Android",
      "Experiências nativas ou multiplataforma",
      "Notificações e funcionalidades offline",
      "Preparação para publicação nas lojas",
    ],
    deliverables: ["Desenho da experiência", "Desenvolvimento da aplicação", "Testes em dispositivos", "Preparação para publicação"],
  },
  {
    id: "consultoria",
    title: "Consultoria & Arquitetura de TI",
    tagline: "Estratégia tecnológica para o seu negócio",
    desc: "Avaliamos os seus sistemas e necessidades para definir uma arquitetura robusta, sustentável e preparada para acompanhar o crescimento da empresa.",
    icon: <Cpu className="h-6 w-6" />,
    features: [
      "Análise de sistemas e requisitos",
      "Auditoria técnica e diagnóstico",
      "Arquiteturas preparadas para escalar",
      "Planeamento de migrações tecnológicas",
    ],
    deliverables: ["Diagnóstico técnico", "Recomendações priorizadas", "Desenho da arquitetura", "Roteiro de implementação"],
  },
  {
    id: "automacao",
    title: "Integrações & Automação",
    tagline: "Processos conectados e eficientes",
    desc: "Ligamos sistemas e automatizamos tarefas repetitivas para reduzir o trabalho manual, evitar erros e tornar as operações mais ágeis.",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Integração entre plataformas",
      "Automação de tarefas repetitivas",
      "APIs, webhooks e sincronização de dados",
      "Melhoria de fluxos de trabalho",
    ],
    deliverables: ["Mapeamento do processo", "Plano de integração", "Implementação e testes", "Documentação técnica"],
  },
  {
    id: "seguranca",
    title: "Cibersegurança & Conformidade",
    tagline: "Proteção para os seus sistemas e dados",
    desc: "Apoiamos a proteção da infraestrutura e da informação da sua empresa com práticas de segurança ajustadas à sua operação.",
    icon: <LockKeyhole className="h-6 w-6" />,
    features: [
      "Revisão de segurança das aplicações",
      "Gestão de acessos e permissões",
      "Boas práticas de proteção de dados",
      "Recomendações e plano de mitigação",
    ],
    deliverables: ["Avaliação inicial", "Identificação de riscos", "Plano de mitigação", "Acompanhamento técnico"],
  },
  {
    id: "cloud",
    title: "Infraestrutura Cloud & DevOps",
    tagline: "Infraestrutura preparada para evoluir",
    desc: "Configuramos ambientes cloud, processos de publicação e monitorização para apoiar sistemas fiáveis e facilitar a evolução dos seus produtos.",
    icon: <Database className="h-6 w-6" />,
    features: [
      "Configuração de ambientes cloud",
      "Pipelines de publicação automatizada",
      "Monitorização e alertas operacionais",
      "Otimização da infraestrutura",
    ],
    deliverables: ["Ambientes de desenvolvimento e produção", "Pipeline CI/CD", "Monitorização", "Documentação e transferência"],
  },
];

const serviceCategories = [
  { id: "todos", label: "Todos" },
  { id: "software", label: "Software" },
  { id: "mobile", label: "Aplicações móveis" },
  { id: "consultoria", label: "Consultoria" },
  { id: "automacao", label: "Automação" },
  { id: "seguranca", label: "Segurança" },
  { id: "cloud", label: "Cloud" },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico das necessidades",
    description: "Ouvimos a sua equipa, compreendemos os processos e definimos o desafio.",
    icon: Target,
  },
  {
    number: "02",
    title: "Planeamento da solução",
    description: "Alinhamos objetivos, funcionalidades, prioridades e próximos passos.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos a solução de forma iterativa, com validação ao longo do projeto.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Lançamento e acompanhamento",
    description: "Preparamos a entrega e apoiamos a evolução após a entrada em funcionamento.",
    icon: Workflow,
  },
];

const commitments = [
  {
    title: "Soluções adequadas ao seu contexto",
    description: "Cada projeto começa pela compreensão do negócio, das pessoas e dos processos envolvidos.",
    icon: Sparkles,
  },
  {
    title: "Segurança desde o início",
    description: "Consideramos proteção de dados e boas práticas técnicas ao longo do desenvolvimento.",
    icon: ShieldCheck,
  },
  {
    title: "Acompanhamento próximo",
    description: "Mantemos comunicação clara para que saiba o que está a ser feito e quais são os próximos passos.",
    icon: MessageSquare,
  },
];

const faqs = [
  {
    q: "Como começa um projeto com a ZUTIC?",
    a: "Começamos por uma conversa para compreender os objetivos e as necessidades da sua empresa. A partir daí, definimos o âmbito e apresentamos uma proposta com as etapas do projeto.",
  },
  {
    q: "A ZUTIC oferece acompanhamento após o lançamento?",
    a: "Sim. Podemos apoiar a manutenção, correção de problemas e evolução da solução após a sua entrada em funcionamento, de acordo com o âmbito acordado.",
  },
  {
    q: "As soluções podem integrar-se com sistemas existentes?",
    a: "Sim. Analisamos os sistemas e interfaces disponíveis e planeamos integrações com as ferramentas utilizadas pela sua empresa.",
  },
  {
    q: "Como posso pedir uma proposta?",
    a: "Envie-nos uma mensagem pela página de contactos com uma breve descrição do desafio. A nossa equipa entrará em contacto para perceber os detalhes.",
  },
];

export default function ZuticCorporateWebsite() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredServices = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase("pt");

    return services.filter((service) => {
      const matchesCategory = selectedCategory === "todos" || service.id === selectedCategory;
      const searchableContent = [
        service.title,
        service.tagline,
        service.desc,
        ...service.features,
      ].join(" ").toLocaleLowerCase("pt");

      return matchesCategory && (!query || searchableContent.includes(query));
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main>
      <section
        id="inicio"
        aria-labelledby="home-title"
        className="home-hero relative isolate flex min-h-[410px] items-center overflow-hidden bg-[#06142e] sm:min-h-[790px]"
      >
        <div aria-hidden="true" className="home-hero-grid absolute inset-0" />
        <div aria-hidden="true" className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
        <div aria-hidden="true" className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Tecnologia e software em Angola
          </span>
          <h1 id="home-title" className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tecnologia para impulsionar{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              o seu negócio.
            </span>
          </h1>
          <p className="home-hero-copy mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
            Desenvolvemos software à medida, aplicações e soluções tecnológicas para ajudar a sua empresa a crescer.
          </p>
          <Link
            href="/sobre"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-blue-500"
          >
            Saber mais <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#servicos"
            aria-label="Explorar serviços"
            className="mx-auto mt-7 flex w-fit items-center gap-2 text-xs font-medium text-blue-200/80 transition-colors hover:text-white"
          >
            Explore as nossas soluções <ArrowDown className="h-4 w-4" />
          </a>
        </div>
        <svg
          aria-hidden="true"
          className="hero-wave hero-wave-back absolute -bottom-px -left-[5%] h-12 w-[110%] sm:h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,55 C220,100 390,10 650,45 C900,80 1120,5 1440,45 L1440,100 L0,100 Z" fill="#eff6ff" />
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

      <section aria-label="Pesquisar serviços" className="relative z-20 -mt-2 bg-white px-4 pb-4 sm:px-6">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-blue-100 bg-white p-2 shadow-lg shadow-blue-950/10"
        >
          <Search className="ml-3 h-5 w-5 shrink-0 text-blue-500" />
          <label htmlFor="service-search" className="sr-only">Pesquisar serviços</label>
          <input
            id="service-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Procura software, aplicações, consultoria..."
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Limpar pesquisa"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-blue-500 sm:px-5"
          >
            Pesquisar
          </button>
        </form>
      </section>

      <section id="servicos" aria-labelledby="services-title" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Soluções ZUTIC
            </span>
            <h2 id="services-title" className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Soluções tecnológicas para{" "}
              <span className="text-blue-600">o seu negócio.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Explore as nossas áreas de atuação e encontre o apoio certo para o próximo passo da sua empresa.
            </p>
          </div>

          <div className="mb-9 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-100 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {filteredServices.length > 0 ? (
            <div className="space-y-5">
              {filteredServices.map((service, index) => (
                <article
                  key={service.id}
                  className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5 transition-shadow hover:shadow-lg hover:shadow-blue-950/10 sm:p-8 lg:p-9"
                >
                  <div className="grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-12">
                    <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
                        {service.icon}
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500">
                        {service.tagline}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-blue-950 sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                        {service.desc}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 text-xs font-bold text-blue-700 transition-colors hover:border-blue-600 hover:bg-blue-50"
                      >
                        Ver detalhes <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    <ul
                      className={`grid gap-x-5 gap-y-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:grid-cols-2 sm:p-6 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 px-6 py-12 text-center">
              <Search className="mx-auto h-8 w-8 text-blue-400" />
              <h3 className="mt-3 font-bold text-blue-950">Não encontrámos serviços</h3>
              <p className="mt-1 text-sm text-slate-600">Experimente outros termos ou escolha outra categoria.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("todos");
                }}
                className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-blue-950/40 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedService(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Fechar detalhes do serviço"
              className="absolute right-5 top-5 rounded-full p-2 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
              Serviço ZUTIC
            </span>
            <h2 id="service-dialog-title" className="mt-4 pr-10 text-2xl font-extrabold text-blue-950 sm:text-3xl">
              {selectedService.title}
            </h2>
            <p className="mt-2 text-sm font-semibold text-blue-600">{selectedService.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{selectedService.desc}</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-blue-950">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> O que está incluído
                </h3>
                <ul className="space-y-3">
                  {selectedService.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-blue-950">
                  <Sparkles className="h-4 w-4 text-blue-600" /> Etapas e entregáveis
                </h3>
                <ol className="space-y-3">
                  {selectedService.deliverables.map((deliverable, index) => (
                    <li key={deliverable} className="flex items-center gap-3 text-xs text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-blue-700">
                        {index + 1}
                      </span>
                      {deliverable}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <Link
              href="/contactos"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
            >
              Pedir proposta <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      )}

      <section id="processo" aria-labelledby="process-title" className="border-y border-blue-100 bg-blue-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Do primeiro contacto à entrega
            </span>
            <h2 id="process-title" className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Como apoiamos a sua empresa em 4 passos
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Um processo claro e colaborativo para desenvolver soluções alinhadas com as suas necessidades.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-blue-400">{number}</span>
                </div>
                <h3 className="text-sm font-bold text-blue-950">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="commitments-title" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              A confiança constrói-se em conjunto
            </span>
            <h2 id="commitments-title" className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              O compromisso da ZUTIC
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Princípios que orientam a nossa colaboração em cada projeto.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {commitments.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-blue-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title" className="border-y border-blue-100 bg-blue-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
              Perguntas frequentes
            </span>
            <h2 id="faq-title" className="mt-4 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Respostas claras para as suas dúvidas
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Saiba mais sobre como trabalhamos e como iniciar o seu projeto.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <article
                key={faq.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  openFaq === index ? "border-blue-300 shadow-sm shadow-blue-950/5" : "border-blue-100"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-blue-950 sm:px-6"
                  >
                    {faq.q}
                    <ChevronDown className={`h-4 w-4 shrink-0 text-blue-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                {openFaq === index && (
                  <p className="border-t border-blue-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6">
                    {faq.a}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="home-cta-panel relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-800/50 bg-[#06142e] p-7 shadow-xl shadow-blue-950/15 sm:p-10 lg:p-12">
          <div aria-hidden="true" className="home-hero-grid absolute inset-0 opacity-40" />
          <div aria-hidden="true" className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Vamos conversar?
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Pronto para modernizar o seu negócio?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100/80">
                Partilhe o seu desafio connosco e descubra como a tecnologia pode apoiar os seus objetivos.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-bold text-white">Contacto comercial</p>
              <p className="text-xs leading-relaxed text-blue-100/70">
                A nossa equipa está disponível para ouvir as suas necessidades e orientar os próximos passos.
              </p>
              <Link
                href="/contactos"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Falar com a ZUTIC <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/244900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-blue-100 transition-colors hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" /> Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/244900000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-900/25 transition-transform hover:scale-110"
          aria-label="Atendimento via WhatsApp"
        >
          <MessageSquare className="relative z-10 h-6 w-6" />
        </a>
      </div>
    </main>
  );
}

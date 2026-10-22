"use client";

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Layers, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  CheckCircle, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  ArrowUpRight,
  Cpu,
  Lock,
  ChevronDown,
  Sparkles,
  BarChart3,
  Code2,
  Terminal,
  Database,
  Smartphone,
  ExternalLink,
  Star,
  Check
} from 'lucide-react';

type Service = {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  features: string[];
  deliverables: string[];
};

export default function ZuticCorporateWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  // Posição suave do glow seguindo o cursor nas seções
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  // Lista de imagens de parceiros para o carrossel infinito
  const partnerLogos = [
    { name: "Partner 1", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80" },
    { name: "Partner 2", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80" },
    { name: "Partner 3", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80" },
    { name: "Partner 4", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80" },
    { name: "Partner 5", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80" },
    { name: "Partner 6", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80" },
  ];

  const services = [
    {
      id: "software",
      title: "Desenvolvimento de Software à Medida",
      tagline: "Sistemas Web, ERPs e Aplicações Nativas",
      desc: "Criamos produtos digitais de alta performance com arquitetura moderna (Next.js, Node.js, Cloud Native) desenhados sob medida para o seu ecossistema de negócio.",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      features: [
        "Aplicações Web Progressivas (PWA) e Portais Corporativos",
        "Sistemas ERP/CRM integrados com AGT e Multicaixa Express",
        "APIs RESTful e GraphQL escaláveis com microserviços",
        "Design de Interface (UI/UX) focado em conversão e usabilidade"
      ],
      deliverables: ["Prototipagem & Validação", "Desenvolvimento Agile", "Testes de Carga & QA", "Publicação em Nuvem"]
    },
    {
      id: "mobile",
      title: "Aplicações Móveis (iOS & Android)",
      tagline: "Experiências Nativas e Híbridas de Elevada Fluidez",
      desc: "Desenvolvemos apps móveis intuitivas com desempenho nativo, geolocalização, notificações push, autenticação biométrica e integração com carteiras digitais.",
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      features: [
        "Desenvolvimento nativo (Swift / Kotlin) e híbrido (React Native)",
        "Integração com gateways de pagamento locais e internacionais",
        "Segurança reforçada com criptografia ponta a ponta",
        "Publicação e otimização ASO nas lojas App Store e Google Play"
      ],
      deliverables: ["UI/UX Mobile First", "Desenvolvimento da App", "Aprovação nas Lojas", "Suporte Contínuo"]
    },
    {
      id: "consultoria",
      title: "Consultoria & Arquitetura de TI",
      tagline: "Estratégia Tecnológica para Escala Sustentável",
      desc: "Analisamos e otimizamos a infraestrutura tecnológica da sua empresa para garantir máxima eficiência operacional, redução de custos e prontidão para o futuro.",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      features: [
        "Auditoria de código e diagnóstico de dívida técnica",
        "Desenho de arquiteturas resilientes e tolerantes a falhas",
        "Migração segura para infraestruturas Cloud (AWS, Azure)",
        "Planos de continuidade de negócio e recuperação de desastres"
      ],
      deliverables: ["Relatório de Diagnóstico", "Blueprints de Arquitetura", "Roteiro de Implementação"]
    },
    {
      id: "automacao",
      title: "Automação de Processos (RPA)",
      tagline: "Eliminação de Tarefas Repetitivas e Manualidade",
      desc: "Implementamos bots e rotinas inteligentes para automatizar fluxos operacionais, reduzindo tempo de execução e eliminando erros humanos.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      features: [
        "Automação de reconciliação financeira e faturação",
        "Sincronização contínua de dados entre sistemas legados",
        "Chatbots inteligentes para atendimento ao cliente no WhatsApp",
        "Processamento automático de documentos e OCR"
      ],
      deliverables: ["Mapeamento de Processos", "Desenvolvimento dos Bots", "Treinamento de Equipa"]
    },
    {
      id: "seguranca",
      title: "Cibersegurança & Conformidade",
      tagline: "Proteção de Dados e Resiliência Operacional",
      desc: "Blindamos a sua infraestrutura com testes de penetração, conformidade com RGPD/LPDD local e encriptação avançada para mitigar riscos corporativos.",
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      features: [
        "Testes de Invasão (PenTesting) em sistemas e redes",
        "Implementação de políticas de Zero Trust e Gestão de Acessos",
        "Monitorização proativa de ameaças em tempo real",
        "Conformidade com os padrões regulatórios do BNA e AGT"
      ],
      deliverables: ["Relatório de Vulnerabilidades", "Mitigação de Riscos", "Certificação de Segurança"]
    },
    {
      id: "cloud",
      title: "Infraestrutura Cloud & DevOps",
      tagline: "Automação de Pipelines e Gestão de Servidores",
      desc: "Configuramos servidores, esteiras CI/CD e monitorização contínua para garantir que os seus sistemas fiquem online 24/7 com disponibilidade máxima.",
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      features: [
        "Deploy automatizado com Docker e Kubernetes",
        "Configuração de Nginx, PHP-FPM, PostgreSQL e Redis",
        "Sistemas de Alerta e Telemetria em Tempo Real (Grafana)",
        "Otimização de custos de infraestrutura em nuvem"
      ],
      deliverables: ["Ambientes Staging/Production", "Pipelines CI/CD", "Documentação do Servidor"]
    }
  ];

  const portfolioCases = [
    {
      tag: "ERP • LOGÍSTICA • LUANDA",
      title: "Kwanza Logistics OS",
      desc: "Plataforma integrada de gestão logística para operador em Luanda com automação fiscal AGT e controlo multi-armazém.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      stats: "+45% Eficiência Operacional"
    },
    {
      tag: "MOBILE • FINTECH • ANGOLA",
      title: "Kamba Pay",
      desc: "Aplicação de pagamentos digitais em Kwanzas com integração Multicaixa Express e verificação KYC em conformidade com BNA.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      stats: "200k+ Transações/mês"
    },
    {
      tag: "WEB • SAAS • BENGUELA",
      title: "AgroTrade Hub",
      desc: "Mercado digital agrícola que conecta produtores regionais a grandes redes de distribuição com carteira integrada.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      stats: "12+ Províncias Atendidas"
    },
    {
      tag: "AUTOMAÇÃO • SAÚDE • LUANDA",
      title: "LIMS Labos OS",
      desc: "Sistema de triagem e gestão laboratorial com agendamento online, notificações em tempo real e relatórios automatizados.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      stats: "Redução de 60% na Espera"
    }
  ];

  const whyChooseUs = [
    {
      title: "Redução de Custos",
      desc: "Automatizamos processos manuais e reduzimos despesas operacionais em até 60% através de software eficiente.",
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Impulso na Produtividade",
      desc: "Equipas até 3 vezes mais ágeis com sistemas centralizados e fluxos de trabalho desobstruídos.",
      icon: <Zap className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Escalabilidade Real",
      desc: "Arquiteturas cloud-native prontas para crescer em volume de utilizadores e dados sem perda de velocidade.",
      icon: <Globe className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Soluções 100% Personalizadas",
      desc: "Sem modelos genéricos: cada sistema é projetado do zero para responder ao contexto do seu negócio.",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Segurança de Nível Corporativo",
      desc: "Normas de proteção de dados, encriptação ponta a ponta e auditorias contínuas contra vulnerabilidades.",
      icon: <Lock className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Suporte Técnico Dedicado",
      desc: "Squad técnico qualificado com acordos de nível de serviço (SLA) e canal direto via WhatsApp/Telefone.",
      icon: <Phone className="w-5 h-5 text-cyan-400" />
    }
  ];

  const faqs = [
    {
      q: "Como funciona o processo de início de um projeto com a ZUTIC?",
      a: "Começamos por uma reunião de alinhamento para compreender as suas necessidades de negócio. Em seguida, elaboramos uma proposta técnica e comercial detalhada com prazos e entregáveis bem definidos."
    },
    {
      q: "A ZUTIC oferece suporte após o lançamento do projeto?",
      a: "Sim. Todos os nossos projetos incluem um período de garantia de bugs e a opção de planos de manutenção preventiva, suporte contínuo e evolução do software."
    },
    {
      q: "As soluções desenvolvidas são integradas com sistemas locais de Angola?",
      a: "Com certeza. Desenvolvemos integrações nativas com o sistema de faturação certificado da AGT, gateway do Multicaixa Express e APIs bancárias locais."
    },
    {
      q: "Quanto tempo demora o desenvolvimento de um MVP?",
      a: "A versão mínima funcional (MVP) é desenhada para rápida entrada no mercado, variando habitualmente entre 4 a 8 semanas, consoante a complexidade das funcionalidades."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden relative">
      
      {/* ESTILO DA ANIMAÇÃO INFINITA DO CARROSSEL */}
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infiniteScroll 25s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* GLOWS EM MOVIMENTAÇÃO / AMBIENTES DINÂMICOS */}
      <div 
        className="pointer-events-none fixed -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[140px] transition-transform duration-1000 ease-out z-0"
        style={{
          transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`
        }}
      />
      <div 
        className="pointer-events-none fixed top-1/2 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-blue-600/15 via-cyan-400/10 to-transparent rounded-full blur-[160px] transition-transform duration-1000 ease-out z-0"
        style={{
          transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`
        }}
      />

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-[#0b0f19] text-cyan-400 font-black text-xl px-3.5 py-1.5 rounded-lg border border-cyan-500/30 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                ZUTIC
              </div>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400/80 border-l border-cyan-900/50 pl-3">
              TECNOLOGIA & INOVAÇÃO
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-xs tracking-wider uppercase text-slate-300">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#parceiros" className="hover:text-cyan-400 transition-colors">Parceiros</a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portefólio</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
            <a href="#contactos" className="hover:text-cyan-400 transition-colors">Contactos</a>
          </nav>

          {/* CTA & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-[#0d121f] border border-cyan-900/40 rounded-full p-1 text-xs font-semibold">
              <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">PT</span>
              <span className="px-2.5 py-1 text-slate-400 hover:text-slate-200 cursor-pointer">EN</span>
            </div>
            <a 
              href="#contactos" 
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0b0f19] rounded-[10px] group-hover:bg-opacity-0">
                Solicitar Proposta
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0d121f] text-cyan-400 border border-cyan-900/40"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b0f19] border-b border-cyan-900/40 px-6 pt-4 pb-8 space-y-4">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium hover:text-cyan-400">Início</a>
            <a href="#parceiros" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium hover:text-cyan-400">Parceiros</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium hover:text-cyan-400">Serviços</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium hover:text-cyan-400">Sobre</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium hover:text-cyan-400">Portefólio</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium hover:text-cyan-400">FAQ</a>
            <a href="#contactos" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium hover:text-cyan-400">Contactos</a>
            <a 
              href="#contactos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3 rounded-xl mt-4"
            >
              Pedir Orçamento
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-28 pb-32 overflow-hidden z-10">
        
        {/* Glow Central Intenso no Fundo do Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Engenharia de Software & Sistemas Inteligentes
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
            Transformamos ideias em <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">sistemas inteligentes.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Desenvolvemos software corporativo à medida, aplicações móveis de elevado desempenho e arquiteturas cloud preparadas para escalar o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contactos" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Falar com a Equipa <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0d121f] border border-cyan-900/50 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm transition-all"
            >
              Ver Casos de Sucesso
            </a>
          </div>

        </div>
      </section>

      {/* CARROSSEL INFINITO DE IMAGENS DOS PARCEIROS */}
      <section id="parceiros" className="py-12 border-y border-cyan-900/30 bg-[#0b0f19]/60 backdrop-blur-md relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-500/70">
            NOSSOS PARCEIROS ESTRATÉGICOS
          </p>
        </div>

        {/* Máscara de degradê nas bordas para suavizar a entrada/saída do carrossel */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="animate-infinite-scroll flex items-center gap-12 sm:gap-16 py-2">
            
            {/* Primeira reprodução da lista de parceiros */}
            {partnerLogos.map((p, idx) => (
              <div 
                key={`p1-${idx}`} 
                className="flex-shrink-0 w-36 h-20 bg-[#07090e] border border-cyan-900/30 rounded-2xl p-3 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-cyan-500/50 transition-all cursor-pointer group shadow-lg"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}

            {/* Duplicação exata da lista para efeito contínuo sem emendas */}
            {partnerLogos.map((p, idx) => (
              <div 
                key={`p2-${idx}`} 
                className="flex-shrink-0 w-36 h-20 bg-[#07090e] border border-cyan-900/30 rounded-2xl p-3 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-cyan-500/50 transition-all cursor-pointer group shadow-lg"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SEÇÃO WHY ZUTIC */}
      <section className="py-24 relative z-10">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">PORQUÊ A ZUTIC</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Resultados Mensuráveis.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Crescimento Exponencial.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cyan-900/30 rounded-3xl overflow-hidden border border-cyan-900/40 shadow-2xl">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b0f19] p-8 hover:bg-[#0f1524] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-100 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS & SOLUÇÕES */}
      <section id="servicos" className="py-24 bg-[#0b0f19]/40 border-y border-cyan-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">O QUE FAZEMOS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Soluções Digitais <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">End-to-End.</span>
            </h2>
            <p className="text-slate-400 text-base">
              Do conceito inicial à implementação em produção, cobrimos todo o ciclo de vida de desenvolvimento do seu software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div 
                key={s.id}
                onClick={() => setSelectedService(s)}
                className="bg-[#0b0f19] border border-cyan-900/40 hover:border-cyan-500/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-500/20 transition-all"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{s.title}</h3>
                  <p className="text-xs text-cyan-400/80 font-medium mb-4">{s.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Ver Detalhes do Serviço</span> <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL DETALHADO DE SERVIÇO */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#0b0f19] border border-cyan-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95">
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-500/30 mb-4">
              SOBRE ESTE SERVIÇO
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">{selectedService.title}</h3>
            <p className="text-cyan-400 text-sm font-semibold mb-6">{selectedService.tagline}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">{selectedService.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#07090e] p-5 rounded-2xl border border-cyan-900/40">
                <h4 className="font-bold text-sm text-slate-100 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" /> O que está incluído
                </h4>
                <ul className="space-y-3">
                  {selectedService.features.map((f, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#07090e] p-5 rounded-2xl border border-cyan-900/40">
                <h4 className="font-bold text-sm text-slate-100 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" /> Entregáveis
                </h4>
                <div className="space-y-3">
                  {selectedService.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 text-[10px] font-bold flex items-center justify-center border border-cyan-500/30">
                        {i + 1}
                      </span>
                      <span className="text-xs text-slate-300">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-cyan-900/30">
              <a 
                href="#contactos" 
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs text-center"
              >
                Solicitar Proposta para este Serviço
              </a>
              <button 
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0d121f] text-slate-300 text-xs font-semibold hover:bg-slate-800"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* PORTEFÓLIO */}
      <section id="portfolio" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">PORTEFÓLIO</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Projetos que <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">falam por nós.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
              Uma seleção de soluções desenvolvidas para empresas que procuram excelência técnica e impacto real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioCases.map((c, idx) => (
              <div 
                key={idx}
                className="bg-[#0b0f19] border border-cyan-900/40 rounded-3xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-bold border border-cyan-500/30 uppercase tracking-wider">
                    {c.tag}
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 text-xs font-black">
                    {c.stats}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors">{c.title}</h3>
                    <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#0b0f19] via-[#0f172a] to-[#0b0f19] border border-cyan-500/40 rounded-3xl p-8 sm:p-14 overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-4xl font-extrabold mb-4">
                  Pronto para escalar com tecnologia que entrega resultados?
                </h3>
                <p className="text-slate-400 text-sm">
                  Agende uma consulta técnica gratuita com a nossa equipa de arquitetos de software.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a 
                  href="#contactos" 
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all text-center"
                >
                  Falar Connosco Agora
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-[#0b0f19]/40 border-t border-cyan-900/30 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">PERGUNTAS FREQUENTES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Tire as suas dúvidas.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#0b0f19] border border-cyan-900/40 rounded-2xl overflow-hidden transition-colors"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-base text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-cyan-900/20 pt-4 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACTOS & FORMULÁRIO */}
      <section id="contactos" className="py-24 relative z-10">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">CONTACTO DIRETO</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
                Vamos falar sobre o seu <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">próximo projeto.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Estamos prontos para analisar o seu desafio e desenhar a arquitetura técnica ideal para o crescimento da sua empresa.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0b0f19] border border-cyan-900/40">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-semibold">Telefone / WhatsApp</div>
                    <div className="text-sm font-bold text-slate-200">+244 900 000 000</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0b0f19] border border-cyan-900/40">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-semibold">Correio Eletrónico</div>
                    <div className="text-sm font-bold text-slate-200">geral@zutic.co.ao</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0b0f19] border border-cyan-900/40">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-semibold">Escritório Principal</div>
                    <div className="text-sm font-bold text-slate-200">Luanda, Angola</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="bg-[#0b0f19] border border-cyan-900/40 p-8 sm:p-10 rounded-3xl relative shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Enviar Mensagem</h3>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 text-center animate-in fade-in">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-cyan-400" />
                  <div className="font-bold text-lg">Mensagem enviada com sucesso!</div>
                  <div className="text-xs text-slate-400 mt-1">A nossa equipa técnica entrará em contacto no prazo máximo de 24 horas.</div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nome Completo</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-cyan-900/40 focus:border-cyan-500 focus:outline-none text-sm text-slate-100"
                        placeholder="Ex: João Silva"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Empresa</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-cyan-900/40 focus:border-cyan-500 focus:outline-none text-sm text-slate-100"
                        placeholder="Ex: Empresa Lda"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-cyan-900/40 focus:border-cyan-500 focus:outline-none text-sm text-slate-100"
                      placeholder="joao@empresa.co.ao"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Detalhes do Projeto</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-cyan-900/40 focus:border-cyan-500 focus:outline-none text-sm text-slate-100"
                      placeholder="Descreva brevemente os seus objetivos e prazos pretendidos..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    Enviar Pedido de Orçamento
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* WHATSAPP FLUTUANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/244900000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 bg-emerald-500 text-slate-950 rounded-full shadow-2xl hover:scale-110 transition-transform"
          aria-label="Atendimento via WhatsApp"
        >
          <span className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-70 group-hover:opacity-100 animate-pulse"></span>
          <MessageSquare className="w-7 h-7 relative z-10" />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="py-12 bg-[#05070a] border-t border-cyan-900/30 text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-cyan-500 text-slate-950 font-black text-sm px-2 py-0.5 rounded">ZUTIC</div>
                <span className="text-slate-300 font-bold">ZUTIC Angola</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Desenvolvimento de sistemas corporativos, software à medida e consultoria de transformação tecnológica.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-300 uppercase tracking-wider mb-4">Navegação</div>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a></li>
                <li><a href="#parceiros" className="hover:text-cyan-400 transition-colors">Parceiros</a></li>
                <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portefólio</a></li>
                <li><a href="#contactos" className="hover:text-cyan-400 transition-colors">Contactos</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-300 uppercase tracking-wider mb-4">Serviços</div>
              <ul className="space-y-2">
                <li>Software à Medida</li>
                <li>Apps iOS & Android</li>
                <li>Consultoria de TI</li>
                <li>Cibersegurança</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-300 uppercase tracking-wider mb-4">Localização</div>
              <p className="text-slate-400 mb-2">Luanda, Angola</p>
              <p className="text-slate-400">Atendimento presencial mediante agendamento prévio.</p>
            </div>

          </div>

          <div className="pt-8 border-t border-cyan-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 ZUTIC. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#inicio" className="hover:text-cyan-400 transition-colors">Termos de Serviço</a>
              <a href="#inicio" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
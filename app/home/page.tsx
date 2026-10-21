'use client';

import React, { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import CookiePolicyModal from '../_components/cookie-policy-modal';
import { 
  MessageSquare, 
  ChevronRight, 
  Shield, 
  Code, 
  Cpu, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Globe,
  Smartphone,
  Send,
  Zap
} from 'lucide-react';

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
};

// --- ZUTIC Logo Component (Exact SVG Vector Replica) ---
const ZuticLogo = ({ size = "normal", variant = "default" }) => {
  const isLight = variant === "light";
  
  const textColor = isLight ? "text-white" : "text-[#1E2838]";
  const sloganColor = isLight ? "text-slate-300" : "text-[#222D3D]/80";
  
  if (size === "small") {
    return (
      <div className="flex items-center gap-3">
        {/* SVG Speech Bubble Logo Icon */}
        <div className="relative w-10 h-10 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <path
              d="M 50 10 C 26 10 7 28 7 50 C 7 64 14 76 25 83 L 12 92 C 10 94 12 97 15 96 L 36 89 C 40 90 45 90 50 90 C 74 90 93 72 93 50 C 93 28 74 10 50 10 Z"
              fill={isLight ? "#FFFFFF" : "#1E2838"}
            />
            {/* Serif 'Z' */}
            <text
              x="50"
              y="63"
              fontFamily="Georgia, serif"
              fontSize="46"
              fontWeight="bold"
              fill={isLight ? "#1E2838" : "#FFFFFF"}
              textAnchor="middle"
            >
              Z
            </text>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className={`text-xl font-bold tracking-wider leading-none ${textColor}`}>
            ZUTIC
          </span>
          <span className={`text-[8px] font-semibold tracking-widest uppercase mt-1 ${sloganColor}`}>
            Tecnologia e Inovação
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <path
            d="M 50 10 C 26 10 7 28 7 50 C 7 64 14 76 25 83 L 12 92 C 10 94 12 97 15 96 L 36 89 C 40 90 45 90 50 90 C 74 90 93 72 93 50 C 93 28 74 10 50 10 Z"
            fill={isLight ? "#FFFFFF" : "#1E2838"}
          />
          <text
            x="50"
            y="64"
            fontFamily="Georgia, serif"
            fontSize="48"
            fontWeight="bold"
            fill={isLight ? "#1E2838" : "#FFFFFF"}
            textAnchor="middle"
          >
            Z
          </text>
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <span className={`text-2xl md:text-3xl font-extrabold tracking-wider leading-none ${textColor}`}>
          ZUTIC
        </span>
        <span className={`text-[9px] md:text-[11px] font-semibold tracking-[0.2em] uppercase mt-1.5 ${sloganColor}`}>
          TECNOLOGIA E INOVAÇÃO AO SEU ALCANCE
        </span>
      </div>
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activePortfolioCategory, setActivePortfolioCategory] = useState('todos');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'desenvolvimento-site',
    message: '',
  });
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const whatsappNumber = "244923000000"; // Número institucional padronizado para Angola
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20ZUTIC!`;

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  // Serviços tecnológicos da ZUTIC
  const services: Service[] = [
    {
      id: 'consultoria-informatica',
      icon: Cpu,
      title: 'Consultoria Informática',
      shortDesc: 'Orientação especializada para escolher e utilizar soluções tecnológicas alinhadas às necessidades do seu negócio.',
      fullDesc: 'Apoiamos a sua empresa na avaliação de necessidades, escolha de tecnologias e planeamento de soluções informáticas que melhorem os processos e a produtividade.',
      features: ['Diagnóstico das necessidades tecnológicas', 'Recomendação de soluções informáticas', 'Planeamento de projetos de TI', 'Acompanhamento na implementação']
    },
    {
      id: 'desenvolvimento-aplicativos',
      icon: Smartphone,
      title: 'Desenvolvimento de Aplicativos',
      shortDesc: 'Aplicativos desenvolvidos à medida para aproximar a sua empresa dos clientes e facilitar o dia a dia.',
      fullDesc: 'Desenvolvemos aplicativos intuitivos e funcionais, adaptados aos objetivos da sua empresa e às necessidades de quem os utiliza.',
      features: ['Aplicativos para iOS e Android', 'Interfaces simples e intuitivas', 'Funcionalidades à medida', 'Manutenção e evolução do aplicativo']
    },
    {
      id: 'desenvolvimento-site',
      icon: Globe,
      title: 'Desenvolvimento de Site',
      shortDesc: 'Sites modernos e responsivos para apresentar a sua empresa e os seus serviços na internet.',
      fullDesc: 'Criamos sites profissionais, adaptados a computadores e dispositivos móveis, para reforçar a presença digital e facilitar o contacto com os seus clientes.',
      features: ['Sites institucionais e empresariais', 'Adaptação a telemóveis e tablets', 'Apresentação de produtos e serviços', 'Formulários de contacto']
    },
    {
      id: 'desenvolvimento-sistemas-web',
      icon: Code,
      title: 'Desenvolvimento de Sistemas Web',
      shortDesc: 'Sistemas acessíveis pela internet para gerir operações, informações e processos do seu negócio.',
      fullDesc: 'Desenvolvemos sistemas web personalizados para simplificar processos e centralizar a gestão do seu negócio, com acesso através do navegador.',
      features: ['Sistemas de gestão à medida', 'Automatização de tarefas e processos', 'Acesso seguro através do navegador', 'Integração com ferramentas existentes']
    }
  ];

  // Cases de Sucesso / Portfólio
  const portfolioProjects = [
    {
      title: 'Portal Corporativo Bancário',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      description: 'Reformulação completa do portal e intranet corporativa com autenticação de dois fatores.'
    },
    {
      title: 'Infraestrutura de Rede e Cloud',
      category: 'infra',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      description: 'Implementação de servidor redundante e cabeamento para mais de 150 estações de trabalho.'
    },
    {
      title: 'Sistema de Gestão Logística',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      description: 'Software personalizado para controlo de frota e rastreamento em tempo real.'
    },
    {
      title: 'Auditoria e Firewall Corporativo',
      category: 'sec',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      description: 'Implementação de arquitetura Zero Trust e proteção contra ataques DDoS.'
    }
  ];

  const filteredProjects = activePortfolioCategory === 'todos' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activePortfolioCategory);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: 'web', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#1E2838] selection:text-white">
      
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* ZUTIC Official Logo */}
            <a href="#" className="flex items-center focus:outline-none group">
              <ZuticLogo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-sm font-semibold text-slate-700 hover:text-[#1E2838] transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-sm font-semibold text-slate-700 hover:text-[#1E2838] transition-colors">
                Sobre Nós
              </a>
              <a href="#servicos" className="text-sm font-semibold text-slate-700 hover:text-[#1E2838] transition-colors">
                Serviços
              </a>
              <a href="#portfolio" className="text-sm font-semibold text-slate-700 hover:text-[#1E2838] transition-colors">
                Portfólio
              </a>
              <a href="#contactos" className="text-sm font-semibold text-slate-700 hover:text-[#1E2838] transition-colors">
                Contactos
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1E2838] text-white font-medium text-sm hover:bg-[#2A384C] transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#1E2838] focus:ring-offset-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Abrir Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Portfólio
            </a>
            <a
              href="#contactos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contactos
            </a>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#1E2838] text-white font-medium text-sm hover:bg-[#2A384C]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Contacto Direto WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#1E2838] via-[#222D3D] to-[#171F2C] text-white py-20 lg:py-40">
        {/* Abstract Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Soft Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-200 uppercase">
                  Excelência em Soluções Tecnológicas
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Tecnologia e Inovação <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
                  ao seu alcance.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Transformamos desafios complexos de TI em vantagens competitivas para a sua empresa. Soluções completas em infraestrutura, desenvolvimento de software, consultoria e segurança da informação em Angola.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contactos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#1E2838] font-bold text-sm hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl group"
                >
                  <span>Solicitar Proposta</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#servicos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
                >
                  <span>Explorar Serviços</span>
                </a>
              </div>

              {/* Badges / Metrics */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">99.8%</p>
                  <p className="text-xs text-slate-400 font-medium">Disponibilidade / SLA</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">+100</p>
                  <p className="text-xs text-slate-400 font-medium">Projetos Concluídos</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">24/7</p>
                  <p className="text-xs text-slate-400 font-medium">Suporte Especializado</p>
                </div>
              </div>

            </div>

            {/* Right Card Feature */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 sm:p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
                
                {/* Visual Icon Badge */}
                <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-white">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Parceiro Tecnológico Integrado
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Garantimos eficiência, proteção de dados e escalabilidade para a infraestrutura digital da sua empresa com suporte contínuo e equipa especializada.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Desenvolvimento à medida e integração</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Gestão proativa de redes e segurança</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Atendimento rápido e consultoria estratégica</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar com um Especialista</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SOBRE NÓS --- */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1E2838] mb-2">
              Quem Somos
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Inovação, Credibilidade e Foco em Resultados
            </p>
            <div className="w-16 h-1 bg-[#1E2838] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="space-y-6 text-slate-600 leading-relaxed text-base">
              <p>
                A <strong className="text-slate-900 font-semibold">ZUTIC</strong> nasceu com a missão clara de aproximar as mais avançadas tecnologias corporativas do setor empresarial em Angola.
              </p>
              <p>
                Acreditamos que a tecnologia deve ser um acelerador do crescimento do seu negócio — intuitiva, segura e financeiramente viável. Trabalhamos lado a lado com pequenas, médias e grandes empresas para entregar soluções que simplificam processos e garantem alta disponibilidade.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-[#1E2838]" />
                    <h4 className="font-bold text-slate-900 text-sm">Qualidade Técnica</h4>
                  </div>
                  <p className="text-xs text-slate-500">Engenheiros e especialistas em TI devidamente certificados.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-[#1E2838]" />
                    <h4 className="font-bold text-slate-900 text-sm">Visão Global</h4>
                  </div>
                  <p className="text-xs text-slate-500">Práticas e padrões internacionais adaptados à realidade local.</p>
                </div>
              </div>
            </div>

            {/* Right Cards: Missão, Visão e Valores */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#1E2838] text-white shadow-lg">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  Nossa Missão
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Proporcionar inovação tecnológica acessível e eficiente, capacitando empresas a alcançarem a máxima produtividade com segurança e confiabilidade.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800">
                <h3 className="text-lg font-bold mb-2 text-[#1E2838] flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#1E2838]" />
                  Nossa Visão
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ser reconhecida como a referência nacional na entrega de serviços de tecnologia, transformação digital e infraestrutura de TI em Angola.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold mb-2 text-[#1E2838] flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#1E2838]" />
                  Nossos Valores
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Transparência, inovação contínua, ética no tratamento de dados e compromisso incondicional com a satisfação do cliente.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVIÇOS --- */}
      <section id="servicos" className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1E2838] mb-2">
              Os nossos serviços
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Serviços Especializados de TI
            </p>
            <p className="text-slate-600 mt-3 text-base">
              Consultoria e desenvolvimento digital adaptados às necessidades da sua empresa.
            </p>
            <div className="w-16 h-1 bg-[#1E2838] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-[#1E2838] text-[#1E2838] group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1E2838] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1E2838] hover:text-slate-600 transition-colors pt-4 border-t border-slate-100"
                  >
                    <span>Saber mais detalhes</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- PORTFÓLIO / CASES DE SUCESSO --- */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1E2838] mb-2">
              Cases de Sucesso
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Projetos Recentes
            </p>
            <div className="w-16 h-1 bg-[#1E2838] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'todos', label: 'Todos os Projetos' },
              { id: 'web', label: 'Web & Software' },
              { id: 'infra', label: 'Infraestrutura' },
              { id: 'sec', label: 'Segurança' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActivePortfolioCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activePortfolioCategory === cat.id
                    ? 'bg-[#1E2838] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 text-white shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- BANNER CTA INTERMEDIÁRIO --- */}
      <section className="bg-[#1E2838] text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Precisa de um diagnóstico de TI para a sua empresa?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                A nossa equipa realiza uma avaliação completa das suas necessidades de software, infraestrutura e segurança sem compromisso.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl flex-shrink-0"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Solicitar Diagnóstico no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTACTOS --- */}
      <section id="contactos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1E2838] mb-2">
              Fale Connosco
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Entre em Contacto Direto
            </p>
            <p className="text-slate-600 mt-2 text-sm">
              Estamos disponíveis para agendar uma reunião presencial ou responder às suas dúvidas.
            </p>
            <div className="w-16 h-1 bg-[#1E2838] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1E2838] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Telefone & WhatsApp</h4>
                  <p className="text-slate-600 text-sm mt-1">+244 923 000 000</p>
                  <p className="text-slate-600 text-sm">+244 222 000 000</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1E2838] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">E-mail Corporativo</h4>
                  <p className="text-slate-600 text-sm mt-1">geral@zutic.co.ao</p>
                  <p className="text-slate-600 text-sm">comercial@zutic.co.ao</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1E2838] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Localização</h4>
                  <p className="text-slate-600 text-sm mt-1">Luanda, Angola</p>
                  <p className="text-slate-500 text-xs mt-1">Atendimento em todo o território nacional.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1E2838] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Horário de Funcionamento</h4>
                  <p className="text-slate-600 text-sm mt-1">Segunda a Sexta: 08:00 - 17:00</p>
                  <p className="text-slate-500 text-xs">Suporte crítico 24/7 para clientes sob contrato.</p>
                </div>
              </div>

            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Envie uma Mensagem
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-sm text-emerald-700">
                    Obrigado por contactar a ZUTIC. A nossa equipa entrará em contacto em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: João Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E2838] focus:border-[#1E2838] outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu.email@empresa.co.ao"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E2838] focus:border-[#1E2838] outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+244 9XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E2838] focus:border-[#1E2838] outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E2838] focus:border-[#1E2838] outline-none text-sm transition-all bg-white"
                      >
                        <option value="consultoria-informatica">Consultoria Informática</option>
                        <option value="desenvolvimento-aplicativos">Desenvolvimento de Aplicativos</option>
                        <option value="desenvolvimento-site">Desenvolvimento de Site</option>
                        <option value="desenvolvimento-sistemas-web">Desenvolvimento de Sistemas Web</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Sua Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Descreva brevemente as necessidades da sua empresa..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E2838] focus:border-[#1E2838] outline-none text-sm transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#1E2838] text-white font-bold text-sm hover:bg-[#2A384C] transition-all shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* --- FOOTER CORPORATIVO --- */}
      <footer className="bg-[#171F2C] text-white pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand & Slogan */}
            <div className="lg:col-span-2 space-y-4">
              <ZuticLogo variant="light" />
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed pt-2">
                Empresa especializada no fornecimento de soluções de TI, infraestrutura, desenvolvimento de software e consultoria em Angola.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
                <li><a href="#contactos" className="hover:text-white transition-colors">Contactos</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                Soluções
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#servicos" className="hover:text-white transition-colors">Software & Web</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Infraestrutura</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Cibersegurança</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Consultoria TI</a></li>
              </ul>
            </div>

            {/* Column 4: Contact info */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                Contacto
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>Luanda, Angola</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>+244 923 000 000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>geral@zutic.co.ao</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {currentYear} ZUTIC. Todos os direitos reservados. TECNOLOGIA E INOVAÇÃO AO SEU ALCANCE.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
              <CookiePolicyModal className="hover:text-slate-300 transition-colors" />
            </div>
          </div>

        </div>
      </footer>

      {/* --- MODAL DE DETALHES DO SERVIÇO --- */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-[#1E2838] text-white flex items-center justify-center mb-4">
              {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {selectedService.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              O que inclui:
            </h4>

            <ul className="space-y-2 mb-8">
              {selectedService.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20${encodeURIComponent(selectedService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#1E2838] text-white font-bold text-sm hover:bg-[#2A384C] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Orçamento</span>
              </a>

              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- BOTÃO FLUTUANTE DE WHATSAPP --- */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-400 hover:scale-110 transition-all duration-300 group"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none font-medium">
          Falar no WhatsApp
        </span>
      </a>

    </div>
  );
}
'use client';

import React, { useEffect, useState } from 'react';
import { Building2, Code2, Target, Eye, Award, CheckCircle2, ArrowRight, Phone, Mail, MapPin, Clock, Send, Menu, X, MessageSquare, ChevronRight, Globe, Sparkles, TrendingUp,Check } from 'lucide-react';
import { useContactForm } from '../_hooks/use-contact-form';
import { useHomeNavigation } from '../_hooks/use-home-navigation';
import CookiePolicyModal from './cookie-policy-modal';
import { desktopNavigationLinks, footerNavigationLinks, homeProjects, homeServices, impactStats, mobileNavigationLinks, portfolioCategories, type PortfolioCategoryId, type Service,
} from '../_data/home-data';

export default function HomePage() {
  const { mobileMenuOpen, setMobileMenuOpen, activeTab, scrollToSection } = useHomeNavigation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState<PortfolioCategoryId>('todos');
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const {
    formSubmitted,
    setFormSubmitted,
    formData,
    setFormData,
    formLoading,
    handleSubmitForm,
  } = useContactForm();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const filteredProjects = selectedPortfolioCategory === 'todos' ? homeProjects
  : homeProjects.filter((project) => project.category === selectedPortfolioCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* 1. HEADER & NAVEGAÇÃO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo ZUTIC */}
          <a href="#inicio" onClick={() => scrollToSection('inicio')} className="flex items-center gap-3 group focus:outline-none">
            <img src="/logotipo.png" alt="Logo ZUTIC" className="w-45 h-12 transition-transform" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {desktopNavigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 relative py-1 ${
                  activeTab === link.id ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('contactos')}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 flex items-center gap-2 active:scale-95"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
            {mobileNavigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeTab === link.id 
                    ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' 
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('contactos')}
                className="w-full py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="pt-20">

        {/* 2. HERO SECTION */}
        <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
          {/* Background Decorative Gradients & Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Top Innovation Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-inner animate-pulse">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Transformação Digital & Tecnologia Sustentável</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-tight">
              Acelere o futuro da sua empresa com <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">soluções tecnológicas de alto impacto.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              A ZUTIC impulsiona negócios através da engenharia de software sob medida, consultoria especializada, segurança cibernética e ambientes de nuvem de alta performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => scrollToSection('contactos')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-base hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-3 active:scale-95"
              >
                <span>Solicitar Proposta</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all flex items-center justify-center gap-2 hover:text-white"
              >
                <span>Conhecer Serviços</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Impact Metrics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
              {impactStats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. SOBRE A ZUTIC */}
        <section id="sobre" className="py-24 bg-slate-900/50 relative border-t border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Sobre a ZUTIC</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Parceiro Tecnológico Estratégico para Inovação & Resultados
              </h3>
              <p className="text-slate-300 text-base sm:text-lg">
                Nascemos para transformar desafios complexos em soluções digitais simples, eficientes e de alto padrão técnico.
              </p>
            </div>

            {/* Story / Institutional Overview */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  Construindo a base da transformação digital do seu negócio
                </h4>
                <p>
                  A <strong className="text-cyan-400 font-semibold">ZUTIC</strong> atua na vanguarda da tecnologia da informação, combinando visão estratégica e competência técnica para entregar soluções que impulsionam a produtividade e a competitividade dos nossos parceiros.
                </p>
                <p>
                  Com foco em desenvolvimento de software, consultoria e gestão de infraestruturas modernas, o nosso compromisso é construir uma base sólida e escalável para que as empresas prosperem em mercados altamente dinâmicos.
                </p>
                
                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span className="text-sm font-medium text-slate-200">Equipe Técnica Altamente Qualificada</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span className="text-sm font-medium text-slate-200">Projetos Orientados a Resultados</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span className="text-sm font-medium text-slate-200">Metodologias Ágeis e Transparentes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span className="text-sm font-medium text-slate-200">Foco em Segurança de Dados</span>
                  </div>
                </div>
              </div>

              {/* Graphic/Visual Block */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-30 blur-lg" />
                <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                    <Building2 className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h5 className="font-bold text-white text-lg">Excelência Institucional</h5>
                      <p className="text-xs text-slate-400">Padrões Internacionais de Qualidade</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="text-cyan-400 font-bold text-sm mb-1">Qualidade & Agilidade</div>
                      <p className="text-xs text-slate-300">Desenvolvimento com ciclos curtos de entrega e constante validação de valor.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="text-cyan-400 font-bold text-sm mb-1">Sustentabilidade Tecnológica</div>
                      <p className="text-xs text-slate-300">Arquitetura modular preparada para crescer juntamente com as necessidades do cliente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission, Vision, Values Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Missão */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Missão</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Oferecer soluções de TI inovadoras e robustas que otimizem processos corporativos, elevando a eficiência e impulsionando a competitividade sustentável dos nossos clientes.
                </p>
              </div>

              {/* Visão */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Visão</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ser reconhecida como referência regional e global em engenharia de software e consultoria de TI pela excelência, ética profissional e alto valor transformador gerado.
                </p>
              </div>

              {/* Valores */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Valores</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />Inovação Contínua</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />Transparência & Integridade</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />Compromisso com o Cliente</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />Segurança & Qualidade Rígida</li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* 4. SERVIÇOS & SOLUÇÕES */}
        <section id="servicos" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Os nossos serviços</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Serviços & Soluções Tecnológicas Integradas
              </h3>
              <p className="text-slate-300 text-base sm:text-lg">
                Consultoria e desenvolvimento digital adaptados às necessidades da sua empresa.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="rounded-2xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h4>
                      
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.techs.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono">
                            {tech}
                          </span>
                        ))}
                        {service.techs.length > 3 && (
                          <span className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800 text-xs font-mono">
                            +{service.techs.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 font-medium text-sm transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Detalhes do Serviço</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SERVICE DETAILS MODAL */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  <span className="text-xs text-cyan-400 font-mono">Área de Atuação ZUTIC</span>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 text-sm">
                <p className="leading-relaxed">{selectedService.fullDesc}</p>

                <div>
                  <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    O que inclui esta solução:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base mb-3">Tecnologias & Ferramentas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techs.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-medium text-sm"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    scrollToSection('contactos');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
                >
                  <span>Solicitar Cotação</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* 5. PORTFÓLIO & PROJETOS DE REFERÊNCIA */}
        <section id="portfolio" className="py-24 bg-slate-900/30 border-t border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Casos de Sucesso</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Portfólio & Projetos de Referência
              </h3>
              <p className="text-slate-300 text-base sm:text-lg">
                Exemplos práticos de transformações digitais e engenharia de excelência.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedPortfolioCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    selectedPortfolioCategory === cat.id 
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20' 
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
                >
                  <div
                    role="img"
                    aria-label={project.image?.alt ?? `Imagem do projeto: ${project.title}`}
                    className={`relative h-52 overflow-hidden border-b border-slate-800 ${
                      project.image
                        ? 'bg-cover bg-center'
                        : project.category === 'cloud'
                          ? 'bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950'
                          : project.category === 'seguranca'
                            ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950'
                            : 'bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950'
                    }`}
                    style={project.image ? { backgroundImage: `url("${project.image.src}")` } : undefined}
                  >
                    {!project.image && (
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                        Imagem do projeto
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <span className="absolute bottom-4 left-6 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="text-xs text-slate-400 font-mono">{project.client}</span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metric Highlight Badge */}
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 mb-6 flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Resultado Obtido</span>
                        <span className="text-sm font-bold text-white">{project.metrics}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        Ver projeto
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. CONTACTOS & FORMULÁRIO */}
        <section id="contactos" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Fale com a ZUTIC</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Inicie a Sua Jornada de Inovação Digital
              </h3>
              <p className="text-slate-300 text-base sm:text-lg">
                Estamos prontos para analisar as suas necessidades e desenhar a solução ideal para o seu negócio.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Institutional Contact Info */}
              <div className="lg:col-span-5 space-y-8">
                
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                  <h4 className="text-xl font-bold text-white mb-2">Canais de Atendimento</h4>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Telefone / Atendimento</span>
                      <a href="tel:+244900000000" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                        +244 923 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">E-mail Institucional</span>
                      <a href="mailto:contacto@zutic.co.ao" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                        contacto@zutic.co.ao
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Localização Principal</span>
                      <span className="text-sm font-semibold text-white">
                        Luanda, Angola — Edifício Corporativo de Tecnologia
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Horário de Funcionamento</span>
                      <span className="text-sm font-semibold text-white">
                        Segunda a Sexta: 08:00 - 18:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Map/Geographic Location Mockup */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Sede & Presença Digital
                    </span>
                    <span className="text-xs text-slate-400">Luanda / Global</span>
                  </div>
                  <div className="h-40 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="relative text-center z-10 p-4">
                      <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-bounce" />
                      <span className="text-xs text-slate-300 font-medium block">
                        Atendimento Presencial e Remoto
                      </span>
                      <span className="text-[10px] text-slate-400">Projetos em Angola & Internacional</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Interactive Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
                  
                  <h4 className="text-2xl font-bold text-white mb-2">Envie uma Mensagem</h4>
                  <p className="text-slate-400 text-sm mb-6">Preencha o formulário abaixo e receba um retorno em até 24h úteis.</p>

                  {formSubmitted ? (
                    <div className="p-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-4 animate-in zoom-in-95 duration-200">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h5 className="text-xl font-bold text-white">Mensagem Enviada com Sucesso!</h5>
                      <p className="text-slate-300 text-sm max-w-md mx-auto">
                        Obrigado pelo seu contacto. A equipe comercial da ZUTIC analisará a sua mensagem e entrará em contacto muito brevemente.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all"
                      >
                        Enviar Nova Mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitForm} className="space-y-4">
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Nome Completo *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            placeholder="Ex: João Silva"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            E-mail Corporativo *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="joao@empresa.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Telefone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formData.telefone}
                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                            placeholder="+244 9XX XXX XXX"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Assunto de Interesse *
                          </label>
                          <select
                            required
                            value={formData.assunto}
                            onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                          >
                            <option value="">Selecione uma opção</option>
                            <option value="consultoria-informatica">Consultoria Informática</option>
                            <option value="desenvolvimento-aplicativos">Desenvolvimento de Aplicativos</option>
                            <option value="desenvolvimento-site">Desenvolvimento de Site</option>
                            <option value="desenvolvimento-sistemas-web">Desenvolvimento de Sistemas Web</option>
                            <option value="outro">Outro Assunto</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Mensagem / Detalhes do Projeto *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.mensagem}
                          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                          placeholder="Descreva brevemente a necessidade da sua empresa..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {formLoading ? (
                          <span>Enviando mensagem...</span>
                        ) : (
                          <>
                            <span>Enviar Solicitação</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 6. INTEGRAÇÃO DE COMUNICAÇÃO & WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/244923000000?text=Olá,%20gostaria%20de%20obter%20mais%20informações%20sobre%20os%20serviços%20da%20ZUTIC."
        target="_blank" rel="noopener noreferrer" aria-label="Atendimento via WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 text-xs font-bold">
          Falar no WhatsApp
        </span>
      </a>

      {/* 8. FOOTER & SEO READY DETAILS */}
      <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1: ZUTIC Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xl font-black text-white font-mono">ZUTIC.</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empresa especializada em soluções tecnológicas corporativas, engenharia de software e infraestrutura em nuvem de alta confiabilidade.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h5 className="font-bold text-white text-sm mb-4">Navegação</h5>
              <ul className="space-y-2.5 text-xs">
                {footerNavigationLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)} 
                      className="hover:text-cyan-400 capitalize transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Legal & Governance */}
            <div>
              <h5 className="font-bold text-white text-sm mb-4">Legal & Conformidade</h5>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a></li>
                <li><CookiePolicyModal className="text-left transition-colors hover:text-cyan-400" /></li>
                <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Segurança da Informação</a></li>
                <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Proteção de Dados</a></li>
              </ul>
            </div>

            {/* Col 4: SEO Technical Status */}
            <div>
              <h5 className="font-bold text-white text-sm mb-4">SEO & Prontidão Técnica</h5>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Indexabilidade:</span>
                  <span className="text-emerald-400 font-mono">Index, Follow</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Protocolo:</span>
                  <span className="text-cyan-400 font-mono">HTTPS / SSL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Responsividade:</span>
                  <span className="text-cyan-400 font-mono">100% Mobile Ready</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {currentYear} ZUTIC - Soluções Tecnológicas. Todos os direitos reservados.</p>
            <p className="text-slate-400">Desenhado para Desempenho & Inovação Digital.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  BarChart3, 
  Code2, 
  Calendar, 
  MapPin, 
  Building, 
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Smartphone,
  Lock,
  ArrowUpRight,
  Phone,
  Mail
} from 'lucide-react';

export default function ProjectDetailView() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dados de exemplo do Projeto selecionado
  const project = {
    id: "kwanza-logistics-os",
    title: "Kwanza Logistics OS",
    client: "Operador Logístico de Angola",
    location: "Luanda, Angola",
    year: "2025 - 2026",
    category: "ERP & Gestão de Cadeia de Suprimentos",
    tag: "ERP • LOGÍSTICA • LUANDA",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    liveUrl: "#",
    stats: [
      { label: "Aumento na Eficiência Operacional", value: "+45%" },
      { label: "Tempo de Processamento de Encomendas", value: "-60%" },
      { label: "Disponibilidade do Sistema (SLA)", value: "99.98%" },
      { label: "Documentos Fiscais Autenticados na AGT", value: "100k+/mês" }
    ],
    overview: "O Kwanza Logistics OS é uma plataforma integrada de gestão logística e controlo multi-armazém desenhada especificamente para os desafios do mercado angolano. O sistema automatiza desde a triagem de mercadorias até à faturação certificada com comunicação direta à AGT.",
    challenge: "O cliente operava com processos manuais fragmentados entre três armazéns estratégicos em Luanda e no Lobito. A ausência de sincronização em tempo real causava atrasos na emissão de guias de transporte, erros no rastreamento de cargas e dificuldades na reconciliação de pagamentos com múltiplos métodos locais.",
    solution: "Desenvolvemos uma solução web e mobile baseada numa arquitetura cloud escalável (Next.js, Node.js e PostgreSQL). O sistema centraliza a operação com módulos de leitura de código de barras em tempo real, painel analítico de rotação de frota, portal de acompanhamento para clientes e integração nativa com o sistema de validação fiscal da AGT.",
    technologies: [
      { name: "Next.js 15", category: "Frontend Web" },
      { name: "React Native", category: "App Mobile (Android/iOS)" },
      { name: "Node.js (TypeScript)", category: "Backend Microservices" },
      { name: "PostgreSQL & Redis", category: "Base de Dados & Cache" },
      { name: "Docker & AWS", category: "Infraestrutura Cloud" },
      { name: "API AGT Faturação", category: "Integração Fiscal" }
    ],
    keyFeatures: [
      "Controlo de inventário multi-armazém em tempo real com alertas de stock.",
      "Emissão automática de guias de transporte e faturas certificadas pela AGT.",
      "Rastreamento GPS de frotas e confirmação de entrega via App Mobile.",
      "Portal do Cliente para acompanhamento de cargas e pedidos de cotação.",
      "Relatórios financeiros e analíticos em tempo real com exportação para Excel e PDF."
    ],
    gallery: [
      { title: "Painel Principal do Operador", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
      { title: "Módulo de Leitura e Triagem Cargas", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80" },
      { title: "Aplicação Mobile para Motoristas", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" }
    ]
  };

  const relatedProjects = [
    {
      title: "Kamba Pay",
      category: "Fintech & Pagamentos",
      tag: "MOBILE • FINTECH • ANGOLA",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      stats: "200k+ Transações/mês"
    },
    {
      title: "AgroTrade Hub",
      category: "Marketplace Agrícola",
      tag: "WEB • SAAS • BENGUELA",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      stats: "12+ Províncias Atendidas"
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden relative">
      
      {/* GLOWS EM MOVIMENTAÇÃO */}
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
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-[#0b0f19] text-cyan-400 font-black text-xl px-3.5 py-1.5 rounded-lg border border-cyan-500/30 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                ZUTIC
              </div>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400/80 border-l border-cyan-900/50 pl-3">
              ESTUDO DE CASO
            </span>
          </a>

          <a 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d121f] border border-cyan-900/40 hover:border-cyan-500/50 text-cyan-400 font-semibold text-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao Portefólio
          </a>
        </div>
      </header>

      {/* HERO DO PROJETO */}
      <section className="pt-12 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold border border-cyan-500/30 uppercase tracking-wider">
              {project.tag}
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400 font-medium">{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight">
            {project.title}
          </h1>

          {/* Ficha Técnica Rápida */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0b0f19] border border-cyan-900/40 mb-12">
            <div>
              <div className="text-xs text-slate-500 uppercase font-semibold flex items-center gap-1.5 mb-1">
                <Building className="w-3.5 h-3.5 text-cyan-400" /> Cliente
              </div>
              <div className="text-sm font-bold text-slate-200">{project.client}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-semibold flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Localização
              </div>
              <div className="text-sm font-bold text-slate-200">{project.location}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-semibold flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Período
              </div>
              <div className="text-sm font-bold text-slate-200">{project.year}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-semibold flex items-center gap-1.5 mb-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" /> Estado
              </div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Em Produção
              </div>
            </div>
          </div>

          {/* Imagem Principal do Projeto */}
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-1000"></div>
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-[350px] sm:h-[500px] object-cover relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent z-10"></div>
          </div>

        </div>
      </section>

      {/* MÉTRICAS DE IMPACTO DO PROJETO */}
      <section className="py-12 border-y border-cyan-900/30 bg-[#0b0f19]/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stats.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#07090e] border border-cyan-900/30 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-2">{st.value}</div>
                <div className="text-xs text-slate-400 font-medium">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETALHES DO ESTUDO DE CASO */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Conteúdo Principal (2 Colunas) */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Visão Geral */}
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">RESUMO DO PROJETO</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Visão Geral da Solução</h2>
                <p className="text-slate-300 text-base leading-relaxed">{project.overview}</p>
              </div>

              {/* O Desafio & A Solução */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-[#0b0f19] border border-cyan-900/40">
                  <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">O Desafio</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
                </div>

                <div className="p-8 rounded-3xl bg-[#0b0f19] border border-cyan-500/30">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">A Solução ZUTIC</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Principais Funcionalidades */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Principais Funcionalidades Implementadas</h3>
                <div className="space-y-4">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-[#0b0f19] border border-cyan-900/30">
                      <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Galeria de Interface */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Capturas do Sistema</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.gallery.map((g, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedImage(g.image)}
                      className="group relative h-48 rounded-2xl overflow-hidden border border-cyan-900/40 cursor-pointer"
                    >
                      <img src={g.image} alt={g.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-slate-200">
                        {g.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Lateral (1 Coluna) */}
            <div className="space-y-8">
              
              {/* Pilha Tecnológica */}
              <div className="p-8 rounded-3xl bg-[#0b0f19] border border-cyan-900/40">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" /> Pilha Tecnológica
                </h3>
                <div className="space-y-4">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#07090e] border border-cyan-900/30">
                      <span className="text-sm font-bold text-slate-200">{tech.name}</span>
                      <span className="text-[10px] text-cyan-400 font-mono bg-cyan-950/80 px-2 py-1 rounded border border-cyan-500/20">
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card de CTA Direto */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0b0f19] to-[#0f172a] border border-cyan-500/40 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>
                <h3 className="text-xl font-bold mb-3">Precisa de uma solução semelhante?</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Podemos adaptar e construir um sistema à medida para os desafios específicos da sua organização.
                </p>
                <a 
                  href="/#contactos"
                  className="block w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                >
                  Solicitar Proposta Técnica
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* OUTROS PROJETOS RELACIONADOS */}
      <section className="py-20 bg-[#0b0f19]/40 border-t border-cyan-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] block mb-2">EXPLORAR MAIS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Outros Casos de Sucesso</h2>
            </div>
            <a href="/#portfolio" className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
              Ver Todos <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rp, idx) => (
              <div key={idx} className="bg-[#0b0f19] border border-cyan-900/40 rounded-3xl overflow-hidden group hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                <div className="relative h-52 overflow-hidden">
                  <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-[10px] font-bold border border-cyan-500/30 uppercase">
                    {rp.tag}
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">{rp.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{rp.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DE IMAGEM DA GALERIA */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-pointer"
        >
          <img src={selectedImage} alt="Captura ampliada" className="max-w-full max-h-[85vh] rounded-2xl border border-cyan-500/40 shadow-2xl" />
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-12 bg-[#05070a] border-t border-cyan-900/30 text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 ZUTIC. Todos os direitos reservados.</div>
          <a href="/#portfolio" className="text-cyan-400 hover:underline">Voltar aos Projetos</a>
        </div>
      </footer>

    </div>
  );
}
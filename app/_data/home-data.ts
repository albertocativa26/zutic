import type { LucideIcon } from 'lucide-react';
import { Code2, Cpu, Globe, Smartphone } from 'lucide-react';

export type HomeSectionId = 'inicio' | 'sobre' | 'servicos' | 'portfolio' | 'contactos';

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  techs: string[];
  features: string[];
};

export type ProjectCategory = 'software' | 'cloud' | 'seguranca';
export type PortfolioCategoryId = 'todos' | ProjectCategory;

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  description: string;
  image: {
    src: string;
    alt: string;
  } | null;
  projectUrl: string | null;
  tags: string[];
  metrics: string;
};

export type NavigationLink = {
  id: HomeSectionId;
  label: string;
};

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
};

export type ImpactStat = {
  number: string;
  label: string;
};

export const homeServices: Service[] = [
  {
    id: 'consultoria-informatica',
    icon: Cpu,
    title: 'Consultoria Informática',
    shortDesc: 'Orientação especializada para escolher e utilizar soluções tecnológicas alinhadas às necessidades do seu negócio.',
    fullDesc: 'Apoiamos a sua empresa na avaliação de necessidades, escolha de tecnologias e planeamento de soluções informáticas que melhorem os processos e a produtividade.',
    techs: ['Análise de necessidades', 'Planeamento de TI', 'Soluções tecnológicas'],
    features: [
      'Diagnóstico das necessidades tecnológicas',
      'Recomendação de soluções informáticas',
      'Planeamento de projetos de TI',
      'Acompanhamento na implementação',
    ],
  },
  {
    id: 'desenvolvimento-aplicativos',
    icon: Smartphone,
    title: 'Desenvolvimento de Aplicativos',
    shortDesc: 'Aplicativos desenvolvidos à medida para aproximar a sua empresa dos clientes e facilitar o dia a dia.',
    fullDesc: 'Desenvolvemos aplicativos intuitivos e funcionais, adaptados aos objetivos da sua empresa e às necessidades de quem os utiliza.',
    techs: ['Aplicativos móveis', 'iOS e Android', 'Experiência do utilizador'],
    features: [
      'Aplicativos para iOS e Android',
      'Interfaces simples e intuitivas',
      'Funcionalidades à medida',
      'Manutenção e evolução do aplicativo',
    ],
  },
  {
    id: 'desenvolvimento-site',
    icon: Globe,
    title: 'Desenvolvimento de Site',
    shortDesc: 'Sites modernos e responsivos para apresentar a sua empresa e os seus serviços na internet.',
    fullDesc: 'Criamos sites profissionais, adaptados a computadores e dispositivos móveis, para reforçar a presença digital e facilitar o contacto com os seus clientes.',
    techs: ['Sites responsivos', 'Design moderno', 'Presença digital'],
    features: [
      'Sites institucionais e empresariais',
      'Adaptação a telemóveis e tablets',
      'Apresentação de produtos e serviços',
      'Formulários de contacto',
    ],
  },
  {
    id: 'desenvolvimento-sistemas-web',
    icon: Code2,
    title: 'Desenvolvimento de Sistemas Web',
    shortDesc: 'Sistemas acessíveis pela internet para gerir operações, informações e processos do seu negócio.',
    fullDesc: 'Desenvolvemos sistemas web personalizados para simplificar processos e centralizar a gestão do seu negócio, com acesso através do navegador.',
    techs: ['Sistemas personalizados', 'Aplicações web', 'Gestão de processos'],
    features: [
      'Sistemas de gestão à medida',
      'Automatização de tarefas e processos',
      'Acesso seguro através do navegador',
      'Integração com ferramentas existentes',
    ],
  },
];

export const homeProjects: Project[] = [
  {
    id: 1,
    title: 'Plataforma Integrada de Gestão Logística',
    category: 'software',
    categoryLabel: 'Engenharia de Software',
    client: 'Grupo Logístico Regional',
    description: 'Sistema web centralizado para rastreamento de frotas em tempo real, roteamento otimizado e gestão de armazéns.',
    image: {
      src: '/logotipo.png',
      alt: 'Logotipo da ZUTIC',
    },
    projectUrl: null,
    tags: ['React', 'Node.js', 'PostgreSQL', 'Maps API'],
    metrics: '+35% Eficiência nas Entregas',
  },
  {
    id: 2,
    title: 'Migração Multicloud de Grande Escala',
    category: 'cloud',
    categoryLabel: 'Infraestrutura & Cloud',
    client: 'Instituição Financeira',
    description: 'Migração zero-downtime de infraestrutura legada para um ambiente multicloud seguro e resiliente com AWS e Azure.',
    image: null,
    projectUrl: null,
    tags: ['AWS', 'Kubernetes', 'Terraform', 'FinOps'],
    metrics: '40% Redução em Custos de Infra',
  },
  {
    id: 3,
    title: 'Portal do Cliente & App Mobile de Atendimento',
    category: 'software',
    categoryLabel: 'Desenvolvimento Mobile',
    client: 'Empresa de Serviços Públicos',
    description: 'Aplicação móvel intuitiva para autosserviço, emissão de faturas e solicitação de suporte técnico.',
    image: null,
    projectUrl: null,
    tags: ['React Native', 'Tailwind', 'Microservices'],
    metrics: '200k+ Downloads Ativos',
  },
  {
    id: 4,
    title: 'Auditoria & Blindagem de Segurança Digital',
    category: 'seguranca',
    categoryLabel: 'Segurança Cibernética',
    client: 'Rede de Saúde Privada',
    description: 'Implementação de protocolo de segurança de dados de pacientes, pentesting e arquitetura Zero Trust.',
    image: null,
    projectUrl: null,
    tags: ['Zero Trust', 'ISO 27001', 'LGPD', 'Pentest'],
    metrics: '100% Conformidade Obtida',
  },
];

export const desktopNavigationLinks: NavigationLink[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre a ZUTIC' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'contactos', label: 'Contactos' },
];

export const mobileNavigationLinks: NavigationLink[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre a ZUTIC' },
  { id: 'servicos', label: 'Serviços & Soluções' },
  { id: 'portfolio', label: 'Portfólio & Casos' },
  { id: 'contactos', label: 'Contactos' },
];

export const footerNavigationLinks: NavigationLink[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre a Empresa' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'contactos', label: 'Contactos' },
];

export const impactStats: ImpactStat[] = [
  { number: '99.9%', label: 'Disponibilidade de SLA' },
  { number: '+50', label: 'Projetos Concluídos' },
  { number: '24/7', label: 'Suporte Técnico Gerido' },
  { number: '100%', label: 'Segurança & Conformidade' },
];

export const portfolioCategories: PortfolioCategory[] = [
  { id: 'todos', label: 'Todos os Projetos' },
  { id: 'software', label: 'Engenharia de Software' },
  { id: 'cloud', label: 'Cloud & Infra' },
  { id: 'seguranca', label: 'Segurança' },
];

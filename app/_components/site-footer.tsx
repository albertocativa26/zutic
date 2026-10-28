import Link from "next/link";

const navigationLinks = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "processo", label: "Processo" },
  { id: "sobre", label: "Sobre" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "contactos", label: "Contactos" },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-cyan-900/30 bg-[#05070a] py-12 text-xs text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded bg-cyan-500 px-2 py-0.5 text-sm font-black text-slate-950">
                ZUTIC
              </span>
              <span className="font-bold text-slate-300">ZUTIC</span>
            </div>
            <p className="leading-relaxed">
              Desenvolvimento de sistemas corporativos, software à medida e consultoria de transformação tecnológica.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-bold uppercase tracking-wider text-slate-300">Navegação</h2>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={
                      link.id === "contactos"
                        ? "/contactos"
                        : link.id === "sobre"
                          ? "/sobre"
                          : link.id === "servicos"
                            ? "/servicos"
                            : link.id === "processo" || link.id === "faq"
                              ? `/#${link.id}`
                            : `/#${link.id}`
                    }
                    className="transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-bold uppercase tracking-wider text-slate-300">Serviços</h2>
            <ul className="space-y-2">
              <li>Software à Medida</li>
              <li>Apps iOS &amp; Android</li>
              <li>Consultoria de TI</li>
              <li>Cibersegurança</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-bold uppercase tracking-wider text-slate-300">Localização</h2>
            <p className="mb-2 text-slate-400">Luanda, Angola</p>
            <p className="text-slate-400">Atendimento presencial mediante agendamento prévio.</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cyan-900/20 pt-8 sm:flex-row">
          <p>© 2026 ZUTIC. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/#inicio" className="transition-colors hover:text-cyan-400">
              Termos de Serviço
            </Link>
            <Link href="/#inicio" className="transition-colors hover:text-cyan-400">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

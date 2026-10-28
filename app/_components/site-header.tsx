"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigationLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "A Zutic" },
  { id: "solucoes", label: "Soluções" },
  { id: "contactos", label: "Contactos" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
            <span className="relative flex items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-1.5 text-xl font-black text-blue-600">
              ZUTIC
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden flex-1 items-center justify-center gap-5 text-[11px] font-semibold uppercase tracking-wider text-slate-600 lg:flex xl:gap-7" >
          {navigationLinks.map((link) => (
            <Link
              key={link.id}
              href={
                link.id === "contactos"
                  ? "/contactos"
                  : link.id === "sobre"
                    ? "/sobre"
                    : link.id === "solucoes"
                      ? "/solucoes"
                      : link.id === "processo"
                        ? "/#processo"
                      : `/#${link.id}`
              }
              className="transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contactos" className="hidden shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-bold text-slate-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25 md:flex" >
          Fale connosco <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button type="button" onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-xl border border-blue-200 bg-blue-50 p-2 text-blue-600 md:hidden"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Navegação móvel" className="space-y-2 border-b border-slate-200 bg-white px-4 pb-6 pt-4 shadow-xl shadow-slate-900/10 md:hidden" >
          {navigationLinks.map((link) => (
            <Link key={link.id}
              href={
                link.id === "contactos"
                  ? "/contactos"
                  : link.id === "sobre"
                    ? "/sobre"
                    : link.id === "solucoes"
                      ? "/solucoes"
                      : link.id === "processo"
                        ? "/#processo"
                      : `/#${link.id}`
              }
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contactos"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-bold text-slate-950"
          >
            Pedir Orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}

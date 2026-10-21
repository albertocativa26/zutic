'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Cookie, X } from 'lucide-react';

type CookiePolicyModalProps = {
  className?: string;
};

type CookieConsent = 'accepted' | 'rejected';

const consentStorageKey = 'zutic-cookie-consent';
const consentChangeEvent = 'zutic-cookie-consent-change';

function getStoredConsent(): CookieConsent | null {
  const savedConsent = window.localStorage.getItem(consentStorageKey);
  return savedConsent === 'accepted' || savedConsent === 'rejected' ? savedConsent : null;
}

function subscribeToConsent(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(consentChangeEvent, onChange);

  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(consentChangeEvent, onChange);
  };
}

export default function CookiePolicyModal({ className }: CookiePolicyModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const consent = useSyncExternalStore(subscribeToConsent, getStoredConsent, () => null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocusedElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key !== 'Tab') return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus();
      }
    };
  }, [isOpen]);

  const saveConsent = (choice: CookieConsent) => {
    window.localStorage.setItem(consentStorageKey, choice);
    window.dispatchEvent(new Event(consentChangeEvent));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        Política de Cookies
      </button>

      {consent === null && (
        <aside
          aria-labelledby="cookie-consent-title"
          className="fixed bottom-4 left-4 z-[60] w-[calc(100vw-2rem)] max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-2xl sm:bottom-6 sm:left-6 sm:p-6"
        >
          <div className="mb-3 flex items-center gap-2">
            <Cookie className="h-5 w-5 text-[#1E2838]" aria-hidden="true" />
            <h2 id="cookie-consent-title" className="font-bold text-slate-900">
              Política de Cookies
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Utilizamos cookies necessários ao funcionamento do site. Pode aceitar ou rejeitar
            cookies opcionais. Saiba mais na nossa política de cookies.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="rounded-lg bg-[#1E2838] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1E2838] focus:ring-offset-2"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => saveConsent('rejected')}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1E2838] focus:ring-offset-2"
            >
              Rejeitar
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#1E2838] underline underline-offset-2 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1E2838]"
            >
              Ver política
            </button>
          </div>
        </aside>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-policy-title"
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-2xl sm:p-8"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar política de cookies"
              className="absolute right-4 top-4 rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E2838]"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 id="cookie-policy-title" className="mb-2 pr-10 text-2xl font-bold text-slate-900">
              Política de Cookies
            </h2>
            <p className="mb-6 text-sm text-slate-500">
              Esta política explica como os cookies podem ser utilizados neste site.
            </p>

            <div className="space-y-5 text-sm leading-relaxed">
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">O que são cookies?</h3>
                <p>
                  Cookies são pequenos ficheiros guardados no seu dispositivo quando visita um
                  site. Podem ajudar a garantir o funcionamento das páginas e a recordar
                  determinadas preferências.
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-slate-900">Como os utilizamos</h3>
                <p>
                  Este site poderá utilizar cookies estritamente necessários ao seu funcionamento.
                  Se forem integrados serviços externos, esses serviços poderão definir cookies
                  próprios, sujeitos às respetivas políticas de privacidade.
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-slate-900">Como gerir cookies</h3>
                <p>
                  Pode consultar, bloquear ou apagar cookies nas definições do seu navegador.
                  Tenha em conta que a desativação de cookies necessários poderá afetar algumas
                  funcionalidades do site.
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-slate-900">Alterações a esta política</h3>
                <p>
                  Esta política poderá ser atualizada quando houver alterações no site ou na forma
                  como os cookies são utilizados. Consulte esta janela para ver a versão atual.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end border-t border-slate-200 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-[#1E2838] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1E2838] focus:ring-offset-2"
              >
                Fechar
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

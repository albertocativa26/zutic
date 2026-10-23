"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";

const inputClassName =
  "w-full rounded-xl border border-cyan-900/50 bg-[#07090e] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = `Pedido de contacto: ${formData.get("subject")}`;
    const body = [
      `Nome: ${formData.get("name")}`,
      `Empresa: ${formData.get("company") || "Não indicada"}`,
      `E-mail: ${formData.get("email")}`,
      `Telefone / WhatsApp: ${formData.get("phone") || "Não indicado"}`,
      `Assunto: ${formData.get("subject")}`,
      "",
      "Mensagem:",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:geral@zutic.co.ao?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section
      aria-labelledby="contact-form-title"
      className="rounded-3xl border border-cyan-900/40 bg-[#0b0f19] p-6 shadow-2xl shadow-black/20 sm:p-8"
    >
      <div className="mb-7">
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          Fale connosco
        </span>
        <h2 id="contact-form-title" className="text-2xl font-bold text-slate-100 sm:text-3xl">
          Envie-nos uma mensagem
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Conte-nos o que precisa. O seu aplicativo de correio será aberto com a mensagem preparada para enviar.
        </p>
      </div>

      {formSubmitted && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-xl border border-cyan-500/30 bg-cyan-950/50 p-4 text-sm text-cyan-200"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
          <p>
            A mensagem foi preparada. Termine o envio no seu aplicativo de correio.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold text-slate-300">
              Nome completo <span className="text-cyan-400">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              className={inputClassName}
              placeholder="O seu nome"
            />
          </div>
          <div>
            <label htmlFor="contact-company" className="mb-2 block text-xs font-semibold text-slate-300">
              Empresa
            </label>
            <input
              id="contact-company"
              name="company"
              autoComplete="organization"
              className={inputClassName}
              placeholder="Nome da empresa"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold text-slate-300">
              E-mail <span className="text-cyan-400">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClassName}
              placeholder="nome@empresa.com"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold text-slate-300">
              Telefone / WhatsApp
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClassName}
              placeholder="+244 900 000 000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-xs font-semibold text-slate-300">
            Assunto <span className="text-cyan-400">*</span>
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            defaultValue=""
            className={`${inputClassName} appearance-none`}
          >
            <option value="" disabled>Selecione o assunto</option>
            <option value="Desenvolvimento de software">Desenvolvimento de software</option>
            <option value="Aplicação móvel">Aplicação móvel</option>
            <option value="Consultoria de TI">Consultoria de TI</option>
            <option value="Cloud e infraestrutura">Cloud e infraestrutura</option>
            <option value="Cibersegurança">Cibersegurança</option>
            <option value="Outro">Outro assunto</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-slate-300">
            Como podemos ajudar? <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={`${inputClassName} resize-y`}
            placeholder="Descreva brevemente o seu projeto ou necessidade..."
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold text-slate-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
        >
          <Send className="h-4 w-4" />
          Preparar mensagem
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}

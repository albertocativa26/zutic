'use client';

import { useState, type FormEvent } from 'react';

export type ContactFormData = {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

const emptyForm: ContactFormData = {
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: '',
};

export function useContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [formLoading, setFormLoading] = useState(false);

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData(emptyForm);
    }, 1200);
  }

  return {
    formSubmitted,
    setFormSubmitted,
    formData,
    setFormData,
    formLoading,
    handleSubmitForm,
  };
}

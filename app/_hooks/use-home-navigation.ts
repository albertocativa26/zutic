'use client';

import { useState } from 'react';

export function useHomeNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

  function scrollToSection(id: string) {
    setActiveTab(id);
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
    activeTab,
    scrollToSection,
  };
}

import type { DownloadLink, LandingFAQ, LandingNavItem } from "@/types/audit";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://audit.nosplanet.com";

export const siteConfig = {
  name: "Audit",
  legalName: "Audit by Nos Planet",
  url: siteUrl,
  locale: "es_PE",
  language: "es",
  creator: "Nos Planet",
  themeColor: "#FF5C93",
  description:
    "Audit es la app móvil para gestionar auditorías de calidad, seguridad, medio ambiente y cumplimiento normativo desde el celular.",
  keywords: [
    "app de auditoría",
    "software de auditorías",
    "gestión de auditorías",
    "checklist de auditoría",
    "auditorías ISO",
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "GlobalGAP",
    "FSMA",
    "BRCGS",
    "cumplimiento normativo",
    "evidencias de auditoría",
    "hallazgos de auditoría",
    "informes de auditoría",
  ],
  social: {
    twitter: "https://twitter.com/nosplanet",
    instagram: "https://www.instagram.com/nosplanet",
    linkedin: "https://www.linkedin.com/company/nosplanet",
  },
};

export const landingNavItems: LandingNavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-audit", label: "Sobre Audit" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#app", label: "App" },
  { href: "#faq", label: "FAQ" },
];

export const downloadLinks: DownloadLink[] = [
  {
    platform: "ios",
    href: "#descargar",
    eyebrow: "Descargar en",
    label: "App Store",
  },
  {
    platform: "android",
    href: "#descargar",
    eyebrow: "Disponible en",
    label: "Google Play",
  },
];

export const landingFaqs: LandingFAQ[] = [
  {
    question: "¿Qué es Audit?",
    answer:
      "Audit es una app móvil de gestión de auditorías que permite ejecutar checklists, registrar evidencias, generar hallazgos y exportar informes profesionales desde tu celular. Compatible con ISO 9001, ISO 14001, ISO 45001, GlobalGAP, FSMA, BRCGS y más.",
  },
  {
    question: "¿Qué diferencia a Audit de otras apps de auditoría?",
    answer:
      "Audit está diseñada para trabajo de campo real en Latinoamérica. Funciona offline, soporta múltiples normas simultáneamente, valida datos con SUNAT y RENIEC, y genera informes automáticos al cerrar cada auditoría.",
  },
  {
    question: "¿Cómo empiezo a usar Audit?",
    answer:
      "Descarga la app, solicita el registro de tu empresa, nuestro equipo de soporte validará la información y en menos de 48 horas tendrás tu cuenta activa para comenzar a programar auditorías.",
  },
  {
    question: "¿Puedo usar Audit sin conexión a internet?",
    answer:
      "Sí. Audit permite ejecutar auditorías completas sin conexión. Los datos se sincronizan automáticamente cuando vuelves a tener señal, incluyendo fotos y evidencias registradas.",
  },
  {
    question: "¿Cuántos auditores puedo agregar?",
    answer:
      "No hay límite de auditores. El Auditor Admin puede invitar tantos Auditores Regulares como necesite, asignarles competencias y coordinar múltiples auditorías simultáneamente.",
  },
];

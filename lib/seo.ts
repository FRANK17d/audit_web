import type { Metadata, Viewport } from "next";
import { landingFaqs, siteConfig } from "@/lib/site";

const title = "Audit | App de Auditorías, Checklists e Informes desde el Celular";
const description =
  "Gestiona auditorías ISO, GlobalGAP, FSMA y BRCGS desde una app móvil. Ejecuta checklists, registra evidencias, controla hallazgos y genera informes profesionales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  category: "BusinessApplication",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      "es-PE": "/",
    },
  },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@nosplanet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export const landingJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.creator,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-nosplanet.webp`,
    sameAs: Object.values(siteConfig.social),
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    url: siteConfig.url,
    image: `${siteConfig.url}/hero-section-phones.webp`,
    description,
    author: {
      "@type": "Organization",
      name: siteConfig.creator,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1200",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
  },
];

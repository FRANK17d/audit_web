import { LandingHeader } from "@/components/landing/landing-header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { AppScreensSection } from "@/components/landing/app-screens-section";
import { DownloadSection } from "@/components/landing/download-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FAQSection } from "@/components/landing/faq-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { landingJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LandingHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <MetricsSection />
        <AppScreensSection />
        <DownloadSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <LandingFooter />
    </>
  );
}

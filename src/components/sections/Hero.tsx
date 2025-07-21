/**
 * Hero Section - Premium Landing Page Hero
 * Features glassmorphism effects, animated elements, and dual CTAs
 */

import { CTAButton } from "@/components/ui/cta-button";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl float-animation"></div>
      </div>

      <div className="relative z-10 container-custom text-center px-6">
        {/* Main headline */}
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">
              {HERO.headline}
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="fade-in-up fade-in-delay-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            {HERO.subheadline}
          </h2>
        </div>

        {/* Description */}
        <div className="fade-in-up fade-in-delay-2">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {HERO.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in-up fade-in-delay-3">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              type="whatsapp"
              text="WhatsApp Us"
              message={HERO.whatsappText}
              size="lg"
              className="w-full sm:w-auto"
            />
            <CTAButton
              type="telegram"
              text="Telegram"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
          
          {/* Secondary CTA text */}
          <p className="text-sm text-muted-foreground mt-6">
            {HERO.cta}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-delay-3">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
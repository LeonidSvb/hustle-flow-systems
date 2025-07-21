/**
 * Services Section - Detailed service tiers and pricing approach
 * Shows three service levels with features
 */

import { CTAButton } from "@/components/ui/cta-button";
import { SERVICES } from "@/lib/content";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {SERVICES.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            {SERVICES.description}
          </p>
          <h3 className="text-2xl font-bold text-foreground">
            {SERVICES.subtitle}
          </h3>
        </div>

        {/* Service tiers grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.tiers.map((tier, index) => (
            <div 
              key={index}
              className={`card-premium hover-scale fade-in-up fade-in-delay-${index + 1} ${
                index === 1 ? 'lg:scale-105 border-primary/20' : ''
              }`}
            >
              {/* Icon and title */}
              <div className="text-center mb-8">
                <div className="text-5xl mb-4 float-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.title}
                </h3>
                <p className="text-muted-foreground">
                  {tier.subtitle}
                </p>
              </div>
              
              {/* Features list */}
              <div className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div className="text-center mb-12">
          <div className="card-premium max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {SERVICES.note}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            {SERVICES.cta}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              type="whatsapp"
              text="WhatsApp Us"
              message={SERVICES.whatsappText}
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
        </div>
      </div>
    </section>
  );
}
/**
 * Problem Section - Highlights customer pain points
 * Creates emotional connection with prospects
 */

import { CTAButton } from "@/components/ui/cta-button";
import { PROBLEM } from "@/lib/content";
import { AlertCircle } from "lucide-react";

export function Problem() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {PROBLEM.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {PROBLEM.subtitle}
          </p>
        </div>

        {/* Pain points grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid gap-6 md:gap-8">
            {PROBLEM.painPoints.map((point, index) => (
              <div 
                key={index}
                className={`card-premium hover-scale fade-in-up fade-in-delay-${index % 3 + 1}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ending statement */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {PROBLEM.ending}
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            {PROBLEM.cta}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              type="whatsapp"
              text="WhatsApp Us"
              message={PROBLEM.whatsappText}
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
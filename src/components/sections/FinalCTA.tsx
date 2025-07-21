/**
 * Final CTA Section - Last push for conversion
 * Strategy session offer with value proposition
 */

import { CTAButton } from "@/components/ui/cta-button";
import { FINAL_CTA } from "@/lib/content";
import { CheckCircle, XCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Main content card */}
        <div className="card-premium max-w-5xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {FINAL_CTA.title}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {FINAL_CTA.description}
          </p>

          {/* What we cover vs won't do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What we cover */}
            <div className="text-left">
              <h3 className="text-xl font-bold mb-6 text-success flex items-center justify-center md:justify-start">
                <CheckCircle className="w-6 h-6 mr-2" />
                What we cover:
              </h3>
              <div className="space-y-3">
                {FINAL_CTA.covers.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground capitalize">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What we won't do */}
            <div className="text-left">
              <h3 className="text-xl font-bold mb-6 text-destructive flex items-center justify-center md:justify-start">
                <XCircle className="w-6 h-6 mr-2" />
                What we won't do:
              </h3>
              <div className="space-y-3">
                {FINAL_CTA.wontDo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground capitalize">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-muted-foreground italic mb-12 border-l-4 border-primary pl-6 max-w-3xl mx-auto">
            "{FINAL_CTA.quote}"
          </blockquote>

          {/* CTA */}
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              {FINAL_CTA.cta}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton
                type="whatsapp"
                text="WhatsApp Strategy Session"
                message={FINAL_CTA.whatsappText}
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
      </div>
    </section>
  );
}
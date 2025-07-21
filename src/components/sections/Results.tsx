/**
 * Results Section - Client case studies and success stories
 * Social proof through real results
 */

import { CTAButton } from "@/components/ui/cta-button";
import { RESULTS } from "@/lib/content";
import { TrendingUp, Users, Zap } from "lucide-react";

export function Results() {
  const getIcon = (index: number) => {
    const icons = [TrendingUp, Users, Zap];
    const Icon = icons[index];
    return <Icon className="w-8 h-8 text-primary" />;
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {RESULTS.title}
          </h2>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {RESULTS.caseStudies.map((caseStudy, index) => (
            <div 
              key={index}
              className={`card-premium hover-scale fade-in-up fade-in-delay-${index + 1}`}
            >
              {/* Icon */}
              <div className="mb-6">
                {getIcon(index)}
              </div>
              
              {/* Case study type */}
              <h3 className="text-xl font-bold mb-4 text-primary">
                {caseStudy.type}
              </h3>
              
              {/* Challenge */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                <p className="text-muted-foreground">
                  {caseStudy.challenge}
                </p>
              </div>
              
              {/* Solution */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                <p className="text-muted-foreground">
                  {caseStudy.solution}
                </p>
              </div>
              
              {/* Results */}
              <div className="border-t border-card-border pt-4">
                <h4 className="font-semibold text-success mb-2">Results:</h4>
                <p className="text-success font-medium">
                  {caseStudy.results}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            {RESULTS.cta}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              type="whatsapp"
              text="WhatsApp Us"
              message={RESULTS.whatsappText}
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
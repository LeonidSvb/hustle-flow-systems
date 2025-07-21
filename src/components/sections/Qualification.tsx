/**
 * Qualification Section - Clear criteria for ideal clients
 * Helps filter prospects and set expectations
 */

import { QUALIFICATION } from "@/lib/content";
import { Check, X } from "lucide-react";

export function Qualification() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {QUALIFICATION.title}
          </h2>
        </div>

        {/* Qualification grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* We Work Best With */}
          <div className="card-premium hover-scale fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-success flex items-center">
              <Check className="w-8 h-8 mr-3" />
              {QUALIFICATION.worksWith.title}
            </h3>
            
            <div className="space-y-4">
              {QUALIFICATION.worksWith.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* This Isn't For You If */}
          <div className="card-premium hover-scale fade-in-up fade-in-delay-1">
            <h3 className="text-2xl font-bold mb-8 text-destructive flex items-center">
              <X className="w-8 h-8 mr-3" />
              {QUALIFICATION.notFor.title}
            </h3>
            
            <div className="space-y-4">
              {QUALIFICATION.notFor.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-destructive/20 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/**
 * Solution Section - Our approach to automation
 * Shows the 4 main service areas with modern card design
 */

import { SOLUTION } from "@/lib/content";

export function Solution() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {SOLUTION.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {SOLUTION.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTION.services.map((service, index) => (
            <div 
              key={index}
              className={`card-premium text-center hover-scale fade-in-up fade-in-delay-${index % 3 + 1}`}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 float-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
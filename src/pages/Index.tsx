/**
 * System Hustle - AI Automation Agency Landing Page
 * Premium React website for high-value business automation services
 * Contact: leo@systemhustle.com | WhatsApp: +628175755953 | Telegram: @leonidshvorob
 */

import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Qualification } from "@/components/sections/Qualification";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - First impression with main value proposition */}
      <Hero />
      
      {/* Problem Section - Identify with customer pain points */}
      <Problem />
      
      {/* Solution Section - Our approach to solving their problems */}
      <Solution />
      
      {/* Results Section - Social proof through case studies */}
      <Results />
      
      {/* Services Section - Detailed service offerings and pricing approach */}
      <Services />
      
      {/* Qualification Section - Clear criteria for ideal clients */}
      <Qualification />
      
      {/* Final CTA Section - Last conversion opportunity */}
      <FinalCTA />
      
      {/* Footer - Company information and contact details */}
      <Footer />
    </div>
  );
};

export default Index;

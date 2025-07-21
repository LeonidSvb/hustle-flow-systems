/**
 * Footer Section - Company info and final messaging
 * Simple, elegant footer with contact information
 */

import { FOOTER, CONTACT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-padding border-t border-card-border">
      <div className="container-custom">
        <div className="text-center">
          {/* Company name */}
          <h3 className="text-2xl font-bold text-gradient mb-4">
            {FOOTER.company}
          </h3>
          
          {/* Tagline */}
          <p className="text-lg text-muted-foreground mb-6">
            {FOOTER.tagline}
          </p>
          
          {/* Quote */}
          <blockquote className="text-muted-foreground italic mb-8 max-w-2xl mx-auto">
            "{FOOTER.quote}"
          </blockquote>
          
          {/* Contact email */}
          <p className="text-muted-foreground mb-8">
            <span className="text-foreground font-medium">Email:</span> {CONTACT.email}
          </p>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-card-border text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {FOOTER.company}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
/**
 * Premium CTA Button Component
 * Supports WhatsApp, Telegram, and custom buttons with proper styling
 */

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, Send } from "lucide-react";

interface CTAButtonProps {
  type: 'whatsapp' | 'telegram' | 'primary' | 'secondary';
  text: string;
  href?: string;
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export function CTAButton({ 
  type, 
  text, 
  href, 
  message, 
  className,
  size = 'md',
  children 
}: CTAButtonProps) {
  const getButtonUrl = () => {
    if (href) return href;
    
    switch (type) {
      case 'whatsapp':
        const whatsappNumber = '+628175755953';
        const encodedMessage = encodeURIComponent(message || '');
        return `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
      case 'telegram':
        const telegramUsername = 'leonidshvorob';
        return `https://t.me/${telegramUsername}`;
      default:
        return '#';
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "font-semibold transition-all duration-400 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-background";
    
    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-2.5 text-lg"
    };

    switch (type) {
      case 'whatsapp':
        return cn(
          baseStyles,
          sizeStyles[size],
          "btn-whatsapp rounded-lg shadow-lg",
          className
        );
      case 'telegram':
        return cn(
          baseStyles,
          sizeStyles[size],
          "btn-telegram rounded-lg shadow-lg",
          className
        );
      case 'primary':
        return cn(
          baseStyles,
          sizeStyles[size],
          "btn-primary rounded-lg",
          className
        );
      case 'secondary':
        return cn(
          baseStyles,
          sizeStyles[size],
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover rounded-lg border border-card-border shadow-md",
          className
        );
      default:
        return cn(baseStyles, sizeStyles[size], className);
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 mr-2" />;
      case 'telegram':
        return <Send className="w-5 h-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <Button
      asChild
      className={getButtonStyles()}
    >
      <a 
        href={getButtonUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center"
      >
        {getIcon()}
        {text}
        {children}
      </a>
    </Button>
  );
}
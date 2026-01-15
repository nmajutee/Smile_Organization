'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'gradient';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'light', blur = 'lg', hover = true, glow = false, children, ...props }, ref) => {
    const blurClasses = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
    };

    const variantClasses = {
      light: 'bg-white/70 border-white/30',
      dark: 'bg-black/20 border-white/10',
      gradient: 'bg-gradient-to-br from-white/80 to-white/40 border-white/30',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border overflow-hidden transition-all duration-500',
          blurClasses[blur],
          variantClasses[variant],
          hover && 'hover:shadow-2xl hover:-translate-y-1 hover:border-white/50',
          glow && 'shadow-[0_0_40px_rgba(235,83,16,0.15)]',
          className
        )}
        style={{
          WebkitBackdropFilter: blur === 'xl' ? 'blur(40px)' : undefined,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

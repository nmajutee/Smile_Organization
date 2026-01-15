import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated';
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, variant = 'default', glow = false, children, ...props }, ref) => {
    const variants = {
      default: 'bg-white rounded-2xl border border-gray-100 shadow-sm',
      glass: 'bg-white/70 backdrop-blur-xl rounded-2xl border border-white/30',
      gradient: 'bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100',
      elevated: 'bg-white rounded-3xl shadow-xl border border-gray-50',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden transition-all duration-500',
          variants[variant],
          hover && 'hover:shadow-xl hover:-translate-y-2 hover:border-gray-200',
          glow && 'shadow-[0_0_40px_rgba(235,83,16,0.1)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pb-4', className)} {...props}>
    {children}
  </div>
);

export const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-4 flex items-center border-t border-gray-100', className)} {...props}>
    {children}
  </div>
);

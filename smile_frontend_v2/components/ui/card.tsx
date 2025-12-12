import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, padding = 'none', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-100',
      elevated: 'bg-white shadow-lg',
      outlined: 'bg-transparent border-2 border-gray-200',
      glass: 'bg-white/80 backdrop-blur-lg border border-white/20',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl overflow-hidden',
          variants[variant],
          paddings[padding],
          hover && 'transition-all duration-400 ease-out hover:shadow-xl hover:-translate-y-1',
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

export const CardImage = ({
  className,
  src,
  alt,
  aspectRatio = '4/3',
  overlay = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  aspectRatio?: string;
  overlay?: boolean;
}) => (
  <div
    className={cn('relative overflow-hidden bg-gray-100', className)}
    style={{ aspectRatio }}
    {...props}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
    {overlay && (
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    )}
  </div>
);

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pb-2', className)} {...props}>
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

export const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-xl font-semibold text-gray-900 font-serif', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-gray-600 leading-relaxed mt-2', className)} {...props}>
    {children}
  </p>
);

export const CardBadge = ({
  className,
  variant = 'default',
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'primary' | 'accent' | 'secondary';
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-[#E6F3F3] text-[#006B6B]',
    accent: 'bg-[#FCF0F6] text-[#C41E7F]',
    secondary: 'bg-[#FBF8F0] text-[#A68B3D]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

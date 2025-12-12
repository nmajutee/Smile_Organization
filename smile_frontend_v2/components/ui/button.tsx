import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    fullWidth,
    icon,
    iconPosition = 'right',
    children,
    ...props
  }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium tracking-wide
      transition-all duration-300 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none
      active:scale-[0.98]
    `;

    const variants = {
      primary: `
        bg-[#006B6B] text-white
        hover:bg-[#004D4D]
        focus-visible:ring-[#006B6B]
        shadow-sm hover:shadow-md
      `,
      secondary: `
        bg-[#C4A962] text-white
        hover:bg-[#A68B3D]
        focus-visible:ring-[#C4A962]
        shadow-sm hover:shadow-md
      `,
      accent: `
        bg-[#C41E7F] text-white
        hover:bg-[#9E1866]
        focus-visible:ring-[#C41E7F]
        shadow-sm hover:shadow-md
      `,
      outline: `
        border-2 border-[#006B6B] text-[#006B6B] bg-transparent
        hover:bg-[#006B6B] hover:text-white
        focus-visible:ring-[#006B6B]
      `,
      ghost: `
        text-[#006B6B] bg-transparent
        hover:bg-[#E6F3F3]
        focus-visible:ring-[#006B6B]
      `,
      link: `
        text-[#006B6B] bg-transparent p-0 h-auto
        hover:text-[#004D4D]
        underline-offset-4 hover:underline
        focus-visible:ring-[#006B6B]
      `,
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm rounded-md',
      md: 'h-11 px-6 text-sm rounded-lg',
      lg: 'h-12 px-8 text-base rounded-lg',
      xl: 'h-14 px-10 text-lg rounded-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== 'link' && sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && !isLoading && (
          <span className="shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

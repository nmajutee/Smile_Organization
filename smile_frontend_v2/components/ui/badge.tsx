import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = ({ className, variant = 'default', size = 'md', ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-[#E6F3F3] text-[#006B6B]',
    secondary: 'bg-[#FBF8F0] text-[#A68B3D]',
    accent: 'bg-[#FCF0F6] text-[#C41E7F]',
    success: 'bg-green-50 text-green-700',
    warning: 'bg-amber-50 text-amber-700',
    error: 'bg-red-50 text-red-700',
    info: 'bg-blue-50 text-blue-700',
    outline: 'border-2 border-gray-200 text-gray-600 bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium tracking-wide',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  subtitleClassName?: string;
  labelClassName?: string;
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  titleClassName,
  subtitleClassName,
  labelClassName,
  dark = false,
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('max-w-3xl mb-16', alignClasses[align])}>
      {label && (
        <div className={cn('flex items-center gap-3 mb-4', align === 'center' && 'justify-center')}>
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#D36D2D] to-[#35424A] rounded-full" />
          <span
            className={cn(
              'text-sm font-semibold uppercase tracking-wider',
              dark ? 'text-white' : 'text-[#D36D2D]',
              labelClassName
            )}
          >
            {label}
          </span>
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#35424A] to-[#D36D2D] rounded-full" />
        </div>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6',
          dark ? 'text-white' : 'text-gray-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg md:text-xl leading-relaxed',
            dark ? 'text-gray-300' : 'text-gray-600',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

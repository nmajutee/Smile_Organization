'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from './animated-counter';

interface ImpactStatProps {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'circle' | 'card';
  className?: string;
}

export function ImpactStat({
  value,
  suffix = '',
  label,
  description,
  icon,
  variant = 'default',
  className,
}: ImpactStatProps) {
  if (variant === 'circle') {
    return (
      <div className={cn('flex flex-col items-center text-center group', className)}>
        <div className="relative mb-6">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D36D2D] to-[#35424A] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

          {/* Circle container */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-xl border border-white/50 flex items-center justify-center">
            {/* Inner gradient border */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#D36D2D]/20" />

            {/* Value */}
            <div className="text-center">
              <AnimatedCounter
                end={value}
                suffix={suffix}
                className="text-3xl md:text-4xl font-bold text-gray-900"
              />
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
        {description && (
          <p className="text-sm text-gray-500 max-w-[200px]">{description}</p>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={cn(
          'relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden group',
          'hover:shadow-xl hover:-translate-y-1 transition-all duration-500',
          className
        )}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D36D2D]/5 to-[#35424A]/5 rounded-bl-full" />

        <div className="relative z-10">
          {icon && (
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D36D2D]/10 to-[#35424A]/10 flex items-center justify-center mb-6 text-[#D36D2D]">
              {icon}
            </div>
          )}

          <AnimatedCounter
            end={value}
            suffix={suffix}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D36D2D] to-[#35424A] bg-clip-text text-transparent"
          />

          <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{label}</h3>

          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn('text-center', className)}>
      <AnimatedCounter
        end={value}
        suffix={suffix}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
      />
      <h3 className="text-lg font-semibold text-gray-700 mt-3">{label}</h3>
      {description && (
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      )}
    </div>
  );
}

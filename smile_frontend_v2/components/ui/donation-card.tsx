'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface DonationCardProps {
  tier: 'essential' | 'champion' | 'guardian';
  amount: number;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
}

export function DonationCard({
  tier,
  amount,
  title,
  description,
  features,
  popular = false,
  className,
}: DonationCardProps) {
  const tierColors = {
    essential: {
      bg: 'from-gray-50 to-white',
      accent: 'text-gray-900',
      border: 'border-gray-200',
      button: 'bg-gray-900 hover:bg-gray-800 text-white',
      icon: 'bg-gray-100 text-gray-600',
    },
    champion: {
      bg: 'from-orange-50 to-white',
      accent: 'text-[#D36D2D]',
      border: 'border-[#D36D2D]/30',
      button: 'bg-[#D36D2D] hover:bg-[#35424A] text-white',
      icon: 'bg-orange-100 text-[#D36D2D]',
    },
    guardian: {
      bg: 'from-amber-50 to-white',
      accent: 'text-[#35424A]',
      border: 'border-[#35424A]/30',
      button: 'bg-[#35424A] hover:bg-[#D36D2D] text-white',
      icon: 'bg-amber-100 text-[#35424A]',
    },
  };

  const colors = tierColors[tier];

  return (
    <div
      className={cn(
        'relative rounded-3xl p-8 transition-all duration-500 overflow-hidden group',
        'bg-gradient-to-b border',
        colors.bg,
        colors.border,
        popular
          ? 'shadow-xl scale-105 z-10 ring-2 ring-[#D36D2D]/20'
          : 'shadow-lg hover:shadow-xl hover:-translate-y-2',
        className
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <div className="bg-[#D36D2D] text-white text-xs font-bold px-6 py-2 rounded-b-xl shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Decorative gradient orb */}
      <div
        className={cn(
          'absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 transition-opacity duration-500',
          tier === 'essential' && 'bg-gray-400',
          tier === 'champion' && 'bg-[#D36D2D]',
          tier === 'guardian' && 'bg-[#35424A]',
          'group-hover:opacity-50'
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-6', colors.icon)}>
          {tier === 'essential' && (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
          {tier === 'champion' && (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          )}
          {tier === 'guardian' && (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )}
        </div>

        {/* Title & Description */}
        <h3 className={cn('text-2xl font-bold mb-2', colors.accent)}>{title}</h3>
        <p className="text-gray-500 text-sm mb-6">{description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl font-bold text-gray-900">${amount}</span>
          <span className="text-gray-500">/month</span>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={cn('w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5', colors.icon)}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href="/projects" className="block">
          <button
            className={cn(
              'w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300',
              'transform hover:scale-[1.02] active:scale-[0.98]',
              'shadow-lg hover:shadow-xl',
              colors.button
            )}
          >
            Become a {title}
          </button>
        </Link>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useInView } from '@/lib/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'blur-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const animationStyles: Record<string, { initial: string; animate: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  'slide-left': {
    initial: 'opacity-0 -translate-x-12',
    animate: 'opacity-100 translate-x-0',
  },
  'slide-right': {
    initial: 'opacity-0 translate-x-12',
    animate: 'opacity-100 translate-x-0',
  },
  'scale-up': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  'blur-in': {
    initial: 'opacity-0 blur-sm',
    animate: 'opacity-100 blur-0',
  },
};

export function AnimateOnScroll({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const [ref, isInView] = useInView({ threshold, triggerOnce: once });
  const { initial, animate } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isInView ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}

export default AnimateOnScroll;

'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  className?: string;
}

export function FloatingParticles({
  count = 20,
  color = 'rgba(235, 83, 16, 0.3)',
  className = ''
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const initialized = useRef(false);

  // Generate particles only once on mount using useEffect to avoid calling
  // impure functions (Math.random) during render
  useEffect(() => {
    // Prevent double initialization in Strict Mode
    if (initialized.current) return;
    initialized.current = true;

    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    // This is a valid use case: initializing state from impure functions on mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

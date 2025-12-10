'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Stories', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className="text-2xl font-bold text-gray-900 tracking-tight">
                        Smile<span className="text-[#FF6B35]">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-[#FF6B35]',
                                pathname === link.href ? 'text-[#FF6B35]' : 'text-gray-600'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                        Log in
                    </Link>
                    <Link href="/projects">
                        <Button size="sm">Donate Now</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        'fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden',
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    )}
                >
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'text-2xl font-medium transition-colors',
                                    pathname === link.href ? 'text-[#FF6B35]' : 'text-gray-900'
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-4 w-full max-w-xs px-6">
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="outline" fullWidth>Log in</Button>
                        </Link>
                        <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button fullWidth>Donate Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

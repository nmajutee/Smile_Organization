'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* FOUNDER STORY HERO */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                                    alt="Numfor Boris with children"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-50 rounded-2xl -z-0 hidden md:block" />
                        </div>

                        <div>
                            <Badge variant="default" className="mb-4">Our Founder's Story</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                                "I couldn't stand by and watch a generation be lost."
                            </h1>
                            <div className="space-y-6 text-lg text-gray-600">
                                <p>
                                    <strong>Numfor Boris</strong> founded Smile Organization in 2016, right as the Anglophone Crisis began to tear through communities in Cameroon.
                                </p>
                                <p>
                                    Witnessing children displaced from their homes, schools burning down, and families separated, Boris realized that while he couldn't stop the conflict, he could help the victims.
                                </p>
                                <p>
                                    "Every child has a story," Boris says. "And if we can get those stories to the world, we can find the help they need to survive and dream again."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white border-none shadow-md p-8">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-[#FF6B35]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To provide an accessible platform where children in need can share their stories, connect with compassionate supporters worldwide, and receive meaningful help that restores their dignity and future.
                            </p>
                        </Card>

                        <Card className="bg-white border-none shadow-md p-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                A compassionate digital ecosystem where every child, regardless of their circumstances, has the opportunity to be heard, supported, and empowered to reach their full potential.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* GUIDING PRINCIPLES */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h2>
                        <p className="text-gray-600">
                            Everything we do is built on these core values to ensure we serve our children and donors with integrity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-900">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Human-Centered Storytelling</h3>
                            <p className="text-gray-600">
                                We put people first. We let authentic stories drive connection, ensuring every child's voice is heard with dignity.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-900">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Trust by Design</h3>
                            <p className="text-gray-600">
                                Through rigorous verification, complete transparency, and clear impact tracking, we build trust in every interaction.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-900">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Radical Simplicity</h3>
                            <p className="text-gray-600">
                                We remove barriers between hearts and help. Our platform is simple and accessible so anyone can make a difference.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT STATS */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">2016</span>
                            <span className="text-gray-400">Year Founded</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">500+</span>
                            <span className="text-gray-400">Children Helped</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">50+</span>
                            <span className="text-gray-400">Communities</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">100%</span>
                            <span className="text-gray-400">Commitment</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-orange-50 text-center">
                <div className="container-custom max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Whether you donate, volunteer, or simply share a story, you are part of the solution.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/projects">
                            <Button size="lg">Support a Child</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="bg-white">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HowItWorksPage() {
    const steps = [
        {
            number: '01',
            title: 'We Identify Needs',
            description: 'Our local team in Cameroon identifies vulnerable children and communities affected by the crisis. We verify every case personally.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'We Share Stories',
            description: 'We document their stories with dignity and respect, outlining exactly what support is needed—whether it’s tuition, medical care, or food.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'You Connect & Donate',
            description: 'You browse the stories, find a cause that resonates with you, and make a secure donation directly through our platform.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'We Deliver & Update',
            description: '100% of your donation goes to the cause. We deliver the aid and send you photo/video updates so you see your impact.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="container-custom text-center max-w-3xl mx-auto mb-20">
                <Badge variant="default" className="mb-4">Transparency First</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    How Your Help Reaches Them
                </h1>
                <p className="text-lg text-gray-600">
                    We believe in radical simplicity and total transparency. Here is exactly how our platform works to connect you with children in need.
                </p>
            </div>

            {/* Steps */}
            <section className="container-custom mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <Card key={step.number} className="p-8 border-none shadow-lg bg-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-50 opacity-50 select-none group-hover:text-orange-50 transition-colors">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="bg-gray-50 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Trust Us?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Verified Stories</h4>
                                        <p className="text-gray-600 text-sm">Every child's story is verified by our on-ground team to ensure authenticity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct Impact</h4>
                                        <p className="text-gray-600 text-sm">We minimize overhead so your donation goes directly to the beneficiary.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Regular Updates</h4>
                                        <p className="text-gray-600 text-sm">Donors receive photos and reports on how their contribution was used.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                                alt="Community Trust"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="container-custom max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
                    <Link href="/projects">
                        <Button size="lg" className="min-w-[200px]">Browse Stories</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

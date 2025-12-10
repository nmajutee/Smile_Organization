'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { apiClient } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    donation_goal: number;
    donation_raised: number;
    location: string;
    status: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await apiClient.get('/api/projects/api/');
                setProjects(response.data);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Failed to load stories. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35]"></div>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="default" className="mb-4">Our Causes</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Stories That Need Your Support
                    </h1>
                    <p className="text-lg text-gray-600">
                        Every child has a story. Your support can change the ending. Browse through our verified cases and make a direct impact today.
                    </p>
                </div>

                {/* Error State */}
                {error && (
                    <div className="text-center py-12">
                        <div className="inline-block p-4 rounded-lg bg-red-50 text-red-600 mb-4">
                            {error}
                        </div>
                        <Button onClick={() => window.location.reload()} variant="outline">
                            Try Again
                        </Button>
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => {
                            const progress = Math.min((project.donation_raised / project.donation_goal) * 100, 100);

                            return (
                                <Card key={project.id} hover className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden bg-gray-200">
                                        <img
                                            src={project.image || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-white/90 backdrop-blur-sm shadow-sm capitalize">
                                                {project.status || 'Active'}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <CardContent className="pt-6 flex-grow">
                                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {project.location}
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-1">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Progress */}
                                        <div className="space-y-2">
                                            <div className="w-full bg-gray-100 rounded-full h-2">
                                                <div
                                                    className="bg-[#FF6B35] h-2 rounded-full transition-all duration-1000"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-sm font-medium">
                                                <span className="text-[#FF6B35]">${project.donation_raised.toLocaleString()}</span>
                                                <span className="text-gray-400">of ${project.donation_goal.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </CardContent>

                                    {/* Footer */}
                                    <CardFooter className="border-t border-gray-100 mt-auto">
                                        <Link href={`/projects/${project.id}`} className="w-full">
                                            <Button variant="secondary" fullWidth className="group">
                                                Read Full Story
                                                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}

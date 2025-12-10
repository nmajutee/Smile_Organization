'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    start_date: string;
    end_date: string;
    volunteer_needed: number;
}

export default function ProjectDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [applying, setApplying] = useState(false);
    const [applied, setApplied] = useState(false);
    const [applyMessage, setApplyMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await apiClient.get(`/api/projects/api/${params.id}/`);
                setProject(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching project details:', err);
                setError('Failed to load project details.');
                setLoading(false);
            }
        };

        if (params.id) {
            fetchProject();
        }
    }, [params.id]);

    const handleVolunteer = async () => {
        if (!project) return;

        // Check if user is logged in
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            // Redirect to login page
            router.push('/login');
            return;
        }

        setApplying(true);
        setApplyMessage(null);

        try {
            await apiClient.post('/api/projects/apply/', {
                project: project.id,
                message: "I would like to volunteer for this project."
            });
            setApplied(true);
            setApplyMessage('Application submitted successfully!');
        } catch (err: any) {
            console.error('Error applying for volunteer position:', err);
            setApplyMessage(err.response?.data?.detail || 'Failed to submit application. Please try again.');
        } finally {
            setApplying(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35]"></div>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
                <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg mb-4">
                    {error || 'Project not found'}
                </div>
                <Link href="/projects">
                    <Button variant="outline">Back to Stories</Button>
                </Link>
            </div>
        );
    }

    const progress = Math.min((project.donation_raised / project.donation_goal) * 100, 100);

    return (
        <main className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="container-custom">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-[#FF6B35]">Home</Link>
                    <span>/</span>
                    <Link href="/projects" className="hover:text-[#FF6B35]">Stories</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium truncate max-w-[200px]">{project.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                            <img
                                src={project.image || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80'}
                                alt={project.title}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>

                        {/* Title & Progress */}
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
                                <Badge className="capitalize mt-2">{project.status}</Badge>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <span className="text-3xl font-bold text-[#FF6B35]">${project.donation_raised.toLocaleString()}</span>
                                        <span className="text-gray-500 ml-2">raised of ${project.donation_goal.toLocaleString()}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">{Math.round(progress)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-3">
                                    <div
                                        className="bg-[#FF6B35] h-3 rounded-full transition-all duration-1000"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="p-4 bg-white rounded-xl border border-gray-100">
                                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Location</span>
                                    <span className="font-medium text-gray-900">{project.location}</span>
                                </div>
                                <div className="p-4 bg-white rounded-xl border border-gray-100">
                                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Start Date</span>
                                    <span className="font-medium text-gray-900">{project.start_date}</span>
                                </div>
                                <div className="p-4 bg-white rounded-xl border border-gray-100">
                                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Volunteers</span>
                                    <span className="font-medium text-gray-900">{project.volunteer_needed} Needed</span>
                                </div>
                                <div className="p-4 bg-white rounded-xl border border-gray-100">
                                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Status</span>
                                    <span className="font-medium text-gray-900 capitalize">{project.status}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="prose max-w-none text-gray-600 leading-relaxed">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">About This Story</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="p-6 border-none shadow-lg sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Make an Impact</h3>

                            <div className="space-y-4">
                                <Button size="lg" fullWidth className="h-14 text-lg">
                                    Donate Now
                                </Button>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or</span>
                                    </div>
                                </div>

                                {applied ? (
                                    <Button variant="secondary" fullWidth disabled className="bg-green-50 text-green-700 border-green-200">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Application Sent
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        fullWidth
                                        onClick={handleVolunteer}
                                        isLoading={applying}
                                    >
                                        Volunteer for this Project
                                    </Button>
                                )}

                                {applyMessage && (
                                    <div className={`text-sm p-3 rounded-md text-center ${applyMessage.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                                        {applyMessage}
                                    </div>
                                )}
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="font-medium text-gray-900 mb-2">Share this story</h4>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                                    </button>
                                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                    </button>
                                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                                        <span className="sr-only">Copy Link</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}

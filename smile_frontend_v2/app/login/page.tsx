'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await apiClient.post('/api/accounts/login/', {
                email,
                password,
            });

            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);

            router.push('/dashboard'); // Redirect to dashboard after login
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.response?.data?.detail || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center">
            <div className="container-custom max-w-md w-full">
                <Card className="p-8 border-none shadow-lg">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-600 text-sm">Sign in to continue your journey</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-6 text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                <Link href="/forgot-password" className="text-xs text-[#FF6B35] hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <Button
                            type="submit"
                            fullWidth
                            size="lg"
                            isLoading={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-[#FF6B35] font-medium hover:underline">
                            Create an account
                        </Link>
                    </div>
                </Card>
            </div>
        </main>
    );
}

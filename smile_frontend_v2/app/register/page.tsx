'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/api-client';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            await apiClient.post('/api/accounts/register/', {
                email: formData.email,
                password: formData.password,
                first_name: formData.first_name,
                last_name: formData.last_name,
                role: 'volunteer', // Default role for now
            });

            // Redirect to login on success
            router.push('/login?registered=true');
        } catch (err: any) {
            console.error('Registration error:', err);
            // Handle Django DRF validation errors
            if (err.response?.data) {
                const errors = Object.values(err.response.data).flat().join(', ');
                setError(errors || 'Registration failed. Please try again.');
            } else {
                setError('Registration failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Breadcrumb */}
            <section className="ul-breadcrumb">
                <div className="ul-breadcrumb-bg ul-breadcrumb-bg-2">
                    <div className="ul-container">
                        <h1 className="ul-breadcrumb-title">Register</h1>
                        <div className="ul-breadcrumb-nav">
                            <Link href="/">Home</Link>
                            <span className="separator">/</span>
                            <span className="current">Register</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Register Form */}
            <section className="ul-section-spacing">
                <div className="ul-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="ul-contact-form-wrapper">
                                <h3 className="ul-contact-form-title mb-4 text-center">Create Account</h3>

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="ul-contact-form">
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="first_name"
                                                placeholder="First Name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                required
                                                className="form-control"
                                                style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="last_name"
                                                placeholder="Last Name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                required
                                                className="form-control"
                                                style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="form-control"
                                                style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                                className="form-control"
                                                style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                required
                                                className="form-control"
                                                style={{ width: '100%', padding: '15px', borderRadius: '30px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="ul-btn w-100" disabled={loading}>
                                                {loading ? 'Creating Account...' : 'Register'} <i className="flaticon-right-arrow"></i>
                                            </button>
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            <p>Already have an account? <Link href="/login" className="text-primary fw-bold">Login here</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

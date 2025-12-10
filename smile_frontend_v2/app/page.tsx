'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10 backdrop-blur-sm px-4 py-1.5">
            Amplifying Children's Voices
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            From Cameroon to the World: <br className="hidden md:block" />
            <span className="text-[#FF6B35]">Every Child Deserves to Be Heard</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Founded by Numfor Boris, Smile Organization connects vulnerable children affected by the Anglophone Crisis with compassionate supporters worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg" className="min-w-[180px] text-lg h-14">
                View Stories
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="min-w-[180px] text-lg h-14 border-white text-white hover:bg-white hover:text-gray-900">
                Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION & STATS SECTION */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Restoring Hope in the Midst of Crisis
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2016, the Anglophone Crisis in Cameroon has displaced thousands of children, interrupting their education and shattering their sense of safety.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in the power of storytelling to bridge the gap between these children and a global community that cares. Every donation is a message of hope.
              </p>
              <Link href="/about">
                <Button variant="ghost" className="pl-0 text-[#FF6B35] hover:bg-transparent hover:text-[#E55A2B]">
                  Read Numfor Boris's Story &rarr;
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-2xl text-center">
                <span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">500+</span>
                <span className="text-gray-600 font-medium">Children Supported</span>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl text-center">
                <span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">50+</span>
                <span className="text-gray-600 font-medium">Communities Reached</span>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl text-center col-span-2">
                <span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">100%</span>
                <span className="text-gray-600 font-medium">Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Badge variant="warning" className="mb-4">Urgent Needs</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Stories</h2>
            </div>
            <Link href="/projects" className="hidden md:block">
              <Button variant="ghost">View All Stories &rarr;</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <Card hover>
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Sarah's Story"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="warning" className="bg-white/90 backdrop-blur-sm shadow-sm">Education</Badge>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Help Sarah Return to School</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Displaced by conflict, Sarah hasn't attended school in two years. Your support can provide her with books, uniform, and tuition.
                </p>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div className="bg-[#FF6B35] h-2 rounded-full" style={{ width: '65%' }} />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Raised: $650</span>
                  <span>Goal: $1,000</span>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-100">
                <Link href="/projects/1" className="w-full">
                  <Button variant="secondary" fullWidth>Read Story</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Story Card 2 */}
            <Card hover>
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80"
                  alt="Medical Aid"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="error" className="bg-white/90 backdrop-blur-sm shadow-sm">Medical</Badge>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Emergency Medical Fund</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Providing urgent medical care for children in remote villages with limited access to healthcare facilities.
                </p>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div className="bg-[#FF6B35] h-2 rounded-full" style={{ width: '40%' }} />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Raised: $2,000</span>
                  <span>Goal: $5,000</span>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-100">
                <Link href="/projects/2" className="w-full">
                  <Button variant="secondary" fullWidth>Read Story</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Story Card 3 */}
            <Card hover>
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
                  alt="Clean Water"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="info" className="bg-white/90 backdrop-blur-sm shadow-sm">Water</Badge>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Clean Water for Bamenda</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Building a sustainable water well for a community of 300 people who currently walk 5km for water.
                </p>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div className="bg-[#FF6B35] h-2 rounded-full" style={{ width: '85%' }} />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Raised: $4,250</span>
                  <span>Goal: $5,000</span>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-100">
                <Link href="/projects/3" className="w-full">
                  <Button variant="secondary" fullWidth>Read Story</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/projects">
              <Button variant="outline" fullWidth>View All Stories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">How You Can Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#FF6B35]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">1. Discover</h3>
              <p className="text-gray-600 max-w-sm">
                Browse authentic stories from children and communities verified by our team.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#FF6B35]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">2. Connect</h3>
              <p className="text-gray-600 max-w-sm">
                Choose a cause that resonates with you and make a secure donation.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#FF6B35]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">3. Impact</h3>
              <p className="text-gray-600 max-w-sm">
                Receive updates and see the tangible difference your support makes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join our global community of supporters and help us write a better future for the children of Cameroon.
          </p>
          <Link href="/projects">
            <Button size="lg" className="min-w-[200px] text-lg h-14 bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none">
              Start Donating
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

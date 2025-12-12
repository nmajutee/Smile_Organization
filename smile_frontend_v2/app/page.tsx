'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Arrow icon component
const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION - Kofi Annan Foundation Style */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#006B6B] via-[#007B7B] to-[#005858] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C4A962]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C41E7F]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <Badge variant="secondary" size="lg" className="bg-[#C4A962] text-white">
                Empowering Children Since 2018
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-[1.1] text-balance">
                Advancing hope,{' '}
                <span className="relative inline-block">
                  youth leadership
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C41E7F] rounded-full" />
                </span>{' '}
                and international{' '}
                <span className="text-[#C4A962]">cooperation</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                We build on Numfor Boris's legacy for children, working to ensure 
                that every child in Cameroon has access to education, healthcare, 
                and the opportunity to thrive through dialogue and cooperation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/about">
                  <Button 
                    variant="secondary" 
                    size="xl"
                    icon={<ArrowRight />}
                    className="bg-[#C4A962] hover:bg-[#B39952] text-white"
                  >
                    About the Foundation
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Our Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Hero Image Collage */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main image */}
                <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-20 transform rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                    alt="Children learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Secondary image */}
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-2xl z-10 transform -rotate-6">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                    alt="Community support"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Accent circle */}
                <div className="absolute -bottom-8 right-10 w-32 h-32 bg-[#C41E7F] rounded-full z-30 flex items-center justify-center">
                  <span className="text-white text-center text-sm font-medium px-4">
                    500+ Lives Changed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3">
                Latest news
              </h2>
            </div>
            <Link href="/blog">
              <Button variant="ghost" icon={<ArrowRight />} className="text-[#006B6B]">
                View all news
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured News Card */}
            <div className="md:col-span-2 lg:col-span-2 group">
              <Link href="/blog/1" className="block">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80"
                    alt="Classroom for Peace in Action"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge variant="accent" size="lg" className="mb-3">Education</Badge>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white">
                      Classrooms for Peace in Action
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  Our latest initiative brings quality education to displaced children, 
                  creating safe learning environments in the heart of affected communities.
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-[#006B6B] font-medium group-hover:gap-3 transition-all">
                  Read more <ArrowRight />
                </span>
              </Link>
            </div>

            {/* Side News Cards */}
            <div className="space-y-8">
              <Link href="/blog/2" className="group block">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=200&q=80"
                      alt="Medical outreach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-[#C41E7F] font-medium">Healthcare</span>
                    <h4 className="font-serif font-medium text-gray-900 mt-1 group-hover:text-[#006B6B] transition-colors">
                      Medical Outreach Reaches 200 Children
                    </h4>
                    <span className="text-sm text-gray-500 mt-1">Dec 5, 2025</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/3" className="group block">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=200&q=80"
                      alt="Community gathering"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-[#C4A962] font-medium">Community</span>
                    <h4 className="font-serif font-medium text-gray-900 mt-1 group-hover:text-[#006B6B] transition-colors">
                      New Partnership with Local Leaders
                    </h4>
                    <span className="text-sm text-gray-500 mt-1">Nov 28, 2025</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/4" className="group block">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=200&q=80"
                      alt="Clean water project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-[#006B6B] font-medium">Infrastructure</span>
                    <h4 className="font-serif font-medium text-gray-900 mt-1 group-hover:text-[#006B6B] transition-colors">
                      Clean Water Project Completed
                    </h4>
                    <span className="text-sm text-gray-500 mt-1">Nov 15, 2025</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER OUR FIELDS OF WORK */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3 mb-6">
              Discover our fields of work
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on creating lasting change through education, healthcare, and sustainable 
              community development programs that empower children and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Field Card 1 - Education */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                  alt="Education programs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#006B6B]/90 via-[#006B6B]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#C4A962] text-xs font-medium tracking-wider uppercase">Youth Programs</span>
                  <h3 className="text-2xl font-serif font-semibold text-white mt-2">
                    Empowering youth, to build a peaceful, sustainable future
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Providing quality education, mentorship, and leadership training to young people 
                  affected by the crisis.
                </p>
                <Link href="/projects?category=education">
                  <Button variant="link" icon={<ArrowRight />} className="p-0 text-[#006B6B]">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Field Card 2 - Healthcare */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare programs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C41E7F]/90 via-[#C41E7F]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#C4A962] text-xs font-medium tracking-wider uppercase">Healthcare</span>
                  <h3 className="text-2xl font-serif font-semibold text-white mt-2">
                    Turning back the tide of preventable illness
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Delivering essential medical care, health education, and wellness programs to 
                  underserved communities.
                </p>
                <Link href="/projects?category=healthcare">
                  <Button variant="link" icon={<ArrowRight />} className="p-0 text-[#C41E7F]">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Field Card 3 - Community Development */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 md:col-span-2 lg:col-span-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
                  alt="Community development"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C4A962]/90 via-[#C4A962]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white text-xs font-medium tracking-wider uppercase">Infrastructure</span>
                  <h3 className="text-2xl font-serif font-semibold text-white mt-2">
                    The Smile Way — Advocating for a fairer, more inclusive world
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Building sustainable infrastructure and creating opportunities for economic 
                  empowerment in local communities.
                </p>
                <Link href="/projects?category=community">
                  <Button variant="link" icon={<ArrowRight />} className="p-0 text-[#A68B3D]">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-20 md:py-28 bg-[#006B6B]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-16 h-16 mx-auto mb-8 text-[#C4A962]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed mb-8">
              "I am convinced more than ever that any society that does not succeed 
              in tapping into the energy and creativity of its youth will be left behind."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#C4A962] flex items-center justify-center text-white font-serif font-semibold text-xl">
                NB
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Numfor Boris</p>
                <p className="text-white/70 text-sm">Founder, Smile Organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT FOUNDER SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Numfor Boris - Founder"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <Badge variant="secondary" className="mb-2">Founder</Badge>
                  <h3 className="text-2xl font-serif font-semibold text-white">Numfor Boris</h3>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FCF0F6] rounded-2xl -z-10" />
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mt-3">
                  Numfor Boris
                </h2>
                <p className="text-lg text-[#006B6B] font-medium mt-2">
                  Founder · Youth Advocate · Changemaker
                </p>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg italic border-l-4 border-[#C41E7F] pl-6">
                  "Inclusion, diversity, gender equality, and sustainability are at the heart 
                  of everything we do."
                </p>
                <p>
                  We want to build a better and more peaceful world, where every child has 
                  access to education, healthcare, and opportunities for a brighter future. 
                  Through dialogue and international cooperation, we create lasting change.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/about">
                  <Button variant="primary" size="lg" icon={<ArrowRight />}>
                    Read Full Story
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">Make a Difference</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3">
                Projects
              </h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" icon={<ArrowRight />}>
                Discover more projects
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project Card 1 */}
            <Link href="/projects/1" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                    alt="What Happens When You Invest in a Girl"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-medium text-gray-900 group-hover:text-[#006B6B] transition-colors">
                    What Happens When You Invest in a Girl
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[#006B6B] font-medium">
                    Learn more <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>

            {/* Project Card 2 */}
            <Link href="/projects/2" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80"
                    alt="Racing for the Future"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-medium text-gray-900 group-hover:text-[#006B6B] transition-colors">
                    Racing for the Future
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[#006B6B] font-medium">
                    Learn more <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>

            {/* Project Card 3 */}
            <Link href="/projects/3" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
                    alt="The Sahel Project"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-medium text-gray-900 group-hover:text-[#006B6B] transition-colors">
                    The Sahel Project
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[#006B6B] font-medium">
                    Learn more <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>

            {/* Project Card 4 */}
            <Link href="/projects/4" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80"
                    alt="Community Voices"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-medium text-gray-900 group-hover:text-[#006B6B] transition-colors">
                    Community Voices
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[#006B6B] font-medium">
                    Learn more <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SUPPORT US CTA */}
      <section className="py-20 md:py-28 bg-[#C41E7F]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                Support us with your philanthropic gifts and grants
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Your contribution helps us continue our mission of empowering children 
                and building stronger communities across Cameroon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/projects">
                  <Button 
                    variant="secondary" 
                    size="xl"
                    icon={<ArrowRight />}
                    className="bg-[#C4A962] hover:bg-[#B39952] text-white"
                  >
                    Make a donation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80"
                  alt="Children learning"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">Our Reach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3 mb-6">
              Global Impact
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Smile Organization Foundation's work is made possible by our donors and supporters 
              from around the world who share our vision for a better future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-serif font-bold text-[#006B6B]">500+</span>
              <span className="text-gray-600 mt-2 block">Children Supported</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-serif font-bold text-[#C41E7F]">50+</span>
              <span className="text-gray-600 mt-2 block">Communities</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-serif font-bold text-[#C4A962]">15+</span>
              <span className="text-gray-600 mt-2 block">Active Projects</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-serif font-bold text-[#006B6B]">100%</span>
              <span className="text-gray-600 mt-2 block">Transparency</span>
            </div>
          </div>

          {/* Impact Cards */}
          <div className="relative bg-[#FAFAF8] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#E6F3F3] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#006B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2">Education First</h3>
                <p className="text-sm text-gray-600">Building schools and providing educational resources to underserved communities.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#FCF0F6] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C41E7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2">Healthcare Access</h3>
                <p className="text-sm text-gray-600">Providing essential medical care and health education to those in need.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#FBF8F0] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C4A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2">Community Building</h3>
                <p className="text-sm text-gray-600">Empowering local leaders and fostering sustainable development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

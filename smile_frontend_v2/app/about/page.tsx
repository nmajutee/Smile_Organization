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

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-[#006B6B] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#C4A962]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C41E7F]/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" size="lg" className="bg-[#C4A962] text-white mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6">
              Building a brighter future for every child in Cameroon
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Founded in the heart of crisis, Smile Organization has become a beacon of hope 
              for vulnerable children, providing education, healthcare, and sustainable support.
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 55C840 60 960 70 1080 72C1200 74 1320 68 1380 65L1440 62V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                  alt="Numfor Boris with children"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <span className="text-[#C4A962] text-sm font-medium">Founder & Visionary</span>
                  <h3 className="text-2xl font-serif font-semibold text-white mt-1">Numfor Boris</h3>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#E6F3F3] rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FCF0F6] rounded-2xl -z-10" />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3 mb-6">
                "I couldn't stand by and watch a generation be lost."
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">Numfor Boris</strong> founded Smile Organization in 2018, 
                  right as the Anglophone Crisis began to tear through communities in Cameroon.
                </p>
                <p>
                  Witnessing children displaced from their homes, schools burning down, and families 
                  separated, Boris realized that while he couldn't stop the conflict, he could help the victims.
                </p>
                <p className="text-lg italic border-l-4 border-[#C41E7F] pl-6 my-8">
                  "Every child has a story. And if we can get those stories to the world, 
                  we can find the help they need to survive and dream again."
                </p>
                <p>
                  Today, Smile Organization has grown from a one-person mission to a network of 
                  dedicated volunteers and supporters spanning the globe, united by a single purpose: 
                  ensuring no child is left behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission" className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-[#E6F3F3] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#006B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To connect vulnerable children in Cameroon with compassionate supporters worldwide, 
                providing direct assistance in education, healthcare, and basic needs through 
                transparent, story-driven fundraising.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-[#FCF0F6] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#C41E7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                A world where every child affected by crisis has access to education, safety, 
                and the opportunity to thrive—regardless of circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3 mb-6">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These principles guide everything we do, from how we support children 
              to how we partner with donors and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="group p-8 rounded-2xl bg-[#FAFAF8] hover:bg-[#E6F3F3] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-[#006B6B] text-white flex items-center justify-center mb-6 text-xl font-serif font-bold">
                1
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                Every donation is tracked. Every story is verified. Donors see exactly where their support goes.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group p-8 rounded-2xl bg-[#FAFAF8] hover:bg-[#FCF0F6] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-[#C41E7F] text-white flex items-center justify-center mb-6 text-xl font-serif font-bold">
                2
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Child-Centered</h3>
              <p className="text-gray-600">
                Children are at the heart of everything. Their safety, dignity, and future come first.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group p-8 rounded-2xl bg-[#FAFAF8] hover:bg-[#FBF8F0] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-[#C4A962] text-white flex items-center justify-center mb-6 text-xl font-serif font-bold">
                3
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Community-Driven</h3>
              <p className="text-gray-600">
                We work with local leaders and families to ensure support is culturally appropriate and sustainable.
              </p>
            </div>

            {/* Value 4 */}
            <div className="group p-8 rounded-2xl bg-[#FAFAF8] hover:bg-[#E6F3F3] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-[#006B6B] text-white flex items-center justify-center mb-6 text-xl font-serif font-bold">
                4
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Hope-Driven</h3>
              <p className="text-gray-600">
                We believe every child deserves hope. Our work is about creating possibilities, not just meeting needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY */}
      <section className="py-20 md:py-28 bg-[#006B6B]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A962] text-sm font-medium tracking-wider uppercase">Our Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mt-3">
              Milestones That Define Us
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Milestone 1 */}
            <div className="relative">
              <div className="text-6xl font-serif font-bold text-[#C4A962] mb-4">2018</div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Foundation</h3>
              <p className="text-white/70">
                Smile Organization is born in the midst of the Anglophone Crisis, starting with 5 children.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="relative">
              <div className="text-6xl font-serif font-bold text-[#C4A962] mb-4">2020</div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Going Digital</h3>
              <p className="text-white/70">
                Launch of our online platform, connecting donors directly with children's stories.
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="relative">
              <div className="text-6xl font-serif font-bold text-[#C4A962] mb-4">2023</div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">500+ Children</h3>
              <p className="text-white/70">
                Milestone of supporting over 500 children with education and healthcare.
              </p>
            </div>

            {/* Milestone 4 */}
            <div className="relative">
              <div className="text-6xl font-serif font-bold text-[#C4A962] mb-4">2025</div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">The Future</h3>
              <p className="text-white/70">
                Expanding our reach with new programs in sustainable community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">The People Behind</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3 mb-6">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A dedicated group of individuals united by a shared commitment to making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Numfor Boris"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900">Numfor Boris</h3>
              <p className="text-[#006B6B] font-medium mb-2">Founder & Executive Director</p>
              <p className="text-gray-600 text-sm">
                Visionary leader dedicated to transforming children's lives through education and compassion.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                  alt="Community Coordinator"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900">Grace Nkeng</h3>
              <p className="text-[#C41E7F] font-medium mb-2">Community Coordinator</p>
              <p className="text-gray-600 text-sm">
                Bridging the gap between communities and resources with cultural sensitivity.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center">
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
                  alt="Program Manager"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900">Peter Tabi</h3>
              <p className="text-[#C4A962] font-medium mb-2">Program Manager</p>
              <p className="text-gray-600 text-sm">
                Overseeing project implementation and ensuring maximum impact for every initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-[#C41E7F]">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              Whether you donate, volunteer, or simply share our story, you become 
              part of a global family working to ensure no child is left behind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button 
                  variant="secondary" 
                  size="xl"
                  icon={<ArrowRight />}
                  className="bg-[#C4A962] hover:bg-[#B39952] text-white"
                >
                  Support a Child
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

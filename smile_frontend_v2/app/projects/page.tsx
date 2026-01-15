'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Arrow icon component
const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Help Sarah Return to School",
    category: "education",
    description: "Displaced by conflict, Sarah hasn't attended school in two years. Your support can provide her with books, uniform, and tuition.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    raised: 650,
    goal: 1000,
    urgent: true,
  },
  {
    id: 2,
    title: "Emergency Medical Fund",
    category: "healthcare",
    description: "Providing urgent medical care for children in remote villages with limited access to healthcare facilities.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
    raised: 2000,
    goal: 5000,
    urgent: true,
  },
  {
    id: 3,
    title: "Clean Water for Bamenda",
    category: "infrastructure",
    description: "Building a sustainable water well for a community of 300 people who currently walk 5km for water.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    raised: 4250,
    goal: 5000,
    urgent: false,
  },
  {
    id: 4,
    title: "School Supplies for 50 Children",
    category: "education",
    description: "Equipping displaced children with essential school supplies to continue their education journey.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    raised: 800,
    goal: 2000,
    urgent: false,
  },
  {
    id: 5,
    title: "Youth Leadership Program",
    category: "community",
    description: "Training young leaders to become advocates for peace and development in their communities.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
    raised: 1500,
    goal: 3000,
    urgent: false,
  },
  {
    id: 6,
    title: "Mobile Health Clinic",
    category: "healthcare",
    description: "Bringing essential healthcare services to remote communities through our mobile clinic initiative.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    raised: 3200,
    goal: 8000,
    urgent: true,
  },
];

const categories = [
  { id: 'all', name: 'All Projects', color: '#006B6B' },
  { id: 'education', name: 'Education', color: '#006B6B' },
  { id: 'healthcare', name: 'Healthcare', color: '#C41E7F' },
  { id: 'infrastructure', name: 'Infrastructure', color: '#C4A962' },
  { id: 'community', name: 'Community', color: '#006B6B' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'education': return { bg: '#E6F3F3', text: '#006B6B' };
      case 'healthcare': return { bg: '#FCF0F6', text: '#C41E7F' };
      case 'infrastructure': return { bg: '#FBF8F0', text: '#A68B3D' };
      case 'community': return { bg: '#E6F3F3', text: '#006B6B' };
      default: return { bg: '#F5F5F5', text: '#666' };
    }
  };

  const getProgressColor = (category: string) => {
    switch(category) {
      case 'education': return '#006B6B';
      case 'healthcare': return '#C41E7F';
      case 'infrastructure': return '#C4A962';
      case 'community': return '#006B6B';
      default: return '#006B6B';
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#006B6B] via-[#007B7B] to-[#005858] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#C4A962]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C41E7F]/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" size="lg" className="bg-[#C4A962] text-white mb-6">
              Make a Difference Today
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6">
              Support Our Projects
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Each project represents a real child, a real family, a real community. 
              Your support creates lasting change.
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 55C840 60 960 70 1080 72C1200 74 1320 68 1380 65L1440 62V80H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* FILTER & PROJECTS */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#006B6B] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: getCategoryColor(project.category).bg,
                        color: getCategoryColor(project.category).text
                      }}
                    >
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    {project.urgent && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#C41E7F] text-white">
                        Urgent
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-[#006B6B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-900">${project.raised.toLocaleString()} raised</span>
                      <span className="text-gray-500">of ${project.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${Math.min((project.raised / project.goal) * 100, 100)}%`,
                          backgroundColor: getProgressColor(project.category)
                        }}
                      />
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-500">
                        {Math.round((project.raised / project.goal) * 100)}% funded
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="primary" fullWidth>
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C41E7F] text-sm font-medium tracking-wider uppercase">Simple & Transparent</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mt-3 mb-6">
              How Your Donation Works
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in complete transparency. Here's exactly how your contribution makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#E6F3F3] flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-serif font-bold text-[#006B6B]">1</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Choose a Project</h3>
              <p className="text-gray-600">
                Browse verified stories and select a cause that resonates with your heart.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#FCF0F6] flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-serif font-bold text-[#C41E7F]">2</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Make Your Gift</h3>
              <p className="text-gray-600">
                Donate securely online. 100% of your donation goes directly to the project.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#FBF8F0] flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-serif font-bold text-[#C4A962]">3</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">See the Impact</h3>
              <p className="text-gray-600">
                Receive updates and photos showing exactly how your donation helped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-[#006B6B]">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              Can't decide? Give to where it's needed most.
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              Your unrestricted gift allows us to direct funds to the most urgent needs, 
              ensuring maximum impact for children who need it most.
            </p>
            <Link href="/donate">
              <Button 
                variant="secondary" 
                size="xl"
                icon={<ArrowRight />}
                className="bg-[#C4A962] hover:bg-[#B39952] text-white"
              >
                Give to General Fund
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

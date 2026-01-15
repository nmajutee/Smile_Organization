'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FAQSection, TrustSignals, Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo-config';

// FAQ data
const faqs = [
  {
    question: 'How can I volunteer with Smile Organization in Cameroon?',
    answer: 'To volunteer with Smile Organization, you can apply through our website or contact us directly. We offer both short-term (2-4 weeks) and long-term (1-12 months) volunteer opportunities. We\'ll work with you to find a role that matches your skills and interests. Volunteers work in education, feeding programs, healthcare support, and community development.',
  },
  {
    question: 'Do I need any qualifications to volunteer in Cameroon?',
    answer: 'While some positions require specific qualifications (like medical or teaching credentials), most volunteer roles just require enthusiasm, flexibility, and a willingness to help. Basic skills like teaching, childcare, administrative work, or construction are valuable. We provide orientation and training for all volunteers.',
  },
  {
    question: 'Is it safe to volunteer in Cameroon?',
    answer: 'We prioritize volunteer safety. While Cameroon has faced some security challenges, we operate in areas that are safe for international visitors. We provide comprehensive safety briefings, local guides, and 24/7 support. Our team has years of experience hosting international volunteers safely.',
  },
  {
    question: 'What does it cost to volunteer in Cameroon?',
    answer: 'Volunteers cover their own travel, visa, and vaccination costs. For accommodation and meals, we charge a modest program fee (starting from 200,000 XAF per week) that covers housing, food, and local transportation. This fee also helps support our programs. Some volunteers fundraise to cover these costs.',
  },
  {
    question: 'Can I volunteer remotely or from my home country?',
    answer: 'Yes! We have remote volunteer opportunities including social media management, grant writing, translation (English/French), website development, graphic design, and fundraising. Remote volunteers play a crucial role in supporting our mission from anywhere in the world.',
  },
  {
    question: 'How long can I volunteer for?',
    answer: 'We welcome volunteers for any duration from 2 weeks to 12 months. Longer commitments allow for deeper engagement and greater impact. Most in-person volunteers stay 4-8 weeks, while remote volunteers often commit to ongoing support of a few hours per week.',
  },
];

// Volunteer opportunities
const volunteerOpportunities = [
  {
    title: 'Teaching & Education',
    icon: 'fa-chalkboard-teacher',
    description: 'Teach English, math, science, or arts to children in our schools and learning centers. Help with homework assistance and tutoring.',
    duration: '2-12 weeks',
    skills: 'Teaching experience preferred but not required',
  },
  {
    title: 'Feeding Programs',
    icon: 'fa-utensils',
    description: 'Help prepare and serve meals at our feeding centers. Assist with food distribution to families in need.',
    duration: '1-4 weeks',
    skills: 'No special skills required',
  },
  {
    title: 'Healthcare Support',
    icon: 'fa-heartbeat',
    description: 'Medical professionals can provide healthcare services, health education, and support our mobile clinics.',
    duration: '2-8 weeks',
    skills: 'Medical qualifications required',
  },
  {
    title: 'Construction & Renovation',
    icon: 'fa-hammer',
    description: 'Help build or renovate schools, wells, community centers, and other infrastructure projects.',
    duration: '2-8 weeks',
    skills: 'Construction skills helpful',
  },
  {
    title: 'Community Development',
    icon: 'fa-users',
    description: 'Work on sustainable development projects including agriculture, women\'s empowerment, and vocational training.',
    duration: '4-12 weeks',
    skills: 'Project management skills helpful',
  },
  {
    title: 'Remote/Virtual Volunteering',
    icon: 'fa-laptop',
    description: 'Support our mission from home through social media, grant writing, translation, web development, or fundraising.',
    duration: 'Flexible',
    skills: 'Various digital skills',
  },
];

export default function VolunteerCameroonPage() {
  const pageDescription = 'Volunteer in Cameroon with Smile Organization. Join our volunteer programs to help children, build schools, dig wells, and make a lasting impact in African communities.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Volunteer in Cameroon | Africa Volunteer Programs',
    description: pageDescription,
    url: `${SITE_CONFIG.url}/volunteer-cameroon`,
    about: {
      '@type': 'Thing',
      name: 'Volunteer opportunities in Cameroon',
    },
  };

  const volunteerSchema = {
    '@context': 'https://schema.org',
    '@type': 'VolunteerAction',
    name: 'Volunteer with Smile Organization',
    description: 'Join our volunteer programs in Cameroon to help children with education, feeding programs, and healthcare.',
    location: {
      '@type': 'Place',
      name: 'Bamenda, Cameroon',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bamenda',
        addressCountry: 'CM',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <>
      <JsonLd data={[pageSchema, volunteerSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Volunteer in Cameroon</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Make a difference with your time and skills. Join our volunteer programs in Cameroon
              and help change lives while experiencing African culture.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Volunteer in Cameroon', href: '/volunteer-cameroon' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Why Volunteer Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">Make a Difference</p>
                <h2 className="display-6 mb-4">Why Volunteer in Cameroon?</h2>
              </div>

              <p className="lead">
                Volunteering in Cameroon offers a unique opportunity to make a real impact while
                immersing yourself in African culture and creating memories that last a lifetime.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 btn-lg-square bg-primary me-3">
                      <i className="fa fa-globe text-white"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Cultural Immersion</h6>
                      <p className="text-muted mb-0">
                        Experience the warmth of Cameroonian hospitality, learn local languages,
                        and explore beautiful landscapes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 btn-lg-square bg-primary me-3">
                      <i className="fa fa-heart text-white"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Direct Impact</h6>
                      <p className="text-muted mb-0">
                        Your work directly helps children and communities. See the results of
                        your efforts every day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 btn-lg-square bg-primary me-3">
                      <i className="fa fa-user-graduate text-white"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Personal Growth</h6>
                      <p className="text-muted mb-0">
                        Develop new skills, gain international experience, and grow as a person
                        while helping others.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 btn-lg-square bg-primary me-3">
                      <i className="fa fa-users text-white"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Join a Community</h6>
                      <p className="text-muted mb-0">
                        Connect with like-minded volunteers from around the world and build
                        lasting friendships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary py-3 px-5">
                Apply to Volunteer <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative h-100" style={{ minHeight: '500px' }}>
                <Image
                  src="/gallery/about-smile-alwayz-organization.jpg"
                  alt="Volunteers working with children in Cameroon"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Opportunities</p>
            <h2 className="display-6">Volunteer Programs Available</h2>
            <p className="text-muted">Choose a program that matches your skills and interests</p>
          </div>
          <div className="row g-4">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="btn-lg-square bg-primary rounded-circle mb-4">
                      <i className={`fa ${opportunity.icon} fa-2x text-white`}></i>
                    </div>
                    <h5 className="card-title">{opportunity.title}</h5>
                    <p className="card-text text-muted">{opportunity.description}</p>
                    <div className="mt-3">
                      <small className="text-muted d-block">
                        <i className="fa fa-clock me-2"></i>Duration: {opportunity.duration}
                      </small>
                      <small className="text-muted d-block">
                        <i className="fa fa-check me-2"></i>{opportunity.skills}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Your Experience</p>
            <h2 className="display-6">What to Expect as a Volunteer</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="text-primary mb-3"><i className="fa fa-home me-2"></i>Accommodation</h5>
              <p>
                Volunteers stay in safe, comfortable shared housing with other volunteers.
                Accommodations include private or shared rooms, running water, and electricity.
                We provide bedding and basic amenities.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary mb-3"><i className="fa fa-utensils me-2"></i>Meals</h5>
              <p>
                Three meals per day are provided, featuring delicious Cameroonian cuisine.
                We can accommodate dietary restrictions with advance notice.
                Experience local dishes like ndolé, achu, and fufu corn.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary mb-3"><i className="fa fa-calendar-alt me-2"></i>Daily Schedule</h5>
              <p>
                Volunteers typically work 5-6 hours per day, Monday through Friday.
                Weekends are free for exploring, relaxing, or optional activities.
                We balance meaningful work with cultural experiences.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary mb-3"><i className="fa fa-users me-2"></i>Support</h5>
              <p>
                You&apos;ll have a dedicated coordinator, orientation upon arrival, and 24/7 support.
                We help with visa advice, airport pickup, and cultural integration.
                You&apos;re never alone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Process */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">How to Apply</p>
            <h2 className="display-6">Volunteer Application Process</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3 text-center">
              <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">1</span>
              </div>
              <h5>Apply Online</h5>
              <p className="text-muted">Submit your application through our website or contact us directly</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">2</span>
              </div>
              <h5>Interview</h5>
              <p className="text-muted">We&apos;ll schedule a video call to discuss your interests and placement</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">3</span>
              </div>
              <h5>Prepare</h5>
              <p className="text-muted">Complete pre-departure checklist, visa, and travel arrangements</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">4</span>
              </div>
              <h5>Arrive & Serve</h5>
              <p className="text-muted">We&apos;ll meet you at the airport and begin your volunteer journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Fees */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Program Fees</p>
            <h2 className="display-6">Volunteer Program Costs</h2>
            <p className="text-muted">Fees cover accommodation, meals, and local support</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">2 Weeks</h5>
                  <h2 className="text-primary mb-3">400,000 XAF</h2>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Shared accommodation</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>3 meals daily</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Airport pickup</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Orientation</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-primary shadow text-center">
                <div className="card-header bg-primary text-white py-2">
                  <strong>Most Popular</strong>
                </div>
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">4 Weeks</h5>
                  <h2 className="text-primary mb-3">700,000 XAF</h2>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Everything in 2-week</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Cultural excursion</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Language lessons</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Certificate</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>15% discount</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">8+ Weeks</h5>
                  <h2 className="text-primary mb-3">Contact Us</h2>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Custom program design</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Significant discounts</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Leadership roles</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Project ownership</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i>Reference letter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted small">
              Note: Program fees do not include flights, visa, travel insurance, or personal expenses.
              A portion of fees directly supports our programs.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Volunteering"
      />

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-white fs-5 mb-4">
            Join our team of volunteers and help change lives in Cameroon.
            Whether you can give a few weeks or a few months, your contribution matters.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/contact" className="btn btn-light py-3 px-5">
              Apply to Volunteer <i className="fa fa-arrow-right ms-2"></i>
            </Link>
            <Link href="/donation" className="btn btn-outline-light py-3 px-5">
              Or Donate Instead
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

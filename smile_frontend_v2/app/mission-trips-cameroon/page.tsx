'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FAQSection, TrustSignals, Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo-config';

// FAQ data
const faqs = [
  {
    question: 'What are mission trips to Cameroon like?',
    answer: 'Mission trips to Cameroon with Smile Organization combine service work with cultural immersion and optional spiritual activities. Groups typically serve 4-8 hours daily through teaching, construction, healthcare outreach, or community development. Evenings include cultural experiences, team devotions, and reflection. It\'s a transformative experience for both visitors and the communities we serve.',
  },
  {
    question: 'How long are mission trips to Cameroon?',
    answer: 'We offer flexible mission trip durations: Short-term trips (7-10 days) are ideal for first-time visitors; Standard trips (2 weeks) allow deeper engagement; Extended trips (3-4 weeks) enable significant project completion. We can customize trip length for church groups, schools, or organizations.',
  },
  {
    question: 'What type of mission work can groups do?',
    answer: 'Groups can engage in: Education (teaching, tutoring, school supplies distribution); Construction (building schools, wells, renovations); Healthcare (medical clinics, health education - medical professionals required); Community Development (agriculture, women\'s empowerment); Children\'s Ministry (VBS, sports camps, arts); Evangelism and discipleship (for faith-based groups).',
  },
  {
    question: 'How much does a mission trip to Cameroon cost?',
    answer: 'Mission trip costs depend on group size and duration. A typical 2-week trip costs approximately 800,000-1,200,000 XAF per person, including accommodation, meals, local transportation, project materials, and guided excursions. This does not include international flights, visa, travel insurance, or personal expenses. We provide detailed budgets for planning.',
  },
  {
    question: 'Can we bring our own church or youth group?',
    answer: 'Absolutely! We welcome church groups, youth groups, student organizations, and corporate teams. We work with group leaders to customize the experience based on your group\'s interests, skills, and spiritual goals. We can accommodate groups of 5-25 people and provide local logistics, project coordination, and cultural guidance.',
  },
  {
    question: 'Is it safe to bring a mission team to Cameroon?',
    answer: 'Safety is our top priority. We have hosted mission teams for years without incident. We operate in safe areas, provide 24/7 local support, conduct thorough safety briefings, and have emergency protocols in place. We monitor conditions closely and maintain relationships with local authorities. All team members receive pre-trip preparation materials.',
  },
];

// Mission trip options
const missionTrips = [
  {
    title: 'Education & Youth Ministry',
    image: '/gallery/smile-organization.jpg',
    duration: '7-14 days',
    activities: ['Teaching in schools', 'VBS programs', 'Sports camps', 'Tutoring', 'School supplies distribution'],
    bestFor: 'Youth groups, educators, college students',
  },
  {
    title: 'Construction & Development',
    image: '/gallery/about-smile-alwayz-organization.jpg',
    duration: '10-21 days',
    activities: ['Building schools', 'Well construction', 'Renovation projects', 'Sustainable agriculture', 'Infrastructure development'],
    bestFor: 'Construction teams, skilled volunteers',
  },
  {
    title: 'Medical Missions',
    image: '/gallery/InShot_20230911_205611720.jpg',
    duration: '7-14 days',
    activities: ['Mobile clinics', 'Health screenings', 'Health education', 'Maternal care', 'Pharmacy assistance'],
    bestFor: 'Medical professionals, nursing students',
  },
];

// What's included
const included = [
  { icon: 'fa-bed', title: 'Accommodation', description: 'Safe, comfortable lodging for your entire team' },
  { icon: 'fa-utensils', title: 'Meals', description: 'Three nutritious meals daily featuring local cuisine' },
  { icon: 'fa-bus', title: 'Local Transport', description: 'All ground transportation during your trip' },
  { icon: 'fa-users', title: 'Project Coordination', description: 'Full planning and on-site project management' },
  { icon: 'fa-map', title: 'Cultural Excursions', description: 'Guided visits to local attractions and markets' },
  { icon: 'fa-hands-helping', title: 'Local Support', description: '24/7 in-country support and translators' },
];

export default function MissionTripsCameroonPage() {
  const pageDescription = 'Join mission trips to Cameroon with Smile Organization. Serve communities through education, healthcare, construction, and evangelism while experiencing African culture.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mission Trips to Cameroon | Africa Mission Work',
    description: pageDescription,
    url: `${SITE_CONFIG.url}/mission-trips-cameroon`,
    about: {
      '@type': 'Thing',
      name: 'Mission trips to Cameroon',
    },
  };

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Mission Trip to Cameroon',
    description: 'Join a mission trip to Cameroon to serve communities through education, healthcare, and construction projects.',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
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
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XAF',
    },
  };

  return (
    <>
      <JsonLd data={[pageSchema, eventSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Mission Trips to Cameroon</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Bring your church, school, or organization on a life-changing mission trip to Cameroon.
              Serve communities, experience African culture, and make a lasting impact.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Mission Trips to Cameroon', href: '/mission-trips-cameroon' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Why Mission Trips Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative h-100" style={{ minHeight: '500px' }}>
                <Image
                  src="/gallery/smile-organization.jpg"
                  alt="Mission team serving in Cameroon"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">Transform Lives</p>
                <h2 className="display-6 mb-4">Why Mission Trips to Africa?</h2>
              </div>

              <p className="lead">
                A mission trip to Cameroon is more than travel – it&apos;s a transformative experience
                that changes both the visitors and the communities they serve.
              </p>

              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-check-circle text-primary me-3 mt-1"></i>
                  <div>
                    <strong>Make a tangible difference</strong> – Build something that lasts, teach skills
                    that empower, provide care that heals.
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-check-circle text-primary me-3 mt-1"></i>
                  <div>
                    <strong>Grow personally and spiritually</strong> – Step out of your comfort zone
                    and return with new perspectives.
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-check-circle text-primary me-3 mt-1"></i>
                  <div>
                    <strong>Build team unity</strong> – Shared service creates bonds that last long
                    after the trip ends.
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-check-circle text-primary me-3 mt-1"></i>
                  <div>
                    <strong>Experience African culture</strong> – Immerse yourself in Cameroon&apos;s
                    rich traditions, food, and hospitality.
                  </div>
                </li>
              </ul>

              <Link href="/contact" className="btn btn-primary py-3 px-5">
                Plan Your Mission Trip <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Trip Options */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Trip Options</p>
            <h2 className="display-6">Choose Your Mission Focus</h2>
            <p className="text-muted">We customize trips based on your group&apos;s interests and skills</p>
          </div>
          <div className="row g-4">
            {missionTrips.map((trip, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative" style={{ height: '200px' }}>
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{trip.title}</h5>
                    <p className="text-muted small mb-2">
                      <i className="fa fa-clock me-1"></i> Duration: {trip.duration}
                    </p>
                    <p className="text-muted small mb-3">
                      <i className="fa fa-users me-1"></i> Best for: {trip.bestFor}
                    </p>
                    <h6 className="mb-2">Activities include:</h6>
                    <ul className="small mb-0">
                      {trip.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">What&apos;s Included</p>
            <h2 className="display-6">Full-Service Mission Trip Support</h2>
          </div>
          <div className="row g-4">
            {included.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 btn-lg-square bg-primary me-3">
                    <i className={`fa ${item.icon} text-white`}></i>
                  </div>
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Itinerary */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Sample Schedule</p>
            <h2 className="display-6">10-Day Mission Trip Itinerary</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="timeline">
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="btn-lg-square bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}>
                      <span className="text-white small d-flex justify-content-center align-items-center h-100">Day 1</span>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h6>Arrival & Welcome</h6>
                    <p className="text-muted mb-0">Airport pickup, orientation, team dinner, rest</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="btn-lg-square bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}>
                      <span className="text-white small d-flex justify-content-center align-items-center h-100">Day 2</span>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h6>Cultural Orientation</h6>
                    <p className="text-muted mb-0">Visit project sites, meet community leaders, cultural training</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="btn-lg-square bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}>
                      <span className="text-white small d-flex justify-content-center align-items-center h-100">Days 3-8</span>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h6>Service Days</h6>
                    <p className="text-muted mb-0">Morning service work, lunch with community, afternoon activities, evening reflection</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="btn-lg-square bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}>
                      <span className="text-white small d-flex justify-content-center align-items-center h-100">Day 9</span>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h6>Cultural Excursion</h6>
                    <p className="text-muted mb-0">Visit local attractions, markets, waterfalls, or wildlife</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="btn-lg-square bg-primary rounded-circle" style={{ width: '50px', height: '50px' }}>
                      <span className="text-white small d-flex justify-content-center align-items-center h-100">Day 10</span>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h6>Farewell & Departure</h6>
                    <p className="text-muted mb-0">Closing ceremony, team reflection, airport transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <i className="fa fa-quote-left fa-3x text-primary mb-4"></i>
              <p className="lead fst-italic mb-4">
                &ldquo;Our church group spent two weeks in Cameroon building a school with Smile Organization.
                It was the most impactful experience of my life. The children&apos;s joy, the community&apos;s gratitude,
                and the bonds we formed as a team were incredible. We&apos;re already planning our return trip.&rdquo;
              </p>
              <h5>Pastor Michael Johnson</h5>
              <p className="text-muted">Grace Community Church, Texas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Pricing</p>
            <h2 className="display-6">Mission Trip Costs</h2>
            <p className="text-muted">Group discounts available for 10+ participants</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">7-Day Trip</h5>
                  <h2 className="text-primary mb-3">600,000 XAF</h2>
                  <p className="text-muted small">per person</p>
                  <Link href="/contact" className="btn btn-outline-primary mt-3">Request Info</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-primary shadow text-center">
                <div className="card-header bg-primary text-white py-2">
                  <strong>Most Popular</strong>
                </div>
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">10-14 Day Trip</h5>
                  <h2 className="text-primary mb-3">900,000 XAF</h2>
                  <p className="text-muted small">per person</p>
                  <Link href="/contact" className="btn btn-primary mt-3">Request Info</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">3-4 Week Trip</h5>
                  <h2 className="text-primary mb-3">1,500,000 XAF</h2>
                  <p className="text-muted small">per person</p>
                  <Link href="/contact" className="btn btn-outline-primary mt-3">Request Info</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted small">
              Prices include accommodation, meals, local transport, project materials, and in-country support.
              Does not include international flights, visa, travel insurance, or personal expenses.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Mission Trips"
      />

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Ready to Plan Your Mission Trip?</h2>
          <p className="text-white fs-5 mb-4">
            Contact us to discuss your group&apos;s mission trip to Cameroon.
            We&apos;ll work with you to create a meaningful experience that fits your goals.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/contact" className="btn btn-light py-3 px-5">
              Plan Your Trip <i className="fa fa-arrow-right ms-2"></i>
            </Link>
            <Link href="/donation" className="btn btn-outline-light py-3 px-5">
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

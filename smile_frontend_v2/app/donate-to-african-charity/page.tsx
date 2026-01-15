'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FAQSection, TrustSignals, Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG, generateDonateActionSchema } from '@/lib/seo-config';

// FAQ data for schema
const faqs = [
  {
    question: 'Why should I donate to an African charity?',
    answer: 'Donating to African charities directly addresses critical issues like child hunger, lack of clean water, limited access to education, and healthcare shortages. Your donation has a powerful impact because the cost of living is lower, meaning every dollar goes further in providing essential resources to those in need.',
  },
  {
    question: 'How do I know my donation will be used effectively?',
    answer: 'Smile Organization is committed to transparency. We publish annual reports showing exactly how donations are spent, with 90% of funds going directly to programs. We are a registered nonprofit in Cameroon and provide regular updates on our projects.',
  },
  {
    question: 'What is the best African charity to donate to?',
    answer: 'The best African charity depends on your values and the cause you want to support. Smile Organization is highly rated for our work with children in Cameroon, focusing on education, hunger relief, clean water access, and healthcare. We are locally-based, which means low overhead and maximum impact.',
  },
  {
    question: 'Can I donate to African charities from outside Africa?',
    answer: 'Yes! Smile Organization accepts donations from anywhere in the world. We accept multiple payment methods including mobile money (MTN, Orange), credit cards, and bank transfers. International donors can easily contribute to our cause.',
  },
  {
    question: 'Is my donation to an African charity tax-deductible?',
    answer: 'Tax deductibility depends on your country\'s regulations. In many countries, donations to registered nonprofit organizations may be tax-deductible. We provide donation receipts that you can use for your tax records. Consult with a tax professional in your country for specific guidance.',
  },
  {
    question: 'What causes does Smile Organization support?',
    answer: 'Smile Organization supports four main causes: (1) Education - providing school supplies, scholarships, and building schools; (2) Hunger Relief - feeding programs for malnourished children; (3) Clean Water - drilling wells and water purification systems; (4) Healthcare - medical care, vaccinations, and health education.',
  },
];

// Stats data
const impactStats = [
  { icon: 'fa-child', number: '50,000+', label: 'Children Helped' },
  { icon: 'fa-utensils', number: '2M+', label: 'Meals Provided' },
  { icon: 'fa-tint', number: '25+', label: 'Wells Built' },
  { icon: 'fa-graduation-cap', number: '5,000+', label: 'School Scholarships' },
];

export default function DonateToAfricanCharityPage() {
  const donateActionSchema = generateDonateActionSchema();

  const pageDescription = 'Looking for the best African charities to donate to? Smile Organization is a trusted Cameroon-based charity helping children with education, food, clean water, and healthcare. Your donation makes a real difference.';

  // Page-specific schema
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Donate to African Charity | Best African Charities to Donate To',
    description: pageDescription,
    url: `${SITE_CONFIG.url}/donate-to-african-charity`,
    mainEntity: {
      '@type': 'NGO',
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
    },
    potentialAction: {
      '@type': 'DonateAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/donation`,
      },
    },
  };

  return (
    <>
      <JsonLd data={[pageSchema, donateActionSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Donate to African Charity</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Looking for the best African charities to donate to? Your generous contribution to Smile Organization
              helps children in Cameroon access education, food, clean water, and healthcare.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Donate to African Charity', href: '/donate-to-african-charity' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Main Content Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden pe-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                <Image
                  className="position-absolute w-100 h-100"
                  src="/gallery/smile-organization.jpg"
                  alt="Children in Cameroon receiving help from Smile Organization"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: '200px', height: '200px' }}>
                  <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                    <h1 className="text-white mb-0">90%</h1>
                    <p className="text-white mb-0">Goes to Programs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">Why Donate to African Charities</p>
                <h2 className="display-6 mb-4">Your Donation Creates Lasting Impact in Africa</h2>
              </div>

              <p>
                When you donate to an African charity like Smile Organization, your contribution goes directly to
                communities that need it most. Unlike large international organizations with high overhead costs,
                we are based in Cameroon and work directly with local communities.
              </p>

              <p>
                <strong>The cost of living in Cameroon means your donation goes further.</strong> What might seem like
                a small amount in Western currencies can provide meals for a family, school supplies for a child,
                or medical care for someone in need.
              </p>

              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h6 className="ms-3 mb-0">Registered Nonprofit</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h6 className="ms-3 mb-0">Local Operations</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h6 className="ms-3 mb-0">Transparent Reporting</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <h6 className="ms-3 mb-0">Maximum Impact</h6>
                  </div>
                </div>
              </div>

              <Link href="/donation" className="btn btn-primary py-3 px-5">
                Donate Now <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Our Impact</p>
            <h2 className="display-6">What Your Donations Have Achieved</h2>
            <p className="text-muted">Since 2024, donors like you have helped us make a real difference</p>
          </div>
          <div className="row g-4 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="bg-white p-4 rounded shadow-sm">
                  <i className={`fa ${stat.icon} fa-3x text-primary mb-3`}></i>
                  <h2 className="mb-2">{stat.number}</h2>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">How We Help</p>
            <h2 className="display-6">Where Your Donation Goes</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto">
                    <i className="fa fa-graduation-cap fa-2x text-white"></i>
                  </div>
                  <h5>Education</h5>
                  <p className="text-muted mb-0">
                    We provide school supplies, uniforms, scholarships, and help build schools in
                    underserved communities across Cameroon.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto">
                    <i className="fa fa-utensils fa-2x text-white"></i>
                  </div>
                  <h5>Hunger Relief</h5>
                  <p className="text-muted mb-0">
                    Our feeding programs provide nutritious meals to malnourished children,
                    ensuring they have the energy to learn and grow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto">
                    <i className="fa fa-tint fa-2x text-white"></i>
                  </div>
                  <h5>Clean Water</h5>
                  <p className="text-muted mb-0">
                    We drill wells, install water purification systems, and provide safe drinking
                    water to communities without access.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto">
                    <i className="fa fa-heartbeat fa-2x text-white"></i>
                  </div>
                  <h5>Healthcare</h5>
                  <p className="text-muted mb-0">
                    We provide medical care, vaccinations, health education, and support for
                    children with treatable conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Smile Organization */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Why Choose Us</p>
            <h2 className="display-6">Best African Charity to Donate To</h2>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <ul className="list-unstyled">
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0 btn-lg-square bg-primary rounded-circle">
                    <i className="fa fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ms-4">
                    <h5>Locally Based</h5>
                    <p className="text-muted mb-0">
                      We operate directly in Cameroon, which means lower overhead costs and more of your
                      donation goes to the people who need it.
                    </p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0 btn-lg-square bg-primary rounded-circle">
                    <i className="fa fa-eye text-white"></i>
                  </div>
                  <div className="ms-4">
                    <h5>Full Transparency</h5>
                    <p className="text-muted mb-0">
                      We publish detailed reports showing exactly how every franc is spent. You can see the
                      direct impact of your donation.
                    </p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0 btn-lg-square bg-primary rounded-circle">
                    <i className="fa fa-hands-helping text-white"></i>
                  </div>
                  <div className="ms-4">
                    <h5>Community-Driven</h5>
                    <p className="text-muted mb-0">
                      We work with local communities to identify needs and implement solutions that are
                      sustainable and culturally appropriate.
                    </p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="flex-shrink-0 btn-lg-square bg-primary rounded-circle">
                    <i className="fa fa-chart-line text-white"></i>
                  </div>
                  <div className="ms-4">
                    <h5>Proven Results</h5>
                    <p className="text-muted mb-0">
                      Since our founding, we&apos;ve helped over 50,000 children access education, healthcare,
                      food, and clean water.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="position-relative h-100" style={{ minHeight: '400px' }}>
                <Image
                  src="/gallery/about-smile-alwayz-organization.jpg"
                  alt="Smile Organization team working with children in Cameroon"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Options */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Give Today</p>
            <h2 className="display-6">Donate to Our African Charity</h2>
            <p className="text-muted">Every contribution makes a difference in the lives of children in Cameroon</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <h3 className="text-primary mb-3">5,000 XAF</h3>
                  <p className="text-muted mb-4">
                    Provides school supplies for one child for an entire school year
                  </p>
                  <Link href="/donation" className="btn btn-outline-primary">Donate 5,000 XAF</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-primary shadow text-center">
                <div className="card-header bg-primary text-white py-3">
                  <strong>Most Popular</strong>
                </div>
                <div className="card-body p-4">
                  <h3 className="text-primary mb-3">25,000 XAF</h3>
                  <p className="text-muted mb-4">
                    Feeds a child nutritious meals for one month and provides clean water access
                  </p>
                  <Link href="/donation" className="btn btn-primary">Donate 25,000 XAF</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <h3 className="text-primary mb-3">100,000 XAF</h3>
                  <p className="text-muted mb-4">
                    Provides comprehensive support: education, food, water, and basic healthcare
                  </p>
                  <Link href="/donation" className="btn btn-outline-primary">Donate 100,000 XAF</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="mb-3">Want to give a custom amount?</p>
            <Link href="/donation" className="btn btn-primary py-3 px-5">
              Make a Custom Donation <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Donating to African Charities"
      />

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-white fs-5 mb-4">
            Join thousands of donors who trust Smile Organization to make their donations count.
            Every contribution, big or small, changes lives.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/donation" className="btn btn-light py-3 px-5">
              Donate Now <i className="fa fa-heart ms-2"></i>
            </Link>
            <Link href="/about" className="btn btn-outline-light py-3 px-5">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

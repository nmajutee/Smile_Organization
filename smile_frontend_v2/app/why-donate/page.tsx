'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FAQSection, TrustSignals, Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG, generateDonateActionSchema } from '@/lib/seo-config';

// FAQ data
const faqs = [
  {
    question: 'Why should I donate to charity?',
    answer: 'Donating to charity allows you to make a positive impact on the world, help those less fortunate, and support causes you care about. Charitable giving has been shown to increase happiness, provide tax benefits, and create meaningful change in communities. When you donate to Smile Organization, you directly help children in Cameroon access education, food, water, and healthcare.',
  },
  {
    question: 'What makes Smile Organization different from other charities?',
    answer: 'Smile Organization stands out for several reasons: (1) We are locally based in Cameroon, meaning lower overhead and maximum impact; (2) 90% of donations go directly to programs; (3) We provide transparent reporting on how funds are used; (4) We have proven results with over 50,000 children helped; (5) Your donation in XAF goes much further due to lower costs of living.',
  },
  {
    question: 'How do I know my donation is being used effectively?',
    answer: 'We are committed to transparency. We publish annual reports showing exactly how donations are spent. We provide regular updates on our projects through our website, email newsletters, and social media. You can see photos and stories of the children and communities you help. We welcome questions and are always available to discuss our work.',
  },
  {
    question: 'What percentage of my donation goes to the cause?',
    answer: 'At Smile Organization, 90% of all donations go directly to our programs (education, feeding, water, healthcare). The remaining 10% covers essential administrative costs like accounting, communications, and fundraising. This is well above the industry standard and ensures maximum impact from your gift.',
  },
  {
    question: 'Can I donate for a specific cause or project?',
    answer: 'Yes! You can designate your donation for a specific program: Education (school supplies, scholarships), Feeding Programs (meals for children), Clean Water (well construction, water systems), or Healthcare (medical care, vaccinations). 100% of designated donations go to your chosen cause.',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Tax deductibility depends on your country\'s regulations. Smile Organization is a registered nonprofit in Cameroon. We provide official donation receipts that you can use for your tax records. Please consult with a tax professional in your country for specific guidance on deducting charitable contributions.',
  },
];

// Impact examples
const impactExamples = [
  { amount: '5,000 XAF', impact: 'Provides school supplies for one child for a year', icon: 'fa-pencil-alt' },
  { amount: '10,000 XAF', impact: 'Feeds a child for two weeks with nutritious meals', icon: 'fa-utensils' },
  { amount: '25,000 XAF', impact: 'Provides clean water access for a family', icon: 'fa-tint' },
  { amount: '50,000 XAF', impact: 'Covers school fees for one child for a term', icon: 'fa-graduation-cap' },
  { amount: '100,000 XAF', impact: 'Provides comprehensive support for a month', icon: 'fa-heart' },
  { amount: '500,000 XAF', impact: 'Sponsors a child\'s education for a full year', icon: 'fa-child' },
];

// Why choose us
const whyChooseUs = [
  {
    title: 'Locally Based',
    description: 'We operate directly in Cameroon, eliminating layers of international overhead.',
    icon: 'fa-map-marker-alt',
  },
  {
    title: '90% to Programs',
    description: 'The vast majority of your donation directly funds our programs, not administration.',
    icon: 'fa-chart-pie',
  },
  {
    title: 'Transparent',
    description: 'We publish detailed reports and provide regular updates on our impact.',
    icon: 'fa-eye',
  },
  {
    title: 'Proven Results',
    description: 'Over 50,000 children helped since our founding. Real, measurable impact.',
    icon: 'fa-trophy',
  },
  {
    title: 'Maximum Value',
    description: 'Your donation goes further in Cameroon due to lower costs of living.',
    icon: 'fa-coins',
  },
  {
    title: 'Community-Driven',
    description: 'We work with local communities to ensure sustainable, culturally appropriate solutions.',
    icon: 'fa-users',
  },
];

export default function WhyDonatePage() {
  const pageDescription = 'Discover why Smile Organization is the best choice for your charitable giving. 100% transparency, direct impact in Cameroon, and measurable results.';
  const donateActionSchema = generateDonateActionSchema();

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Why Donate to Charity | Best Charities to Donate To',
    description: pageDescription,
    url: `${SITE_CONFIG.url}/why-donate`,
  };

  return (
    <>
      <JsonLd data={[pageSchema, donateActionSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Why Donate?</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Discover why your donation to Smile Organization creates real, lasting change
              for children in Cameroon. See exactly where your money goes and the impact it makes.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Why Donate', href: '/why-donate' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* The Problem We Solve */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">The Challenge</p>
                <h2 className="display-6 mb-4">Children in Cameroon Need Your Help</h2>
              </div>

              <p className="lead">
                In Cameroon, millions of children struggle daily with challenges that
                prevent them from reaching their potential.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded text-center">
                    <h3 className="text-primary mb-1">35%</h3>
                    <p className="text-muted small mb-0">Children out of school</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded text-center">
                    <h3 className="text-primary mb-1">30%</h3>
                    <p className="text-muted small mb-0">Children malnourished</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded text-center">
                    <h3 className="text-primary mb-1">55%</h3>
                    <p className="text-muted small mb-0">Rural areas without clean water</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded text-center">
                    <h3 className="text-primary mb-1">40%</h3>
                    <p className="text-muted small mb-0">Limited healthcare access</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>But these challenges are solvable.</strong> With the right resources,
                every child can have the opportunity to learn, grow, and thrive.
                That&apos;s where you come in.
              </p>

              <Link href="/donation" className="btn btn-primary py-3 px-5">
                Make a Difference Now <i className="fa fa-heart ms-2"></i>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative h-100" style={{ minHeight: '500px' }}>
                <Image
                  src="/gallery/smile-organization.jpg"
                  alt="Children in Cameroon who need help"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Smile Organization */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Why Us</p>
            <h2 className="display-6">Why Donate to Smile Organization?</h2>
            <p className="text-muted">What makes us one of the best charities to donate to</p>
          </div>
          <div className="row g-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="bg-white p-4 rounded shadow-sm h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-lg-square bg-primary rounded-circle me-3">
                      <i className={`fa ${item.icon} text-white`}></i>
                    </div>
                    <h5 className="mb-0">{item.title}</h5>
                  </div>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Impact */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Your Impact</p>
            <h2 className="display-6">What Your Donation Can Do</h2>
            <p className="text-muted">Every franc makes a real difference</p>
          </div>
          <div className="row g-4">
            {impactExamples.map((example, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="d-flex align-items-center bg-light p-4 rounded h-100">
                  <div className="flex-shrink-0 btn-lg-square bg-primary me-4">
                    <i className={`fa ${example.icon} text-white`}></i>
                  </div>
                  <div>
                    <h5 className="text-primary mb-1">{example.amount}</h5>
                    <p className="text-muted mb-0">{example.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/donation" className="btn btn-primary py-3 px-5">
              Donate Now <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-white">
              <h2 className="display-6 mb-4">Full Transparency</h2>
              <p className="lead">
                We believe you deserve to know exactly where your money goes.
                That&apos;s why we practice complete financial transparency.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-center mb-3">
                  <i className="fa fa-check-circle me-3"></i>
                  Annual reports published on our website
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="fa fa-check-circle me-3"></i>
                  Detailed breakdown of spending by program
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="fa fa-check-circle me-3"></i>
                  Regular project updates with photos and stories
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="fa fa-check-circle me-3"></i>
                  Open to questions and feedback from donors
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded">
                <h5 className="text-primary mb-4">How We Spend Your Donation</h5>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Programs (Education, Food, Water, Health)</span>
                    <span className="fw-bold">90%</span>
                  </div>
                  <div className="progress" style={{ height: '10px' }}>
                    <div className="progress-bar bg-success" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Administration & Operations</span>
                    <span className="fw-bold">7%</span>
                  </div>
                  <div className="progress" style={{ height: '10px' }}>
                    <div className="progress-bar bg-info" style={{ width: '7%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Fundraising</span>
                    <span className="fw-bold">3%</span>
                  </div>
                  <div className="progress" style={{ height: '10px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '3%' }}></div>
                  </div>
                </div>
                <p className="text-muted small mt-4 mb-0">
                  Our 90% program spending rate is significantly higher than the industry average of 75%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Track Record */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Our Results</p>
            <h2 className="display-6">Proven Impact Since 2024</h2>
          </div>
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="bg-light p-4 rounded h-100">
                <i className="fa fa-child fa-3x text-primary mb-3"></i>
                <h2 className="mb-2">50,000+</h2>
                <p className="text-muted mb-0">Children Helped</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-light p-4 rounded h-100">
                <i className="fa fa-utensils fa-3x text-primary mb-3"></i>
                <h2 className="mb-2">2M+</h2>
                <p className="text-muted mb-0">Meals Provided</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-light p-4 rounded h-100">
                <i className="fa fa-tint fa-3x text-primary mb-3"></i>
                <h2 className="mb-2">25+</h2>
                <p className="text-muted mb-0">Wells Built</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-light p-4 rounded h-100">
                <i className="fa fa-graduation-cap fa-3x text-primary mb-3"></i>
                <h2 className="mb-2">5,000+</h2>
                <p className="text-muted mb-0">Scholarships Awarded</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donor Testimonials */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Testimonials</p>
            <h2 className="display-6">What Our Donors Say</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <i className="fa fa-quote-left text-primary mb-3"></i>
                <p className="fst-italic mb-3">
                  &ldquo;I love knowing exactly where my money goes. Smile Organization sends me
                  regular updates on the children they help. It&apos;s truly rewarding.&rdquo;
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Sarah M.</h6>
                    <small className="text-muted">Monthly Donor</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <i className="fa fa-quote-left text-primary mb-3"></i>
                <p className="fst-italic mb-3">
                  &ldquo;The transparency is what sold me. I can see the 90% program rate and
                  the annual reports. This is a charity I trust.&rdquo;
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">David K.</h6>
                    <small className="text-muted">One-time Donor</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <i className="fa fa-quote-left text-primary mb-3"></i>
                <p className="fst-italic mb-3">
                  &ldquo;I sponsored a child&apos;s education and received letters and photos.
                  Seeing her progress through school has been incredible.&rdquo;
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Maria L.</h6>
                    <small className="text-muted">Child Sponsor</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Donating"
      />

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-white fs-5 mb-4">
            Join thousands of donors who trust Smile Organization to make their
            contributions count. Every donation, big or small, changes lives.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/donation" className="btn btn-light py-3 px-5">
              Donate Now <i className="fa fa-heart ms-2"></i>
            </Link>
            <Link href="/contact" className="btn btn-outline-light py-3 px-5">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

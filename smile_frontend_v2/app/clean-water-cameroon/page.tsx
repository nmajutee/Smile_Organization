'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FAQSection, TrustSignals, Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG, generateDonateActionSchema } from '@/lib/seo-config';

// FAQ data
const faqs = [
  {
    question: 'Why is clean water important in Cameroon?',
    answer: 'Clean water is essential for health, education, and economic development. In Cameroon, waterborne diseases from contaminated water cause serious illness and death, especially in children. When communities have clean water, children can attend school instead of walking hours to fetch water, and families can focus on earning a living.',
  },
  {
    question: 'How much does it cost to build a well in Cameroon?',
    answer: 'The cost to build a well in Cameroon varies depending on the type and depth required. A basic hand-dug well can cost around 1,500,000 XAF, while a deeper borehole with a pump system can cost 5,000,000-10,000,000 XAF. These wells serve entire communities of 200-500 people for decades.',
  },
  {
    question: 'How does Smile Organization provide clean water?',
    answer: 'We use multiple approaches: (1) Drilling boreholes with hand pumps in rural communities; (2) Installing water purification systems in schools and health centers; (3) Rainwater harvesting systems for individual families; (4) Training communities to maintain their water systems for long-term sustainability.',
  },
  {
    question: 'How many people lack clean water in Cameroon?',
    answer: 'Approximately 4-5 million Cameroonians lack access to clean water. In rural areas, only about 45% of the population has access to safe drinking water. This means millions rely on rivers, streams, and ponds that are often contaminated with bacteria and parasites.',
  },
  {
    question: 'Can I donate specifically for water projects?',
    answer: 'Yes! When you donate to Smile Organization, you can designate your gift specifically for clean water projects. 100% of designated donations go directly to our water initiatives. You can fund a complete well, contribute to a larger project, or give any amount to our water fund.',
  },
  {
    question: 'How long does a water well last?',
    answer: 'A properly constructed borehole with a quality pump can last 20-30 years or more with regular maintenance. We train community members to maintain their water systems and establish water committees to ensure long-term sustainability. We also provide ongoing support and repairs when needed.',
  },
];

// Water project statistics
const waterStats = [
  { number: '25+', label: 'Wells Built', icon: 'fa-tint' },
  { number: '12,500+', label: 'People Served', icon: 'fa-users' },
  { number: '5', label: 'Communities Reached', icon: 'fa-map-marker-alt' },
  { number: '95%', label: 'Wells Still Functioning', icon: 'fa-check-circle' },
];

// Water projects
const waterProjects = [
  {
    name: 'Bafut Community Well',
    location: 'Bafut, North West Region',
    beneficiaries: '350+ people',
    completed: '2024',
    image: '/gallery/smile-organization.jpg',
    description: 'A deep borehole with hand pump providing clean water to the entire Bafut community.',
  },
  {
    name: 'Nkwen Primary School',
    location: 'Bamenda, North West Region',
    beneficiaries: '800+ students',
    completed: '2024',
    image: '/gallery/about-smile-alwayz-organization.jpg',
    description: 'Water purification system installed to provide safe drinking water for students and staff.',
  },
  {
    name: 'Mankon Village Well',
    location: 'Mankon, North West Region',
    beneficiaries: '200+ people',
    completed: '2024',
    image: '/gallery/InShot_20230911_205611720.jpg',
    description: 'Hand-dug well with protective cover and drainage system for a rural farming community.',
  },
];

export default function CleanWaterCameroonPage() {
  const pageDescription = 'Support clean water projects in Cameroon with Smile Organization. Help us build wells, water purification systems, and provide safe drinking water to rural communities in Africa.';
  const donateActionSchema = generateDonateActionSchema();

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Clean Water in Cameroon | Water for Africa Charity',
    description: pageDescription,
    url: `${SITE_CONFIG.url}/clean-water-cameroon`,
    about: {
      '@type': 'Thing',
      name: 'Clean water access in Cameroon',
    },
  };

  return (
    <>
      <JsonLd data={[pageSchema, donateActionSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Clean Water for Cameroon</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Millions in Cameroon lack access to clean water. Help us bring safe drinking water
              to communities, schools, and families across the country.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Clean Water in Cameroon', href: '/clean-water-cameroon' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* The Water Crisis Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative h-100" style={{ minHeight: '500px' }}>
                <Image
                  src="/gallery/smile-organization.jpg"
                  alt="Clean water project in Cameroon"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
                <div className="position-absolute bottom-0 start-0 bg-primary text-white p-3 m-4 rounded">
                  <h4 className="mb-0">4+ Million</h4>
                  <p className="mb-0">Cameroonians lack clean water</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">The Crisis</p>
                <h2 className="display-6 mb-4">Cameroon&apos;s Water Emergency</h2>
              </div>

              <p className="lead">
                Every day, millions of Cameroonians drink contaminated water that causes disease,
                disability, and death. Children are the most vulnerable.
              </p>

              <div className="bg-light p-4 rounded mb-4">
                <h5 className="text-danger mb-3"><i className="fa fa-exclamation-triangle me-2"></i>The Impact of Dirty Water</h5>
                <ul className="mb-0">
                  <li className="mb-2">Waterborne diseases like cholera, typhoid, and dysentery</li>
                  <li className="mb-2">Children missing school due to illness</li>
                  <li className="mb-2">Girls dropping out to fetch water for their families</li>
                  <li className="mb-2">Economic hardship from medical expenses</li>
                  <li>Stunted growth and developmental delays in children</li>
                </ul>
              </div>

              <p>
                <strong>But there is hope.</strong> A single well can transform an entire community.
                When families have clean water at home, children go to school, parents go to work,
                and everyone is healthier.
              </p>

              <Link href="/donation" className="btn btn-primary py-3 px-5">
                Fund a Water Project <i className="fa fa-tint ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Water Stats */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-primary text-center text-white px-3">Our Impact</p>
            <h2 className="display-6 text-white">Water Projects by the Numbers</h2>
          </div>
          <div className="row g-4 text-center">
            {waterStats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="bg-white p-4 rounded shadow-sm h-100">
                  <i className={`fa ${stat.icon} fa-3x text-primary mb-3`}></i>
                  <h2 className="mb-2">{stat.number}</h2>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Water Projects */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Our Work</p>
            <h2 className="display-6">Recent Water Projects</h2>
            <p className="text-muted">See the impact of your donations</p>
          </div>
          <div className="row g-4">
            {waterProjects.map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative" style={{ height: '200px' }}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="card-img-top"
                    />
                    <span className="badge bg-success position-absolute top-0 end-0 m-3">
                      Completed {project.completed}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="text-muted small mb-2">
                      <i className="fa fa-map-marker-alt me-1"></i> {project.location}
                    </p>
                    <p className="text-muted small mb-2">
                      <i className="fa fa-users me-1"></i> {project.beneficiaries}
                    </p>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Provide Water */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Our Approach</p>
            <h2 className="display-6">How We Bring Clean Water</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '100px', height: '100px' }}>
                  <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">1</span>
                </div>
                <h5>Community Assessment</h5>
                <p className="text-muted">
                  We work with local leaders to identify communities with the greatest need and
                  assess the best water solution for each location.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '100px', height: '100px' }}>
                  <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">2</span>
                </div>
                <h5>Professional Drilling</h5>
                <p className="text-muted">
                  We use professional drilling equipment and local contractors to construct
                  high-quality boreholes and wells that last decades.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '100px', height: '100px' }}>
                  <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">3</span>
                </div>
                <h5>Water Quality Testing</h5>
                <p className="text-muted">
                  Every water source is tested to ensure it meets safety standards. We only
                  hand over projects when the water is confirmed safe to drink.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-4" style={{ width: '100px', height: '100px' }}>
                  <span className="text-white fw-bold fs-3 d-flex justify-content-center align-items-center h-100">4</span>
                </div>
                <h5>Community Training</h5>
                <p className="text-muted">
                  We train community members to maintain their water system and establish
                  water committees for long-term sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fund a Well */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Take Action</p>
            <h2 className="display-6">Help Fund Clean Water in Cameroon</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fa fa-glass-water fa-3x text-primary mb-3"></i>
                  <h4 className="mb-2">25,000 XAF</h4>
                  <p className="text-muted mb-3">
                    Provides clean water access for one family through our community water projects
                  </p>
                  <Link href="/donation" className="btn btn-outline-primary">Donate 25,000 XAF</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-primary shadow text-center">
                <div className="card-header bg-primary text-white py-2">
                  <strong>Most Impact</strong>
                </div>
                <div className="card-body p-4">
                  <i className="fa fa-hand-holding-water fa-3x text-primary mb-3"></i>
                  <h4 className="mb-2">250,000 XAF</h4>
                  <p className="text-muted mb-3">
                    Funds water purification equipment for a school, serving hundreds of students
                  </p>
                  <Link href="/donation" className="btn btn-primary">Donate 250,000 XAF</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fa fa-water fa-3x text-primary mb-3"></i>
                  <h4 className="mb-2">2,500,000 XAF</h4>
                  <p className="text-muted mb-3">
                    Funds a complete community well serving 200+ people for decades
                  </p>
                  <Link href="/donation" className="btn btn-outline-primary">Fund a Well</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted">
              Every donation helps, no matter the size. 100% of water donations go directly to water projects.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Our Water Projects"
      />

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Clean Water Changes Everything</h2>
          <p className="text-white fs-5 mb-4">
            When a community gets clean water, children go to school, families stay healthy,
            and the entire community can thrive. Your donation can make this possible.
          </p>
          <Link href="/donation" className="btn btn-light py-3 px-5">
            Bring Clean Water Today <i className="fa fa-tint ms-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

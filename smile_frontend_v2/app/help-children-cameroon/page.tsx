'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FAQSection, TrustSignals, Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG, generateDonateActionSchema } from '@/lib/seo-config';

// FAQ data
const faqs = [
  {
    question: 'How can I help children in Cameroon?',
    answer: 'You can help children in Cameroon by donating to Smile Organization, sponsoring a child\'s education, volunteering with our programs, or spreading awareness about the needs of children in Cameroon. Even a small donation can provide meals, school supplies, or medical care for a child in need.',
  },
  {
    question: 'What challenges do children face in Cameroon?',
    answer: 'Children in Cameroon face numerous challenges including limited access to quality education, food insecurity and malnutrition, lack of clean water, inadequate healthcare, and economic hardship. The ongoing crisis in the Anglophone regions has displaced many families, making these issues even more acute.',
  },
  {
    question: 'How does Smile Organization help children in Cameroon?',
    answer: 'Smile Organization helps children in Cameroon through four main programs: (1) Education - providing school supplies, uniforms, scholarships, and building schools; (2) Feeding programs - providing nutritious meals to malnourished children; (3) Clean water projects - drilling wells and installing water systems; (4) Healthcare - providing medical care and vaccinations.',
  },
  {
    question: 'Can I sponsor a specific child in Cameroon?',
    answer: 'Yes! Smile Organization offers child sponsorship programs where you can support a specific child\'s education, nutrition, and healthcare needs. Sponsors receive updates and photos of their sponsored child, and can even exchange letters. Contact us to learn more about sponsorship opportunities.',
  },
  {
    question: 'Is it safe to donate to charities in Cameroon?',
    answer: 'Yes, donating to Smile Organization is safe and secure. We are a registered nonprofit in Cameroon with transparent operations. We accept donations through secure payment methods including mobile money (MTN, Orange), credit cards, and bank transfers. We provide receipts for all donations.',
  },
  {
    question: 'How many children does Smile Organization help?',
    answer: 'Since our founding, Smile Organization has helped over 50,000 children across Cameroon access education, food, clean water, and healthcare. We currently operate programs in multiple communities in the North West Region, with plans to expand to other regions.',
  },
];

// Stories of children we've helped
const childStories = [
  {
    name: 'Ngwa Emmanuel',
    age: '8 years old',
    image: '/gallery/smile-organization.jpg',
    story: 'Emmanuel lost his parents during the crisis and was living with his elderly grandmother. With your help, he now attends school, receives daily meals, and dreams of becoming a doctor.',
  },
  {
    name: 'Blessing Nkeng',
    age: '10 years old',
    image: '/gallery/about-smile-alwayz-organization.jpg',
    story: 'Blessing walked 3 hours daily to fetch water for her family. Now, thanks to our clean water project, her village has a well and she can focus on her education.',
  },
  {
    name: 'Divine Fombi',
    age: '6 years old',
    image: '/gallery/InShot_20230911_205611720.jpg',
    story: 'Divine was severely malnourished when we met him. Our feeding program helped him regain his health, and he\'s now a happy, energetic child learning to read and write.',
  },
];

export default function HelpChildrenCameroonPage() {
  const pageDescription = 'Help children in Cameroon and Africa through Smile Organization. Support education, nutrition programs, healthcare initiatives, and provide a brighter future for vulnerable children.';
  const donateActionSchema = generateDonateActionSchema();

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Help Children in Cameroon | Support African Children',
    description: pageDescription,
    url: `${SITE_CONFIG.url}/help-children-cameroon`,
    about: {
      '@type': 'Thing',
      name: 'Child welfare in Cameroon',
    },
  };

  return (
    <>
      <JsonLd data={[pageSchema, donateActionSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Help Children in Cameroon</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Thousands of children in Cameroon need your help. Together, we can provide them with
              education, food, clean water, and healthcare to build a brighter future.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Help Children in Cameroon', href: '/help-children-cameroon' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* The Challenge Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">The Challenge</p>
                <h2 className="display-6 mb-4">Children in Cameroon Need Your Help</h2>
              </div>

              <p className="lead">
                Cameroon is home to over 10 million children, many of whom face daily struggles
                for basic necessities that most of us take for granted.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-12">
                  <div className="d-flex align-items-start bg-light p-3 rounded">
                    <i className="fa fa-book-open text-primary fs-4 me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Limited Education Access</h6>
                      <p className="text-muted small mb-0">
                        Only 65% of children complete primary school. Many families cannot afford
                        school fees, uniforms, or supplies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start bg-light p-3 rounded">
                    <i className="fa fa-utensils text-primary fs-4 me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Food Insecurity</h6>
                      <p className="text-muted small mb-0">
                        Over 30% of children under 5 suffer from stunted growth due to malnutrition.
                        Many go to bed hungry every night.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start bg-light p-3 rounded">
                    <i className="fa fa-tint text-primary fs-4 me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">No Clean Water</h6>
                      <p className="text-muted small mb-0">
                        Millions lack access to clean water. Children, especially girls, spend hours
                        daily fetching water instead of going to school.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start bg-light p-3 rounded">
                    <i className="fa fa-heartbeat text-primary fs-4 me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Healthcare Gaps</h6>
                      <p className="text-muted small mb-0">
                        Many children die from preventable diseases. Access to basic healthcare and
                        vaccinations remains a challenge in rural areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/donation" className="btn btn-primary py-3 px-5">
                Help a Child Today <i className="fa fa-heart ms-2"></i>
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

      {/* Children's Stories */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Stories of Hope</p>
            <h2 className="display-6">Children We&apos;ve Helped</h2>
            <p className="text-muted">Real stories from children whose lives have been transformed by donors like you</p>
          </div>
          <div className="row g-4">
            {childStories.map((child, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative" style={{ height: '250px' }}>
                    <Image
                      src={child.image}
                      alt={`${child.name} - Child helped by Smile Organization`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{child.name}</h5>
                    <p className="text-muted small mb-2">{child.age}</p>
                    <p className="card-text">{child.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How You Can Help */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Take Action</p>
            <h2 className="display-6">How You Can Help Children in Cameroon</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                    <i className="fa fa-donate fa-2x text-white d-flex justify-content-center align-items-center h-100"></i>
                  </div>
                  <h5>Make a Donation</h5>
                  <p className="text-muted mb-3">
                    Your financial gift provides food, education, water, and healthcare for children in need.
                  </p>
                  <Link href="/donation" className="btn btn-outline-primary">Donate Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                    <i className="fa fa-child fa-2x text-white d-flex justify-content-center align-items-center h-100"></i>
                  </div>
                  <h5>Sponsor a Child</h5>
                  <p className="text-muted mb-3">
                    Build a lasting relationship by sponsoring a child&apos;s education and basic needs.
                  </p>
                  <Link href="/contact" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                    <i className="fa fa-hands-helping fa-2x text-white d-flex justify-content-center align-items-center h-100"></i>
                  </div>
                  <h5>Volunteer</h5>
                  <p className="text-muted mb-3">
                    Join us in Cameroon or contribute your skills remotely to support our mission.
                  </p>
                  <Link href="/volunteer-cameroon" className="btn btn-outline-primary">Volunteer</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4 mx-auto" style={{ width: '80px', height: '80px' }}>
                    <i className="fa fa-share-alt fa-2x text-white d-flex justify-content-center align-items-center h-100"></i>
                  </div>
                  <h5>Spread the Word</h5>
                  <p className="text-muted mb-3">
                    Share our mission with friends and family to help us reach more people.
                  </p>
                  <button className="btn btn-outline-primary" onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Help Children in Cameroon',
                        text: 'Support children in Cameroon with Smile Organization',
                        url: window.location.href,
                      });
                    }
                  }}>Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact of Your Help */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Your Impact</p>
            <h2 className="display-6">What Your Support Can Achieve</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm mb-3">
                <div className="flex-shrink-0 btn-lg-square bg-primary me-4">
                  <span className="text-white fw-bold">5K</span>
                </div>
                <div>
                  <h6 className="mb-1">5,000 XAF</h6>
                  <p className="text-muted mb-0">Provides school supplies for one child for an entire year</p>
                </div>
              </div>
              <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm mb-3">
                <div className="flex-shrink-0 btn-lg-square bg-primary me-4">
                  <span className="text-white fw-bold">10K</span>
                </div>
                <div>
                  <h6 className="mb-1">10,000 XAF</h6>
                  <p className="text-muted mb-0">Feeds a child nutritious meals for two weeks</p>
                </div>
              </div>
              <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm">
                <div className="flex-shrink-0 btn-lg-square bg-primary me-4">
                  <span className="text-white fw-bold">25K</span>
                </div>
                <div>
                  <h6 className="mb-1">25,000 XAF</h6>
                  <p className="text-muted mb-0">Provides clean water access for a family of five</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm mb-3">
                <div className="flex-shrink-0 btn-lg-square bg-primary me-4">
                  <span className="text-white fw-bold">50K</span>
                </div>
                <div>
                  <h6 className="mb-1">50,000 XAF</h6>
                  <p className="text-muted mb-0">Covers a child&apos;s school fees for one term</p>
                </div>
              </div>
              <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm mb-3">
                <div className="flex-shrink-0 btn-lg-square bg-primary me-4">
                  <span className="text-white fw-bold">100K</span>
                </div>
                <div>
                  <h6 className="mb-1">100,000 XAF</h6>
                  <p className="text-muted mb-0">Provides comprehensive support for one child for a month</p>
                </div>
              </div>
              <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm">
                <div className="flex-shrink-0 btn-lg-square bg-primary me-4">
                  <span className="text-white fw-bold">500K</span>
                </div>
                <div>
                  <h6 className="mb-1">500,000 XAF</h6>
                  <p className="text-muted mb-0">Sponsors a child&apos;s education for an entire year</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href="/donation" className="btn btn-primary py-3 px-5">
              Make a Difference Today <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Helping Children in Cameroon"
      />

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Every Child Deserves a Chance</h2>
          <p className="text-white fs-5 mb-4">
            Right now, children in Cameroon are waiting for someone to give them hope.
            Your donation can be the difference between hunger and nourishment,
            between ignorance and education, between sickness and health.
          </p>
          <Link href="/donation" className="btn btn-light py-3 px-5">
            Help a Child Now <i className="fa fa-heart ms-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

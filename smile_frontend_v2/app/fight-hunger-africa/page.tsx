'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FAQSection, TrustSignals, Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG, generateDonateActionSchema } from '@/lib/seo-config';

// FAQ data
const faqs = [
  {
    question: 'How bad is hunger in Africa?',
    answer: 'Hunger remains one of Africa\'s most pressing challenges. In sub-Saharan Africa, over 230 million people are undernourished. In Cameroon specifically, about 2.7 million people face food insecurity, with children being the most affected. Malnutrition causes stunted growth, weakened immune systems, and can lead to death in severe cases.',
  },
  {
    question: 'What causes hunger in Cameroon?',
    answer: 'Hunger in Cameroon is caused by multiple factors: poverty preventing families from affording food; displacement due to the ongoing crisis in Anglophone regions; climate change affecting crop yields; limited access to farming resources; and economic instability. The COVID-19 pandemic worsened food insecurity for many families.',
  },
  {
    question: 'How does Smile Organization fight hunger?',
    answer: 'We fight hunger through: (1) Daily feeding programs providing hot, nutritious meals to children; (2) School feeding programs encouraging attendance; (3) Emergency food distribution during crises; (4) Supporting families with sustainable food production like farming and livestock; (5) Nutrition education for mothers and caregivers.',
  },
  {
    question: 'How much does it cost to feed a hungry child?',
    answer: 'In Cameroon, we can provide a nutritious meal to a child for as little as 500 XAF (less than $1 USD). A monthly feeding package costs about 15,000 XAF, and feeding a child for an entire year costs around 180,000 XAF. These costs are low because we work locally and source food from local markets and farmers.',
  },
  {
    question: 'Can I donate food directly to hungry children in Africa?',
    answer: 'While direct food donations from abroad are logistically challenging, your monetary donation allows us to purchase fresh, nutritious food from local markets. This approach is more efficient, supports local farmers, and ensures children receive fresh, culturally appropriate meals. 100% of designated hunger donations go to feeding programs.',
  },
  {
    question: 'How many children does Smile Organization feed?',
    answer: 'Smile Organization currently operates feeding programs that serve over 500 children daily in the Bamenda area. Since our founding, we have provided over 2 million meals to hungry children. Our goal is to expand our programs to reach 2,000 children daily by 2026.',
  },
];

// Hunger statistics
const hungerStats = [
  { number: '2M+', label: 'Meals Provided', icon: 'fa-utensils' },
  { number: '500+', label: 'Children Fed Daily', icon: 'fa-child' },
  { number: '5', label: 'Feeding Centers', icon: 'fa-building' },
  { number: '0%', label: 'Hungry on Our Watch', icon: 'fa-heart' },
];

export default function FightHungerAfricaPage() {
  const pageDescription = 'Help fight hunger and starvation in Africa. Smile Organization provides nutritious meals, food distribution, and sustainable agriculture programs to combat child malnutrition in Cameroon.';
  const donateActionSchema = generateDonateActionSchema();

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Fight Hunger in Africa | Donate to End Starvation',
    description: pageDescription,
    url: `${SITE_CONFIG.url}/fight-hunger-africa`,
    about: {
      '@type': 'Thing',
      name: 'Hunger relief in Africa',
    },
  };

  return (
    <>
      <JsonLd data={[pageSchema, donateActionSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Fight Hunger in Africa</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Millions of children in Africa go to bed hungry every night. Your donation can provide
              life-saving meals and help end hunger in Cameroon.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Fight Hunger in Africa', href: '/fight-hunger-africa' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* The Hunger Crisis Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="position-relative h-100" style={{ minHeight: '500px' }}>
                <Image
                  src="/gallery/smile-organization.jpg"
                  alt="Hungry children in Cameroon receiving food from Smile Organization"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">The Crisis</p>
                <h2 className="display-6 mb-4">Africa&apos;s Hunger Emergency</h2>
              </div>

              <p className="lead text-danger fw-bold">
                Right now, 2.7 million people in Cameroon don&apos;t have enough food to eat.
                Children are the most vulnerable.
              </p>

              <p>
                Hunger doesn&apos;t just cause stomach pains. It causes:
              </p>

              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-times-circle text-danger me-3 mt-1"></i>
                  <div>
                    <strong>Stunted growth</strong> - Malnourished children are smaller and weaker than their peers
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-times-circle text-danger me-3 mt-1"></i>
                  <div>
                    <strong>Learning difficulties</strong> - Hungry children can&apos;t concentrate in school
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-times-circle text-danger me-3 mt-1"></i>
                  <div>
                    <strong>Weakened immunity</strong> - Malnutrition makes children susceptible to disease
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="fa fa-times-circle text-danger me-3 mt-1"></i>
                  <div>
                    <strong>Death</strong> - Severe malnutrition can be fatal, especially in young children
                  </div>
                </li>
              </ul>

              <div className="bg-primary text-white p-4 rounded mb-4">
                <h5 className="mb-2"><i className="fa fa-lightbulb me-2"></i>But You Can Help</h5>
                <p className="mb-0">
                  For just 500 XAF, you can provide a nutritious meal to a hungry child.
                  That&apos;s less than the cost of a cup of coffee in many countries.
                </p>
              </div>

              <Link href="/donation" className="btn btn-primary py-3 px-5">
                Feed a Hungry Child <i className="fa fa-utensils ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hunger Stats */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Our Impact</p>
            <h2 className="display-6">Fighting Hunger Together</h2>
          </div>
          <div className="row g-4 text-center">
            {hungerStats.map((stat, index) => (
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

      {/* Our Feeding Programs */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">Our Programs</p>
            <h2 className="display-6">How We Fight Hunger</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4">
                    <i className="fa fa-utensils fa-2x text-white"></i>
                  </div>
                  <h5>Daily Feeding Centers</h5>
                  <p className="text-muted mb-0">
                    We operate feeding centers in Bamenda where children receive hot, nutritious meals
                    every day. Our centers serve over 500 children daily with balanced meals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4">
                    <i className="fa fa-school fa-2x text-white"></i>
                  </div>
                  <h5>School Feeding Programs</h5>
                  <p className="text-muted mb-0">
                    We provide meals at schools to encourage attendance and help children focus on learning.
                    A hungry child cannot learn effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4">
                    <i className="fa fa-truck fa-2x text-white"></i>
                  </div>
                  <h5>Emergency Food Distribution</h5>
                  <p className="text-muted mb-0">
                    During crises and natural disasters, we distribute emergency food packages to
                    families in urgent need. We respond quickly to prevent starvation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4">
                    <i className="fa fa-seedling fa-2x text-white"></i>
                  </div>
                  <h5>Sustainable Agriculture</h5>
                  <p className="text-muted mb-0">
                    We help families grow their own food by providing seeds, tools, and training.
                    This creates long-term food security.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4">
                    <i className="fa fa-baby fa-2x text-white"></i>
                  </div>
                  <h5>Nutrition Education</h5>
                  <p className="text-muted mb-0">
                    We teach mothers and caregivers about proper nutrition for children, including
                    how to prepare balanced meals with local ingredients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="btn-lg-square bg-primary rounded-circle mb-4">
                    <i className="fa fa-heartbeat fa-2x text-white"></i>
                  </div>
                  <h5>Malnutrition Treatment</h5>
                  <p className="text-muted mb-0">
                    For severely malnourished children, we provide therapeutic food and medical care
                    to help them recover and regain their strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Your Donation Provides */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-primary text-center text-white px-3">Your Impact</p>
            <h2 className="display-6 text-white">What Your Donation Provides</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="bg-white p-4 rounded text-center h-100">
                <h3 className="text-primary mb-3">500 XAF</h3>
                <i className="fa fa-hamburger fa-3x text-primary mb-3"></i>
                <p className="mb-0">One nutritious meal for a hungry child</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded text-center h-100">
                <h3 className="text-primary mb-3">15,000 XAF</h3>
                <i className="fa fa-calendar-alt fa-3x text-primary mb-3"></i>
                <p className="mb-0">Feeds a child for one month (30 meals)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded text-center h-100">
                <h3 className="text-primary mb-3">180,000 XAF</h3>
                <i className="fa fa-calendar-check fa-3x text-primary mb-3"></i>
                <p className="mb-0">Feeds a child for an entire year</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/donation" className="btn btn-light py-3 px-5">
              Feed a Child Now <i className="fa fa-heart ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative h-100" style={{ minHeight: '400px' }}>
                <Image
                  src="/gallery/about-smile-alwayz-organization.jpg"
                  alt="Child recovered from malnutrition"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <p className="section-title bg-white text-start text-primary pe-3">Success Story</p>
                <h2 className="display-6 mb-4">From Hunger to Hope: Emmanuel&apos;s Story</h2>
              </div>

              <p className="lead">
                When Emmanuel came to our feeding center, he was severely malnourished.
                At 5 years old, he weighed only 12 kg - half of what he should weigh.
              </p>

              <p>
                &ldquo;I used to be hungry all the time,&rdquo; Emmanuel says. &ldquo;Now I eat every day
                and I can play with my friends.&rdquo;
              </p>

              <p>
                After six months in our feeding program, Emmanuel has gained weight, regained his
                energy, and started attending school. He dreams of becoming a teacher.
              </p>

              <blockquote className="bg-light p-4 rounded mb-4">
                <p className="mb-0 fst-italic">
                  &ldquo;Smile Organization saved my son&apos;s life. Without their meals,
                  I don&apos;t know what would have happened to him.&rdquo;
                </p>
                <footer className="mt-2 text-muted">— Emmanuel&apos;s Mother</footer>
              </blockquote>

              <p>
                <strong>Your donation can create more stories like Emmanuel&apos;s.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions About Hunger in Africa"
      />

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">No Child Should Go to Bed Hungry</h2>
          <p className="text-white fs-5 mb-4">
            Right now, children in Cameroon are going to sleep hungry.
            For just 500 XAF, you can give them a meal and hope.
          </p>
          <Link href="/donation" className="btn btn-light py-3 px-5">
            End Hunger Today <i className="fa fa-utensils ms-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

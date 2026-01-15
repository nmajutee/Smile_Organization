'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getProjects, createDonation } from '@/lib/api-services';
import type { Project, PaymentMethod } from '@/types/api';
import { getMediaUrl } from '@/lib/utils';

// Video Modal Component
function VideoModal() {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const modal = document.getElementById('videoModal');
    if (modal) {
      modal.addEventListener('show.bs.modal', function (event) {
        const button = (event as unknown as { relatedTarget: HTMLElement }).relatedTarget;
        const src = button?.getAttribute('data-src');
        if (src) setVideoSrc(src);
      });
      modal.addEventListener('hide.bs.modal', function () {
        setVideoSrc('');
      });
    }
  }, []);

  return (
    <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h5 className="modal-title" id="videoModalLabel">Video</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="ratio ratio-16x9">
              {videoSrc && (
                <iframe
                  className="embed-responsive-item"
                  src={`${videoSrc}?autoplay=1`}
                  id="video"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Newsletter Section Component
function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container-fluid bg-primary py-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-6 mb-4">Subscribe the Newsletter</h1>
            <form onSubmit={handleSubmit}>
              <div className="position-relative w-100 mb-2">
                <input
                  className="form-control border-0 w-100 ps-4 pe-5"
                  type="email"
                  placeholder="Enter Your Email"
                  style={{ height: '60px' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
            </form>
            {submitted ? (
              <p className="mb-0 text-dark">Thank you for subscribing!</p>
            ) : (
              <p className="mb-0">Don&apos;t worry, we won&apos;t spam you with emails.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Donation causes with API integration support
interface DonationCause {
  id: number;
  title: string;
  category: string;
  image: string;
  raised: number;
  goal: number;
  description: string;
}

const defaultCauses: DonationCause[] = [
  {
    id: 1,
    title: "Healthy Food",
    category: "Food",
    image: "/gallery/back-to-school-campaign.jpg",
    raised: 4800000,
    goal: 6000000,
    description: "Through your donations and volunteer work, we spread kindness and support to children."
  },
  {
    id: 2,
    title: "Water Treatment",
    category: "Health",
    image: "/gallery/Empowering-the-New-Generation.jpg",
    raised: 5700000,
    goal: 6000000,
    description: "Through your donations and volunteer work, we spread kindness and support to children."
  },
  {
    id: 3,
    title: "Education Support",
    category: "Education",
    image: "/gallery/InShot_20230911_205422159.jpg",
    raised: 4500000,
    goal: 6000000,
    description: "Through your donations and volunteer work, we spread kindness and support to children."
  },
  {
    id: 4,
    title: "Child Nutrition",
    category: "Food",
    image: "/gallery/InShot_20230911_205611720.jpg",
    raised: 5100000,
    goal: 6000000,
    description: "Through your donations and volunteer work, we spread kindness and support to children."
  },
  {
    id: 5,
    title: "Medical Care",
    category: "Health",
    image: "/gallery/InShot_20230911_210951284.jpg",
    raised: 5400000,
    goal: 6000000,
    description: "Through your donations and volunteer work, we spread kindness and support to children."
  },
  {
    id: 6,
    title: "School Supplies",
    category: "Education",
    image: "/gallery/InShot_20230911_211148189.jpg",
    raised: 4200000,
    goal: 6000000,
    description: "Through your donations and volunteer work, we spread kindness and support to children."
  }
];

function DonationContent() {
  const searchParams = useSearchParams();
  const projectIdParam = searchParams.get('project');

  const [projects, setProjects] = useState<Project[]>([]);
  const [causes, setCauses] = useState<DonationCause[]>(defaultCauses);
  const [selectedAmount, setSelectedAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(projectIdParam ? parseInt(projectIdParam) : null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('flutterwave');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('All');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Fetch causes from API
  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        if (data.length > 0) {
          // Map API data to our format
          const apiCauses: DonationCause[] = data.map((project) => ({
            id: project.id,
            title: project.title,
            category: project.status === 'ongoing' ? 'Active' : project.status,
            image: getMediaUrl(project.image),
            raised: Number(project.donation_raised) || 0,
            goal: Number(project.donation_goal) || 10000,
            description: project.description || ''
          }));
          setCauses(apiCauses.length > 0 ? apiCauses : defaultCauses);
        } else {
            console.log('No projects found, using default causes');
            setCauses(defaultCauses);
        }
      } catch (error) {
        // Use default causes if API fails
        console.error('Error fetching projects:', error);
        setCauses(defaultCauses);
      }
    };

    fetchCauses();
  }, []);

  const categories = ['All', ...new Set(causes.map(c => c.category))];
  const filteredCauses = filter === 'All' ? causes : causes.filter(c => c.category === filter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const amount = customAmount ? parseFloat(customAmount) : parseFloat(selectedAmount);

    if (!amount || amount <= 0) {
      setSubmitError('Please enter a valid donation amount.');
      setLoading(false);
      return;
    }

    try {
      await createDonation({
        donor_name: formData.name,
        donor_email: formData.email,
        amount,
        project: selectedProject || undefined,
        payment_method: paymentMethod,
        message: formData.message,
      });

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setCustomAmount('');
      setSelectedAmount('25');
    } catch (error) {
      console.error('Donation failed:', error);
      setSubmitError('Failed to process donation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-4">
          <h1 className="display-3 animated slideInDown text-white">Donation</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <span className="text-white">Pages</span>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">Donation</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Video Start */}
      <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-11">
              <div className="h-100 py-5 d-flex align-items-center">
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h3 className="ms-5 mb-0">Together, we can build a world where everyone has the chance to thrive.</h3>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-1">
              <div className="h-100 w-100 bg-secondary d-flex align-items-center justify-content-center">
                <span className="text-white" style={{ transform: 'rotate(-90deg)' }}>Scroll Down</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video End */}

      {/* Video Modal */}
      <VideoModal />

      {/* Donation Causes Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p className="section-title bg-white text-center text-primary px-3">Donation</p>
            <h1 className="display-6 mb-4">Our Donation Causes Around the World</h1>
          </div>
          <div className="row g-4">
            {filteredCauses.map((cause) => {
              const percentage = Math.round((cause.raised / cause.goal) * 100);
              return (
                <div key={cause.id} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="donation-item d-flex h-100 p-4">
                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                      <h6 className="mb-0">Raised</h6>
                      <span className="mb-2">{cause.raised.toLocaleString()} XAF</span>
                      <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                        <div
                          className="progress-bar w-100 bg-secondary"
                          role="progressbar"
                          style={{ height: `${Math.min(percentage, 100)}%` }}
                          aria-valuenow={percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="fs-4">{percentage}%</span>
                        </div>
                      </div>
                      <h6 className="mb-0">Goal</h6>
                      <span>{cause.goal.toLocaleString()} XAF</span>
                    </div>
                    <div className="donation-detail">
                      <div className="position-relative mb-4">
                        <Image
                          className="img-fluid w-100"
                          src={cause.image}
                          alt={cause.title}
                          width={300}
                          height={200}
                          style={{ objectFit: 'cover' }}
                        />
                        <span className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">{cause.category}</span>
                      </div>
                      <span className="h3 d-inline-block mb-3">{cause.title}</span>
                      <p>{cause.description}</p>
                      <Link href="#donate-form" className="btn btn-primary w-100 py-3">
                        <i className="fa fa-plus me-2"></i>Donate Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Donation Causes End */}

      {/* Donate Form Section Start */}
      <div id="donate-form" className="container-fluid donate py-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-7 donate-text bg-light py-5">
              <div className="d-flex flex-column justify-content-center h-100 p-5">
                <h1 className="display-6 mb-4">Let&apos;s Make a Difference Together</h1>
                <p className="fs-5 mb-4">Through your donations, we spread kindness and support to children, families, and communities struggling to find stability.</p>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check-circle text-primary fa-2x me-3"></i>
                      <div>
                        <h5 className="mb-0">100% Secure</h5>
                        <small>Your payment is protected</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-heart text-primary fa-2x me-3"></i>
                      <div>
                        <h5 className="mb-0">Tax Deductible</h5>
                        <small>Receive a donation receipt</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-globe text-primary fa-2x me-3"></i>
                      <div>
                        <h5 className="mb-0">Global Impact</h5>
                        <small>Help communities worldwide</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-chart-line text-primary fa-2x me-3"></i>
                      <div>
                        <h5 className="mb-0">98% Direct</h5>
                        <small>Goes to programs</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 donate-form bg-primary py-5 text-center">
              <div className="h-100 p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    {/* Project Selection */}
                    <div className="col-12">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="project"
                          value={selectedProject || ''}
                          onChange={(e) => setSelectedProject(e.target.value ? parseInt(e.target.value) : null)}
                        >
                          <option value="">General Donation</option>
                          {projects.map((project) => (
                            <option key={project.id} value={project.id}>{project.title}</option>
                          ))}
                        </select>
                        <label htmlFor="project">Select Project (Optional)</label>
                      </div>
                    </div>
                    {/* Payment Method */}
                    <div className="col-12">
                      <p className="text-dark mb-2">Payment Method</p>
                      <div className="btn-group flex-wrap w-100" role="group">
                        {[
                          { value: 'flutterwave', label: 'Card' },
                          { value: 'paypal', label: 'PayPal' },
                          { value: 'mobile_money', label: 'Mobile Money' },
                        ].map((method) => (
                          <React.Fragment key={method.value}>
                            <input
                              type="radio"
                              className="btn-check"
                              name="payment-method"
                              id={`payment-${method.value}`}
                              checked={paymentMethod === method.value}
                              onChange={() => setPaymentMethod(method.value as PaymentMethod)}
                            />
                            <label className="btn btn-light" htmlFor={`payment-${method.value}`}>{method.label}</label>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="text-dark mb-2">Select Amount</p>
                      <div className="btn-group flex-wrap" role="group" aria-label="Donation amount">
                        {['5000', '15000', '30000', '60000', '150000'].map((amount) => (
                          <React.Fragment key={amount}>
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id={`btnradio${amount}`}
                              checked={selectedAmount === amount && !customAmount}
                              onChange={() => {
                                setSelectedAmount(amount);
                                setCustomAmount('');
                              }}
                            />
                            <label className="btn btn-light" htmlFor={`btnradio${amount}`}>{Number(amount).toLocaleString()}</label>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="custom-amount"
                          placeholder="Custom Amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount('');
                          }}
                          min="1"
                        />
                        <label htmlFor="custom-amount">Or Enter Custom Amount (XAF)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Message (Optional)"
                          style={{ height: '100px' }}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                        <label htmlFor="message">Message (Optional)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-secondary py-3 w-100"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : (
                          <>Donate {Number(customAmount || selectedAmount).toLocaleString()} XAF Now</>
                        )}
                      </button>
                    </div>
                    {/* Success Message */}
                    {submitSuccess && (
                      <div className="col-12">
                        <div className="alert alert-success" role="alert">
                          <i className="fa fa-check-circle me-2"></i>
                          Thank you for your donation! We will contact you shortly.
                        </div>
                      </div>
                    )}
                    {/* Error Message */}
                    {submitError && (
                      <div className="col-12">
                        <div className="alert alert-danger" role="alert">
                          <i className="fa fa-exclamation-circle me-2"></i>
                          {submitError}
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Donate Form Section End */}

      {/* FAQ Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <p className="section-title bg-white text-center text-primary px-3">FAQ</p>
            <h1 className="display-6 mb-4">Frequently Asked Questions</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How is my donation used?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      98% of your donation goes directly to our programs. We maintain minimal administrative costs to ensure maximum impact.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Is my donation tax-deductible?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Smile Organization is a registered nonprofit. You will receive a donation receipt for tax purposes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Can I make a recurring donation?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Monthly giving helps us plan long-term projects. Contact us to set up a recurring donation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="faqAccordion2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      How can I volunteer?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      Visit our Contact page to learn about volunteer opportunities. We welcome both local and remote volunteers.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      What payment methods do you accept?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      We accept all major credit cards, PayPal, bank transfers, and mobile money (for local donors).
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                      How can I track my donation&apos;s impact?
                    </button>
                  </h2>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      All donors receive quarterly reports on our programs. Major donors may request specific project updates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section End */}

      {/* Newsletter Start */}
      <NewsletterSection />
      {/* Newsletter End */}
    </>
  );
}

// Loading fallback component
function DonationLoading() {
  return (
    <div className="container-fluid py-5">
      <div className="container text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default function DonationPage() {
  return (
    <Suspense fallback={<DonationLoading />}>
      <DonationContent />
    </Suspense>
  );
}

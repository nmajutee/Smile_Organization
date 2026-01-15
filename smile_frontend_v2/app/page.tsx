'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getProjects } from '@/lib/api-services';
import type { Project } from '@/types/api';
import { getMediaUrl } from '@/lib/utils';
import { useCounter } from '@/lib/hooks';

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

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [donationAmount, setDonationAmount] = useState('20');
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  // Stats counters - using tuple pattern [count, setRef]
  const [teamMembersValue, teamMembersRef] = useCounter(500, 2500);
  const [awardsValue, awardsRef] = useCounter(70, 2000);
  const [projectsCountValue, projectsCountRef] = useCounter(projects.length > 0 ? projects.length : 3000, 2500);
  const [reviewsValue, reviewsRef] = useCounter(7000, 2500);

  // Fetch projects from backend
  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data.slice(0, 3)); // Only show first 3 projects
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setProjectsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const slides = [
    {
      title: "Together for a Better Tomorrow",
      description: "We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development.",
      image: "/gallery/Empowering-the-New-Generation.jpg"
    },
    {
      title: "Together, We Can End Hunger",
      description: "No one should go to bed hungry. Your support helps us bring smiles, hope, and a brighter future to those in need.",
      image: "/gallery/back-to-school-campaign.jpg"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Hero Section Start */}
      <section className="hero-section position-relative overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="hero-bg-shape hero-bg-shape-1"></div>
        <div className="hero-bg-shape hero-bg-shape-2"></div>

        <div className="container py-5">
          <div className="row g-5 align-items-center min-vh-75">

            {/* Left Content Column */}
            <div className="col-lg-6">
              <div className="hero-content" key={activeSlide}>
                <div className="animate-fade-in-up">
                  {/* Badge */}
                  <div className="hero-badge d-inline-flex align-items-center gap-2 mb-4">
                    <span className="hero-badge-dot"></span>
                    <span>Making a Difference Since 2024</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="hero-title mb-4">
                    {slides[activeSlide].title}
                  </h1>

                  {/* Description */}
                  <p className="hero-description mb-5">
                    {slides[activeSlide].description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="hero-buttons d-flex flex-wrap gap-3 mb-5">
                    <Link className="btn btn-primary btn-lg hero-btn-primary" href="/donation">
                      <i className="fa fa-heart me-2"></i> Donate Now
                    </Link>
                    <Link className="btn btn-outline-secondary btn-lg hero-btn-secondary" href="/contact">
                      Join Our Mission
                    </Link>
                  </div>

                  {/* Trust Stats */}
                  <div className="hero-stats d-flex flex-wrap gap-4 pt-4">
                    <div className="hero-stat">
                      <h4 className="hero-stat-number">50k+</h4>
                      <p className="hero-stat-label">Lives Impacted</p>
                    </div>
                    <div className="hero-stat-divider d-none d-sm-block"></div>
                    <div className="hero-stat">
                      <h4 className="hero-stat-number">1.2B XAF</h4>
                      <p className="hero-stat-label">Funds Raised</p>
                    </div>
                    <div className="hero-stat-divider d-none d-sm-block"></div>
                    <div className="hero-stat">
                      <h4 className="hero-stat-number">100%</h4>
                      <p className="hero-stat-label">Transparent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-lg-6">
              <div className="hero-image-wrapper position-relative">
                {/* Decorative glow behind image */}
                <div className="hero-image-glow"></div>

                {/* Main Image Container */}
                <div className="hero-image-container">
                  <Image
                    className="hero-image"
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].title}
                    width={800}
                    height={600}
                    priority
                    style={{ objectFit: 'cover', width: '100%', height: 'auto', minHeight: '450px' }}
                  />

                  {/* Verified Badge Card */}
                  <div className="hero-verified-badge d-none d-md-flex">
                    <div className="hero-verified-icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div>
                      <span className="hero-verified-label">Verified</span>
                      <span className="hero-verified-text">Non-Profit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>
      {/* Hero Section End */}

      {/* Video Section Start */}
      <div className="container-fluid bg-primary mb-5">
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
      {/* Video Section End */}

      <VideoModal />

      {/* About Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  className="img-fluid w-100"
                  src="/gallery/about-smile-alwayz-organization.jpg"
                  alt="About Image"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3">About Us</p>
              <h1 className="display-6 mb-4">Join Hands, Change the World</h1>
              <p className="mb-4">Every hand extended in kindness brings us closer to a world free from suffering. Be part of a global movement dedicated to building a future where equality and compassion thrive.</p>
              <div className="row g-4 pt-2">
                <div className="col-sm-6">
                  <div className="h-100">
                    <h3>Our Mission</h3>
                    <p>Our mission is to uplift underprivileged communities by providing resources, education, and tools for growth.</p>
                    <p className="text-dark"><i className="fa fa-check text-primary me-2"></i>No one should go to bed hungry.</p>
                    <p className="text-dark"><i className="fa fa-check text-primary me-2"></i>We spread kindness and support.</p>
                    <p className="text-dark mb-0"><i className="fa fa-check text-primary me-2"></i>We can change someone&apos;s life.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="h-100 bg-primary p-4 text-center">
                    <p className="fs-5 text-dark">Through your donations, we spread kindness and support to children and families.</p>
                    <Link className="btn btn-secondary py-2 px-4" href="/donation">Donate Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}

      {/* Features/Stats Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="rounded overflow-hidden">
                <div className="row g-0">
                  <div className="col-sm-6" ref={teamMembersRef}>
                    <div className="text-center bg-primary py-5 px-4 h-100">
                      <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                      <h1 className="display-5 mb-0">{teamMembersValue}</h1>
                      <span className="text-dark">Team Members</span>
                    </div>
                  </div>
                  <div className="col-sm-6" ref={awardsRef}>
                    <div className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-award fa-3x text-primary mb-3"></i>
                      <h1 className="display-5 text-white mb-0">{awardsValue}</h1>
                      <span className="text-white">Award Winning</span>
                    </div>
                  </div>
                  <div className="col-sm-6" ref={projectsCountRef}>
                    <div className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-list-check fa-3x text-primary mb-3"></i>
                      <h1 className="display-5 text-white mb-0">{projectsCountValue}</h1>
                      <span className="text-white">Total Projects</span>
                    </div>
                  </div>
                  <div className="col-sm-6" ref={reviewsRef}>
                    <div className="text-center bg-primary py-5 px-4 h-100">
                      <i className="fa fa-comments fa-3x text-secondary mb-3"></i>
                      <h1 className="display-5 mb-0">{reviewsValue}</h1>
                      <span className="text-dark">Client&apos;s Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3">Why Us!</p>
              <h1 className="display-6 mb-4">Few Reasons Why People Choosing Us!</h1>
              <p className="mb-4">We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development. Your support helps us bring smiles, hope, and a brighter future to those in need.</p>
              <p className="text-dark"><i className="fa fa-check text-primary me-2"></i>Transparent and accountable operations</p>
              <p className="text-dark"><i className="fa fa-check text-primary me-2"></i>Direct impact on communities in need</p>
              <p className="text-dark"><i className="fa fa-check text-primary me-2"></i>Sustainable development programs</p>
              <div className="d-flex mt-4">
                <Link className="btn btn-primary py-3 px-4 me-3" href="/donation">Donate Now</Link>
                <Link className="btn btn-secondary py-3 px-4" href="/contact">Join Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features/Stats Section End */}

      {/* Donation Causes Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <p className="section-title bg-white text-center text-primary px-3">Donation</p>
            <h1 className="display-6 mb-4">Our Donation Causes Around the World</h1>
          </div>
          <div className="row g-4">
            {projectsLoading ? (
              // Loading skeleton
              [1, 2, 3].map((i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="donation-item d-flex h-100 p-4">
                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                      <div className="bg-light" style={{ height: '100%', width: '100px' }}></div>
                    </div>
                    <div className="donation-detail flex-grow-1">
                      <div className="bg-light mb-4" style={{ height: '150px' }}></div>
                      <div className="bg-light mb-2" style={{ height: '24px', width: '60%' }}></div>
                      <div className="bg-light" style={{ height: '48px' }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : projects.length > 0 ? (
              // Dynamic projects from API
              projects.map((project) => {
                const progress = project.donation_goal > 0
                  ? Math.min(Math.round((Number(project.donation_raised) / Number(project.donation_goal)) * 100), 100)
                  : 0;
                return (
                  <div key={project.id} className="col-md-6 col-lg-4">
                    <div className="donation-item d-flex h-100 p-4">
                      <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                        <h6 className="mb-0">Raised</h6>
                        <span className="mb-2">{Number(project.donation_raised).toLocaleString()} XAF</span>
                        <div className="progress d-flex align-items-end w-100 h-100 mb-2" style={{ minHeight: '100px' }}>
                          <div
                            className="progress-bar w-100 bg-secondary"
                            role="progressbar"
                            style={{ height: `${progress}%` }}
                            aria-valuenow={progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="fs-4">{progress}%</span>
                          </div>
                        </div>
                        <h6 className="mb-0">Goal</h6>
                        <span>{Number(project.donation_goal).toLocaleString()} XAF</span>
                      </div>
                      <div className="donation-detail">
                        <div className="position-relative mb-4 donation-media">
                          <Image
                            src={getMediaUrl(project.image)}
                            alt={project.title}
                            fill
                            sizes="(max-width: 992px) 100vw, 300px"
                            style={{ objectFit: 'cover' }}
                          />
                          <span className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">{project.status}</span>
                        </div>
                        <Link href={`/donation?project=${project.id}`} className="h3 d-inline-block">{project.title}</Link>
                        <p>{project.description ? project.description.substring(0, 100) : 'Support this important cause'}...</p>
                        <Link href={`/donation?project=${project.id}`} className="btn btn-primary w-100 py-3">
                          <i className="fa fa-plus me-2"></i>Donate Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // Fallback static content
              [
                { image: '/gallery/back-to-school-campaign.jpg', category: 'Food', title: 'Healthy Food', progress: 85, raised: 4800000, goal: 6000000 },
                { image: '/gallery/Empowering-the-New-Generation.jpg', category: 'Health', title: 'Water Treatment', progress: 95, raised: 5700000, goal: 6000000 },
                { image: '/gallery/InShot_20230911_205422159.jpg', category: 'Education', title: 'Education Support', progress: 75, raised: 4500000, goal: 6000000 },
              ].map((cause, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="donation-item d-flex h-100 p-4">
                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                      <h6 className="mb-0">Raised</h6>
                      <span className="mb-2">{cause.raised.toLocaleString()} XAF</span>
                      <div className="progress d-flex align-items-end w-100 h-100 mb-2" style={{ minHeight: '100px' }}>
                        <div
                          className="progress-bar w-100 bg-secondary"
                          role="progressbar"
                          style={{ height: `${cause.progress}%` }}
                          aria-valuenow={cause.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="fs-4">{cause.progress}%</span>
                        </div>
                      </div>
                      <h6 className="mb-0">Goal</h6>
                      <span>{cause.goal.toLocaleString()} XAF</span>
                    </div>
                    <div className="donation-detail">
                      <div className="position-relative mb-4 donation-media">
                        <Image
                          src={cause.image}
                          alt={cause.title}
                          fill
                          sizes="(max-width: 992px) 100vw, 300px"
                          style={{ objectFit: 'cover' }}
                        />
                        <span className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">{cause.category}</span>
                      </div>
                      <Link href="/donation" className="h3 d-inline-block">{cause.title}</Link>
                      <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                      <Link href="/donation" className="btn btn-primary w-100 py-3"><i className="fa fa-plus me-2"></i>Donate Now</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* Donation Causes Section End */}

      {/* Donate Form Section Start */}
      <div className="container-fluid donate py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="donate-hero h-100">
                <div className="donate-hero-media" style={{ position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src="/gallery/back-to-school-campaign.jpg"
                    alt="Donation impact"
                    fill
                    sizes="(max-width: 992px) 100vw, 60vw"
                    style={{ objectFit: 'cover', position: 'absolute' }}
                    priority={false}
                  />
                </div>
                <div className="donate-hero-content">
                  <p className="section-title bg-white text-start text-primary pe-3">Donate</p>
                  <h2 className="display-6 mb-3">Let&apos;s Donate to Needy People for Better Lives</h2>
                  <p className="fs-5 mb-0">Through your donations, we spread kindness and support to children, families, and communities struggling to find stability.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="donate-card h-100">
                <h3 className="h4 mb-4">Make a donation</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="donate-amounts" role="group" aria-label="Donation amount">
                        {['5000', '10000', '25000', '50000', '100000'].map((amount) => (
                          <div key={amount} className="donate-amount">
                            <input
                              type="radio"
                              className="btn-check"
                              name="donationAmount"
                              id={`amount${amount}`}
                              value={amount}
                              checked={donationAmount === amount}
                              onChange={(e) => setDonationAmount(e.target.value)}
                            />
                            <label className="btn btn-outline-secondary w-100" htmlFor={`amount${amount}`}>
                              {Number(amount).toLocaleString()} XAF
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-secondary py-3 w-100" type="submit">Donate Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Donate Form Section End */}

      {/* Team Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
            <h1 className="display-6 mb-4">Meet Our Dedicated Team Members</h1>
          </div>
          <div className="row g-4">
            {[
              { name: 'Boris Johnson', role: 'Founder & CEO', image: '/gallery/InShot_20230911_205611720.jpg' },
              { name: 'Donald Pakura', role: 'Project Manager', image: '/gallery/InShot_20230911_210951284.jpg' },
              { name: 'Alexander Bell', role: 'Volunteer', image: '/gallery/InShot_20230911_211148189.jpg' },
            ].map((member, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="team-item d-flex h-100 p-4">
                  <div className="team-detail pe-4">
                    <div className="team-media mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 992px) 100vw, 200px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </div>
                  <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                    <a className="btn btn-square btn-primary my-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary my-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
                    <a className="btn btn-square btn-primary my-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-square btn-primary my-2" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Section End */}

      {/* Testimonial Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-12 col-lg-4 col-xl-3">
              <div className="testimonial-title">
                <h1 className="display-6 mb-4">What People Say About Our Activities.</h1>
                <p className="fs-5 mb-0">We work to bring smiles, hope, and a brighter future to those in need.</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              {[
                {
                  text: "Education is the foundation of change. By funding schools, scholarships, and training programs, we can help children and adults unlock their potential for a better future.",
                  name: "Alexander Bell",
                  role: "CEO, Founder",
                  image: "/gallery/InShot_20230911_211303229.jpg"
                },
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                      <div className="testimonial-img">
                        <Image
                          className="img-fluid"
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={400}
                          height={300}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="testimonial-text pb-5 pb-md-0">
                        <div className="mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i key={star} className="fa fa-star text-primary"></i>
                          ))}
                        </div>
                        <p className="fs-5">{testimonial.text}</p>
                        <div className="d-flex align-items-center">
                          <div className="btn-lg-square bg-light text-secondary flex-shrink-0 d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-right fa-2x"></i>
                          </div>
                          <div className="ps-3">
                            <h5 className="mb-0">{testimonial.name}</h5>
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section End */}

      {/* Newsletter Section Start */}
      <div className="container-fluid bg-primary py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h1 className="display-6 mb-4">Subscribe to Our Newsletter</h1>
              <div className="position-relative w-100 mb-2">
                <input
                  className="form-control border-0 w-100 ps-4 pe-5"
                  type="email"
                  placeholder="Enter Your Email"
                  style={{ height: '60px' }}
                />
                <button type="button" className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2">
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
              <p className="mb-0">Don&apos;t worry, we won&apos;t spam you with emails.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section End */}
    </>
  );
}

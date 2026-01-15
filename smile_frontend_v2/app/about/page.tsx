'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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

// Team member data
const teamMembersData = [
  {
    id: 1,
    name: 'Numfor Boris',
    role: 'Founder & CEO',
    image: '/gallery/InShot_20230911_205611720.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      youtube: '#'
    }
  },
  {
    id: 2,
    name: 'Donald Pakura',
    role: 'Project Manager',
    image: '/gallery/InShot_20230911_210951284.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      youtube: '#'
    }
  },
  {
    id: 3,
    name: 'Alexander Bell',
    role: 'Volunteer',
    image: '/gallery/InShot_20230911_211148189.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      youtube: '#'
    }
  }
];

export default function AboutPage() {
  const [email, setEmail] = useState('');

  // Stats counters - using tuple pattern [count, setRef]
  const [teamMembersCountValue, teamMembersCountRef] = useCounter(500, 2500);
  const [awardsValue, awardsRef] = useCounter(70, 2000);
  const [projectsValue, projectsRef] = useCounter(3000, 2500);
  const [reviewsValue, reviewsRef] = useCounter(7000, 2500);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-4">
          <h1 className="display-3 animated slideInDown text-white">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <span className="text-white">Pages</span>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Video Section Start */}
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
      {/* Video Section End */}

      {/* Video Modal */}
      <VideoModal />

      {/* About Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              <div className="about-img">
                <Image
                  className="img-fluid w-100"
                  src="/gallery/about-smile-alwayz-organization.jpg"
                  alt="About Smile Organization"
                  width={600}
                  height={500}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3">About Us</p>
              <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">Join Hands, Change the World</h1>
              <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
                Every hand extended in kindness brings us closer to a world free from suffering.
                Be part of a global movement dedicated to building a future where equality and compassion thrive.
              </p>
              <div className="row g-4 pt-2">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="h-100">
                    <h3>Our Mission</h3>
                    <p>Our mission is to uplift underprivileged communities by providing resources, education, and tools for growth.</p>
                    <p className="text-dark">
                      <i className="fa fa-check text-primary me-2"></i>No one should go to bed hungry.
                    </p>
                    <p className="text-dark">
                      <i className="fa fa-check text-primary me-2"></i>We spread kindness and support.
                    </p>
                    <p className="text-dark mb-0">
                      <i className="fa fa-check text-primary me-2"></i>We can change someone&apos;s life.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="h-100 bg-primary p-4 text-center">
                    <p className="fs-5 text-dark">
                      Through your donations, we spread kindness and support to children and families.
                    </p>
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
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div ref={teamMembersCountRef} className="text-center bg-primary py-5 px-4 h-100">
                      <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                      <h1 className="display-5 mb-0">{teamMembersCountValue}</h1>
                      <span className="text-dark">Team Members</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div ref={awardsRef} className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-award fa-3x text-primary mb-3"></i>
                      <h1 className="display-5 text-white mb-0">{awardsValue}</h1>
                      <span className="text-white">Award Winning</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div ref={projectsRef} className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-list-check fa-3x text-primary mb-3"></i>
                      <h1 className="display-5 text-white mb-0">{projectsValue}</h1>
                      <span className="text-white">Total Projects</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <div ref={reviewsRef} className="text-center bg-primary py-5 px-4 h-100">
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
              <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">Few Reasons Why People Choosing Us!</h1>
              <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
                We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development.
                Your support helps us bring smiles, hope, and a brighter future to those in need.
              </p>
              <p className="text-dark wow fadeIn" data-wow-delay="0.4s">
                <i className="fa fa-check text-primary me-2"></i>Transparent and accountable operations
              </p>
              <p className="text-dark wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-check text-primary me-2"></i>Direct impact on communities we serve
              </p>
              <p className="text-dark wow fadeIn" data-wow-delay="0.6s">
                <i className="fa fa-check text-primary me-2"></i>Sustainable long-term development programs
              </p>
              <div className="d-flex mt-4 wow fadeIn" data-wow-delay="0.7s">
                <Link className="btn btn-primary py-3 px-4 me-3" href="/donation">Donate Now</Link>
                <Link className="btn btn-secondary py-3 px-4" href="/contact">Join Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features/Stats Section End */}

      {/* Team Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
            <h1 className="display-6 mb-4">Meet Our Dedicated Team Members</h1>
          </div>
          <div className="row g-4">
            {teamMembersData.map((member, index) => (
              <div key={member.id} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="team-item d-flex h-100 p-4">
                  <div className="team-detail pe-4">
                    <Image
                      className="img-fluid mb-4"
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      style={{ objectFit: 'cover' }}
                    />
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </div>
                  <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                    <Link className="btn btn-square btn-primary my-2" href={member.socials.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary my-2" href={member.socials.twitter}>
                      <i className="fab fa-x-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary my-2" href={member.socials.instagram}>
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary my-2" href={member.socials.youtube}>
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Section End */}

      {/* Newsletter Section Start */}
      <div className="container-fluid bg-primary py-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-6 mb-4">Subscribe to Our Newsletter</h1>
              <form onSubmit={handleNewsletterSubmit}>
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
              <p className="mb-0">Don&apos;t worry, we won&apos;t spam you with emails.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section End */}
    </>
  );
}

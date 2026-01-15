'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Video Modal Component
function VideoModal() {
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
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                id="video"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    text: "Education is the foundation of change. By funding schools, scholarships, and training programs, we can help children and adults unlock their potential for a better future.",
    name: "Alexander Bell",
    role: "CEO, Founder",
    image: "/gallery/InShot_20230911_211303229.jpg"
  },
  {
    text: "Every hand extended in kindness brings us closer to a world free from suffering. Be part of a global movement dedicated to building a future where equality and compassion thrive.",
    name: "Donald Pakura",
    role: "Project Manager",
    image: "/gallery/InShot_20230911_210951284.jpg"
  },
  {
    text: "Love and compassion have the power to heal. Through your donations and volunteer work, we can spread kindness and support to children, families, and communities struggling to find stability.",
    name: "Boris Johnson",
    role: "Volunteer Coordinator",
    image: "/gallery/InShot_20230911_211148189.jpg"
  }
];

export default function TestimonialPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-4">
          <h1 className="display-3">Testimonial</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><span>Pages</span></li>
              <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

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
              <div className="position-relative">
                <div className="testimonial-item">
                  <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                      <div className="testimonial-img">
                        <Image
                          className="img-fluid"
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
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
                        <p className="fs-5">{testimonials[activeIndex].text}</p>
                        <div className="d-flex align-items-center">
                          <div className="btn-lg-square bg-light text-secondary flex-shrink-0 d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-right fa-2x"></i>
                          </div>
                          <div className="ps-3">
                            <h5 className="mb-0">{testimonials[activeIndex].name}</h5>
                            <span>{testimonials[activeIndex].role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Navigation Buttons */}
                <div className="d-flex justify-content-center mt-4">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={prevTestimonial}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`btn mx-1 ${activeIndex === index ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setActiveIndex(index)}
                      style={{ width: '40px' }}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={nextTestimonial}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
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

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { submitContactForm } from '@/lib/api-services';

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      await submitContactForm(formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-4">
          <h1 className="display-3 text-white animated slideInDown">Contact</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
              <li className="breadcrumb-item"><span className="text-white">Pages</span></li>
              <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
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

      {/* Contact Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <p className="section-title bg-white text-start text-primary pe-3">Contact</p>
              <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
              <iframe
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d10.15!3d5.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTcnMDAuMCJOIDEwwrAwOScwMC4wIkU!5e0!3m2!1sen!2scm!4v1"
                frameBorder="0"
                style={{ height: '410px', border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
            <div className="col-lg-7">
              <h4 className="lh-base mb-4">We&apos;d love to hear from you! Send us a message and we&apos;ll respond as soon as possible.</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '250px' }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="col-12">
                      <div className="alert alert-success" role="alert">
                        <i className="fa fa-check-circle me-2"></i>
                        Thank you for your message! We will get back to you soon.
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
      {/* Contact Section End */}

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

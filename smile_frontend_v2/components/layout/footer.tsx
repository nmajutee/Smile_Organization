'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const galleryThumbs = [
    '/gallery/smile-organization.jpg',
    '/gallery/back-to-school-campaign.jpg',
    '/gallery/Empowering-the-New-Generation.jpg',
    '/gallery/about-smile-alwayz-organization.jpg',
    '/gallery/InShot_20230911_205422159.jpg',
    '/gallery/InShot_20230911_211148189.jpg',
  ];

  return (
    <div className="container-fluid footer py-5">
      <div className="container">
        <div className="row g-5 py-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Our Office</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Bamenda, Cameroon</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+237 XXX XXX XXX</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@smileorg.org</p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-primary me-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a className="btn btn-square btn-primary me-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-primary me-2" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-square btn-primary me-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <Link className="btn btn-link" href="/about">About Us</Link>
            <Link className="btn btn-link" href="/contact">Contact Us</Link>
            <Link className="btn btn-link" href="/donation">Donate</Link>
            <Link className="btn btn-link" href="/team">Our Team</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Office Hours</h4>
            <p className="mb-1">Monday - Friday</p>
            <h6 className="text-light">09:00 am - 05:00 pm</h6>
            <p className="mb-1">Saturday</p>
            <h6 className="text-light">09:00 am - 12:00 pm</h6>
            <p className="mb-1">Sunday</p>
            <h6 className="text-light">Closed</h6>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Gallery</h4>
            <div className="row g-2">
              {galleryThumbs.map((src) => (
                <div key={src} className="col-4">
                  <Image
                    className="img-fluid w-100"
                    src={src}
                    alt="Gallery"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="copyright pt-5">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="fw-semi-bold" href="/">Smile Organization</Link>, All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Made with ❤️ for the children of Cameroon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

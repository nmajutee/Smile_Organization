'use client';

import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="container-fluid bg-secondary top-bar">
      <div className="row align-items-center h-100">
        <div className="col-lg-4 text-center text-lg-start">
          <Link href="/">
            <h1 className="display-5 text-white m-0">Smile Organization</h1>
          </Link>
        </div>
        <div className="col-lg-8 d-none d-lg-block">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex justify-content-end">
                <div className="flex-shrink-0 btn-square bg-primary d-flex align-items-center justify-content-center">
                  <i className="fa fa-phone-alt text-dark"></i>
                </div>
                <div className="ms-2">
                  <h6 className="text-primary mb-0">Call Us</h6>
                  <span className="text-white">+237 670 000 000</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-end">
                <div className="flex-shrink-0 btn-square bg-primary d-flex align-items-center justify-content-center">
                  <i className="fa fa-envelope-open text-dark"></i>
                </div>
                <div className="ms-2">
                  <h6 className="text-primary mb-0">Mail Us</h6>
                  <span className="text-white">info@smileorg.org</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-end">
                <div className="flex-shrink-0 btn-square bg-primary d-flex align-items-center justify-content-center">
                  <i className="fa fa-map-marker-alt text-dark"></i>
                </div>
                <div className="ms-2">
                  <h6 className="text-primary mb-0">Address</h6>
                  <span className="text-white">Cameroon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

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

const teamMembers = [
  { name: 'Numfor Boris', role: 'Founder & CEO', image: '/gallery/InShot_20230911_205611720.jpg' },
  { name: 'Donald Pakura', role: 'Project Manager', image: '/gallery/InShot_20230911_210951284.jpg' },
  { name: 'Alexander Bell', role: 'Volunteer Coordinator', image: '/gallery/InShot_20230911_211148189.jpg' },
  { name: 'Marie Ngong', role: 'Program Director', image: '/gallery/InShot_20230911_205422159.jpg' },
  { name: 'James Mitchell', role: 'Finance Manager', image: '/gallery/InShot_20230911_211303229.jpg' },
  { name: 'Sarah Chen', role: 'Community Outreach', image: '/gallery/smile-organization.jpg' },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-4">
          <h1 className="display-3 text-white animated slideInDown">Our Team</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
              <li className="breadcrumb-item"><span className="text-white">Pages</span></li>
              <li className="breadcrumb-item active text-white" aria-current="page">Our Team</li>
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

      {/* Team Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
            <h1 className="display-6 mb-4">Meet Our Dedicated Team Members</h1>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="team-item d-flex h-100 p-4">
                  <div className="team-detail pe-4">
                    <Image
                      className="img-fluid mb-4"
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={250}
                      style={{ objectFit: 'cover' }}
                    />
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

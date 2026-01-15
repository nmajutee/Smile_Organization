'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LawPage() {
  const [activeTab, setActiveTab] = useState('registration');

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-4">
          <h1 className="display-3 animated slideInDown text-white">Legal Documents</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">Law & Registration</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button
                  className={`nav-link text-start ${activeTab === 'registration' ? 'active' : ''}`}
                  onClick={() => setActiveTab('registration')}
                  type="button"
                >
                  <i className="fa fa-file-contract me-2"></i> Registration
                </button>
                <button
                  className={`nav-link text-start ${activeTab === 'constitution' ? 'active' : ''}`}
                  onClick={() => setActiveTab('constitution')}
                  type="button"
                >
                  <i className="fa fa-book me-2"></i> Constitution
                </button>
                <button
                  className={`nav-link text-start ${activeTab === 'bylaws' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bylaws')}
                  type="button"
                >
                  <i className="fa fa-gavel me-2"></i> By-Laws
                </button>
                <button
                  className={`nav-link text-start ${activeTab === 'compliance' ? 'active' : ''}`}
                  onClick={() => setActiveTab('compliance')}
                  type="button"
                >
                  <i className="fa fa-check-circle me-2"></i> Compliance
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">

                {/* Registration Tab */}
                <div className={`tab-pane fade ${activeTab === 'registration' ? 'show active' : ''}`}>
                  <h2 className="mb-4">Official Registration</h2>
                  <div className="bg-light p-4 rounded mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fa fa-certificate fa-3x text-primary me-3"></i>
                      <div>
                        <h4 className="mb-1">Legal Status</h4>
                        <p className="mb-0 text-muted">Officially registered Non-Governmental Organization (NGO)</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row g-4 mt-2">
                      <div className="col-md-6">
                        <h5 className="mb-3">Registration Details</h5>
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="fa fa-check text-primary me-2"></i><strong>Registration No:</strong> [Insert Number]</li>
                          <li className="mb-2"><i className="fa fa-check text-primary me-2"></i><strong>Date of Issue:</strong> [Insert Date]</li>
                          <li className="mb-2"><i className="fa fa-check text-primary me-2"></i><strong>Authority:</strong> Ministry of Territorial Administration</li>
                          <li className="mb-2"><i className="fa fa-check text-primary me-2"></i><strong>Location:</strong> Bamenda, Cameroon</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <div className="border rounded p-3 text-center bg-white">
                          <i className="fa fa-file-pdf fa-2x text-danger mb-2"></i>
                          <h6>Registration Certificate</h6>
                          <button className="btn btn-sm btn-outline-primary mt-2">Download PDF</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    The Smile Organization is fully compliant with the laws of the Republic of Cameroon regarding non-profit organizations and associations. We maintain transparency in all our operations and adhere to all regulatory requirements.
                  </p>
                </div>

                {/* Constitution Tab */}
                <div className={`tab-pane fade ${activeTab === 'constitution' ? 'show active' : ''}`}>
                  <h2 className="mb-4">Organization Constitution</h2>
                  <p className="lead mb-4">Our constitution defines our purpose, structure, and the fundamental principles by which we operate.</p>

                  <div className="accordion" id="constitutionAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Article 1: Name and Purpose
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#constitutionAccordion">
                        <div className="accordion-body">
                          The organization shall be known as <strong>Smile Organization</strong>. Its primary purpose is to provide humanitarian aid, education support, and community development initiatives in underprivileged regions of Cameroon.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Article 2: Membership
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#constitutionAccordion">
                        <div className="accordion-body">
                          Membership is open to all individuals who subscribe to the aims and objectives of the organization, regardless of race, religion, or gender.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Article 3: Governance
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#constitutionAccordion">
                        <div className="accordion-body">
                          The organization is governed by a Board of Directors, led by the Founder & CEO, ensuring accountability and strategic direction.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* By-Laws Tab */}
                <div className={`tab-pane fade ${activeTab === 'bylaws' ? 'show active' : ''}`}>
                  <h2 className="mb-4">By-Laws & Regulations</h2>
                  <p>Our by-laws provide the specific rules and procedures for the daily governance of the Smile Organization.</p>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title text-primary"><i className="fa fa-hand-holding-usd me-2"></i>Financial Integrity</h5>
                          <p className="card-text">Strict financial controls and annual audits ensure 100% of public donations reach their intended beneficiaries.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title text-primary"><i className="fa fa-users-cog me-2"></i>Code of Conduct</h5>
                          <p className="card-text">All staff and volunteers adhere to a strict code of conduct prioritizing child protection and community respect.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compliance Tab */}
                <div className={`tab-pane fade ${activeTab === 'compliance' ? 'show active' : ''}`}>
                  <h2 className="mb-4">Legal Compliance</h2>
                  <div className="bg-white p-4 border rounded">
                    <p>We are committed to full compliance with:</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><i className="fa fa-check-square text-success me-2"></i>Law No. 90/053 of 19 December 1990 governing Freedom of Association in Cameroon</li>
                      <li className="list-group-item"><i className="fa fa-check-square text-success me-2"></i>Tax regulations for non-profit entities</li>
                      <li className="list-group-item"><i className="fa fa-check-square text-success me-2"></i>International labor standards for staff and volunteers</li>
                      <li className="list-group-item"><i className="fa fa-check-square text-success me-2"></i>Child protection laws and policies</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

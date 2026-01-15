'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="container-fluid bg-secondary px-0 sticky-top" style={{ zIndex: 1020 }}>
      <div className={`nav-bar ${isScrolled ? 'fixed-top' : ''}`} style={{ padding: isScrolled ? '0' : undefined }}>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-0">
          <h4 className="d-lg-none m-0">Menu</h4>
          <button
            type="button"
            className="navbar-toggler me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav me-auto">
              <Link href="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
              <Link href="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>
                About
              </Link>
              <Link href="/donation" className={`nav-item nav-link ${isActive('/donation') ? 'active' : ''}`}>
                Donation
              </Link>
              <Link href="/team" className={`nav-item nav-link ${isActive('/team') ? 'active' : ''}`}>
                Our Team
              </Link>
              <Link href="/blog" className={`nav-item nav-link ${isActive('/blog') ? 'active' : ''}`}>
                Blog
              </Link>
              <Link href="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </div>
            <div className="d-none d-lg-flex ms-auto">
              <a className="btn btn-square btn-dark ms-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-dark ms-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-dark ms-2" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

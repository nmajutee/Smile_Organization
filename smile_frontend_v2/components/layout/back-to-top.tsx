'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      href="#"
      className={`btn btn-lg btn-primary btn-lg-square back-to-top ${isVisible ? 'd-flex' : 'd-none'}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}

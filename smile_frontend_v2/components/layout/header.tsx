'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="ul-header ul-header-2">
            {/* Top Bar */}
            <div className="ul-header-top">
                <div className="ul-header-top-wrapper ul-header-container">
                    <div className="ul-header-top-left">
                        <span className="address">
                            <i className="flaticon-pin"></i> Rd. Santa Ana, Illinois 85486, United States
                        </span>
                    </div>
                    <div className="ul-header-top-right">
                        <div className="ul-header-top-social">
                            <span className="title">Follow us: </span>
                            <div className="links">
                                <a href="#"><i className="flaticon-facebook"></i></a>
                                <a href="#"><i className="flaticon-twitter"></i></a>
                                <a href="#"><i className="flaticon-instagram"></i></a>
                                <a href="#"><i className="flaticon-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Header */}
            <div className={`ul-header-bottom to-be-sticky ${isSticky ? 'is-sticky' : ''}`}>
                <div className="ul-header-bottom-wrapper ul-header-container">
                    <div className="logo-container">
                        <Link href="/" className="d-inline-block">
                            <img src="/assets/img/logo.svg" alt="logo" className="logo" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="ul-header-nav-wrapper">
                        <div className="to-go-to-sidebar-in-mobile">
                            <nav className="ul-header-nav">
                                <Link href="/">Home</Link>
                                <Link href="/about">About</Link>

                                <div className="has-sub-menu">
                                    <a role="button">Pages</a>
                                    <div className="ul-header-submenu">
                                        <ul>
                                            <li><Link href="/projects">Projects</Link></li>
                                            <li><Link href="/team">Team</Link></li>
                                            <li><Link href="/faq">FAQs</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/contact">Contact</Link>
                            </nav>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="ul-header-actions">
                        <button className="ul-header-search-opener">
                            <i className="flaticon-search"></i>
                        </button>
                        <Link href="/contact" className="ul-btn d-sm-inline-flex d-none">
                            <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> Join With us
                        </Link>
                        <button className="ul-header-sidebar-opener d-lg-none d-inline-flex">
                            <i className="flaticon-menu"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

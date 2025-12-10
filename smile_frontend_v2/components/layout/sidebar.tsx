'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    useEffect(() => {
        // Setup sidebar toggle functionality
        const sidebarOpener = document.querySelector('.ul-header-sidebar-opener');
        const sidebarCloser = document.querySelector('.ul-sidebar-closer');
        const sidebar = document.querySelector('.ul-sidebar');

        const openSidebar = () => {
            sidebar?.classList.add('active');
        };

        const closeSidebar = () => {
            sidebar?.classList.remove('active');
        };

        sidebarOpener?.addEventListener('click', openSidebar);
        sidebarCloser?.addEventListener('click', closeSidebar);

        return () => {
            sidebarOpener?.removeEventListener('click', openSidebar);
            sidebarCloser?.removeEventListener('click', closeSidebar);
        };
    }, []);

    return (
        <div className="ul-sidebar">
            {/* Header */}
            <div className="ul-sidebar-header">
                <div className="ul-sidebar-header-logo">
                    <Link href="/">
                        <img src="/assets/img/logo.svg" alt="logo" className="logo" />
                    </Link>
                </div>
                <button className="ul-sidebar-closer">
                    <i className="flaticon-close"></i>
                </button>
            </div>

            <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

            {/* Footer */}
            <div className="ul-sidebar-footer">
                <span className="ul-sidebar-footer-title">Follow us</span>
                <div className="ul-sidebar-footer-social">
                    <a href="#"><i className="flaticon-facebook"></i></a>
                    <a href="#"><i className="flaticon-twitter"></i></a>
                    <a href="#"><i className="flaticon-instagram"></i></a>
                    <a href="#"><i className="flaticon-youtube"></i></a>
                </div>
            </div>
        </div>
    );
}

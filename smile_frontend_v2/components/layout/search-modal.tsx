'use client';

import { useEffect } from 'react';

export default function SearchModal() {
    useEffect(() => {
        // Setup search modal functionality
        const searchOpener = document.querySelector('.ul-header-search-opener');
        const searchCloser = document.querySelector('.ul-search-closer');
        const searchModal = document.querySelector('.ul-search-form-wrapper');

        const openSearch = () => {
            searchModal?.classList.add('active');
        };

        const closeSearch = () => {
            searchModal?.classList.remove('active');
        };

        searchOpener?.addEventListener('click', openSearch);
        searchCloser?.addEventListener('click', closeSearch);

        return () => {
            searchOpener?.removeEventListener('click', openSearch);
            searchCloser?.removeEventListener('click', closeSearch);
        };
    }, []);

    return (
        <div className="ul-search-form-wrapper flex-grow-1 flex-shrink-0">
            <button className="ul-search-closer">
                <i className="flaticon-close"></i>
            </button>

            <form action="#" className="ul-search-form">
                <div className="ul-search-form-right">
                    <input type="search" name="search" id="ul-search" placeholder="Search Here" />
                    <button type="submit">
                        <span className="icon">
                            <i className="flaticon-search"></i>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}

/**
 * Smile Organization Design System
 * Inspired by Kofi Annan Foundation - Elegant, Professional, Warm
 *
 * Mission: Create a platform that inspires hope and action for vulnerable children
 */

export const tokens = {
    colors: {
        // Neutrals - Warm undertones
        white: '#FFFFFF',
        cream: '#FFFEF9',
        gray50: '#FAFAF8',
        gray100: '#F5F4F0',
        gray200: '#E8E6E1',
        gray300: '#D4D1C9',
        gray400: '#A8A49A',
        gray500: '#6B6860',
        gray600: '#4A4843',
        gray700: '#36342F',
        gray800: '#252420',
        gray900: '#1A1918',

        // Primary - Deep Teal (Trust, Stability, Hope)
        primary: {
            DEFAULT: '#006B6B',
            dark: '#004D4D',
            light: '#008B8B',
            subtle: '#E6F3F3',
            50: '#F0F9F9',
            100: '#D9F0F0',
            200: '#B3E0E0',
            300: '#80CCCC',
            400: '#4DB8B8',
            500: '#006B6B',
            600: '#005858',
            700: '#004545',
            800: '#003333',
            900: '#002222',
        },

        // Secondary - Warm Gold (Warmth, Optimism, Energy)
        secondary: {
            DEFAULT: '#C4A962',
            dark: '#A68B3D',
            light: '#DCC98A',
            subtle: '#FBF8F0',
            50: '#FDFBF5',
            100: '#F9F4E6',
            200: '#F2E8CC',
            300: '#E6D6A3',
            400: '#D4BE78',
            500: '#C4A962',
            600: '#A68B3D',
            700: '#806A2E',
            800: '#5A4A20',
            900: '#3D3215',
        },

        // Accent - Magenta/Pink (Compassion, Care, Action)
        accent: {
            DEFAULT: '#C41E7F',
            dark: '#9E1866',
            light: '#E04A9E',
            subtle: '#FCF0F6',
            hover: '#A81A6D',
            50: '#FEF5F9',
            100: '#FCE5F0',
            200: '#F9C6DE',
            300: '#F49EC6',
            400: '#E56AAA',
            500: '#C41E7F',
            600: '#A81A6D',
            700: '#831555',
            800: '#5E103E',
            900: '#3D0A28',
        },

        // Semantic
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#D32F2F',
        info: '#0288D1',
    },

    typography: {
        fontFamily: {
            // Elegant serif for headings - sophisticated, trustworthy
            serif: '"Playfair Display", "Georgia", "Times New Roman", serif',
            // Clean sans-serif for body - readable, modern
            sans: '"Source Sans 3", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
        fontSize: {
            xs: '0.75rem',    // 12px
            sm: '0.875rem',   // 14px
            base: '1rem',     // 16px
            lg: '1.125rem',   // 18px
            xl: '1.25rem',    // 20px
            '2xl': '1.5rem',  // 24px
            '3xl': '1.875rem',// 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem',    // 48px
            '6xl': '3.75rem', // 60px
            '7xl': '4.5rem',  // 72px
            '8xl': '6rem',    // 96px
        },
        fontWeight: {
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
        },
        lineHeight: {
            none: '1',
            tight: '1.2',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '1.8',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
    },

    spacing: {
        0: '0px',
        px: '1px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
    },

    borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
    },

    boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        elegant: '0 4px 20px -2px rgba(0, 107, 107, 0.15)',
        warm: '0 4px 20px -2px rgba(196, 169, 98, 0.2)',
        none: 'none',
    },

    transition: {
        default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fast: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        slow: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }
};

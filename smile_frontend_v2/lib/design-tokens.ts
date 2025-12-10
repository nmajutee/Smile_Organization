export const tokens = {
    colors: {
        // Neutrals
        white: '#FFFFFF',
        gray50: '#FAFAFA',
        gray100: '#F5F5F5',
        gray200: '#E5E5E5',
        gray300: '#D4D4D4',
        gray400: '#A3A3A3',
        gray500: '#737373',
        gray600: '#525252',
        gray700: '#404040',
        gray800: '#262626',
        gray900: '#171717',

        // Accent (Warm Coral/Orange)
        accent: {
            DEFAULT: '#FF6B35',
            hover: '#E55A2B',
            light: '#FF8C61',
            subtle: '#FFF0EB',
        },

        // Semantic
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
    },

    typography: {
        fontFamily: {
            sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
        lineHeight: {
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
    },

    spacing: {
        0: '0px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
    },

    borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
    },

    boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        none: 'none',
    },

    transition: {
        default: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        fast: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        slow: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }
};

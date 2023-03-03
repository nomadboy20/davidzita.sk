/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        // "./nuxt.config.{js,ts}",
        './app.vue',
    ],
    safelist: [],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '990px',
            // => @media (min-width: 1024px) { ... }

            xl: '1330px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {

                primary: '#41b883',
                gold: '#e1c77e',
                dark: '#283038',

                secondary: {
                    900: '#302e7b',
                    800: '#454388',
                    100: '#d6d5e5',
                },
                yellow: '#e9e964',
                teal: {
                    500: '#53efc3',
                },
            },

            fontSize: {
                xxs: '.65rem',
                xs: '.75rem',
                sm: '.875rem',
                base: '1rem',
                lg: '1.25rem',
                'xl': '1.5rem',
                '2xl': '2rem',
                '10xl': '8rem',
            },

            lineHeight: {
                'main-title': 1.1,
            },
            fontWeight: {
                light: 300,
                normal: 400,
                medium: 500,
            },
            container: {
                center: true,

                screens: {
                    // sm: '600px',
                    // md: '768px',
                    // lg: '990px',
                    xl: '1260px',
                },
            },
            zIndex: {
                10: 10,
                20: 20,
                50: 50, // block
                60: 60, // block drop-area
                70: 70, // block control
                // 90: 90,
                100: 100, // drop area
                2000: 2000,
                2001: 2001,
                2002: 2002,
            },
            opacity: {
                25: 0.25,
                50: 0.5,
                75: 0.75,
            },
            border: {},
        },
        fontFamily: {
            bebas: 'Bebas Neue, cursive',
            roboto: 'Roboto, sans-serif'
        },
    },
}

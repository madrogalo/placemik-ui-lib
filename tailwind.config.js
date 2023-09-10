/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
    },
    extend: {
      fontFamily: {
        roboto: 'Roboto',
      },
      maxWidth: {
        card: 'calc(3 * 32% + 4rem)',
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(200px,1fr))',
      },
      padding: {
        5: '5px',
        7: '7px',
        15: '15px',
        25: '25px',
      },
      margin: {
        15: '15px',
        30: '30px',
        32: '32px',
      },
      screens: {
        'extra-xs': {
          max: '321px',
        },
        xs: '507px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '2048px',
        print: { raw: 'print' },
        'small-height': {
          raw: '((max-width: 2000px) and (max-height: 800px))',
        },
      },
      linearBorderGradients: {
        directions: {
          t: 'to top',
          tr: 'to top right',
          r: 'to right',
          br: 'to bottom right',
          b: 'to bottom',
          bl: 'to bottom left',
          l: 'to left',
          tl: 'to top left',
        },
        colors: {
          'red-blue': ['#F6654D -57.09%', '#4D5EF6 101.17%'],
        },
        background: {
          'white-900': '#fff',
        },
        borders: {
          1: '1px',
          2: '2px',
          4: '4px',
        },
      },
      colors: {
        neutral: {
          'dark-blue': '#282c34',
          charcoal: '#2C2D2D',
          'charcoal-dark': '#919191',
          'charcoal-light': '#aec1e4',
          'warm-gray': '#EFECE7',
          'soft-pink': '#F2EBF2',
          'purple-pink':
            'linear-gradient(96.78deg, #F64D4D -57.09%, #4D5EF6 101.17%)',
          gum: '#EEF4F3',
          white: '#FFFFFF',
          grayish: '#E5E5E5',
        },
      },
      backgroundImage: {
        'gradient-pink':
          'linear-gradient(45deg, rgba(246, 77, 77, 0.1), rgba(77, 94, 246, 0.1))',
        'purple-pink':
          'linear-gradient(96.78deg, #F64D4D -57.09%, #4D5EF6 101.17%)',
        'lighter-purple':
          'linear-gradient(96.78deg, rgba(246, 77, 77, 0.2) -57.09%, rgba(77, 94, 246, 0.2) 101.17%)',
        'light-purple':
          'linear-gradient(96.78deg, rgba(246, 77, 77, 0.1) -57.09%, rgba(77, 94, 246, 0.1) 101.17%)',
      },
      width: {
        1366: '1366px',
        768: '768px',
      },
      boxShadow: {
        card: '0px 0px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out 1',
        fadeOut: 'fadeOut 0.5s ease-in-out 1',
      },
    },
  },
  variants: {
    linearBorderGradients: ['responsive'],
    repeatingLinearBorderGradients: ['responsive'],
  },
  plugins: [require('tailwindcss-border-gradient-radius')],
}


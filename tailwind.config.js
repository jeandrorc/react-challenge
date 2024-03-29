/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,jsx}'],
  theme: {
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      danger: '	#bb2124',
      success: '#28a745',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      white: '#fff',
      primary: '#482683',
      secondary: '#DDDB00',
      black: '#000000',
      brand: {
        grey: '#212121',
        green: '#0b4f34',
        greenDark: '#08462e'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    fontSize: {
      giant: '5rem',
      lg: '1.4rem',
      md: '1rem',
      xs: '12px'
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
};

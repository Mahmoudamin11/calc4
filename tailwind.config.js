module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      margin: {
        '30': '7.5rem',
        '125%': '125%'

      },
      width: {
        '50': '12.5rem',
        '2full': '200%'
      },
      minHeight: {
        '20': '80px',
        '12': '48px',
      },
      textColor: {
        skin: {
          'key-base': 'var(--color-text-key-base)',
          'key-accent-1': 'var(--color-text-key-accent-1)',
          'key-accent-2': 'var(--color-text-key-accent-2)',
          screen: 'var(--color-text-screen)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-fill-base)',
          screen: 'var(--color-fill-screen)',
          keypad: 'var(--color-fill-keypad)',
          'key-base': 'var(--color-fill-key-base)',
          'key-hover-base': 'var(--color-hover-key-base)',
          'key-accent-1': 'var(--color-fill-key-accent-1)',
          'key-hover-accent-1': 'var(--color-hover-key-accent-1)',
          'key-hover-accent-2': 'var(--color-hover-key-accent-2)',
          'key-accent-2': 'var(--color-fill-key-accent-2)',
        },
      },
      boxShadow: {
        'key-base': '0px 4px var(--color-shadow-key-base)',
        'key-accent-1': '0px 4px var(--color-shadow-key-accent-1)',
        'key-accent-2': '0px 4px var(--color-shadow-key-accent-2)',
      },
      fontFamily: {
        spartan: 'Spartan, sans-serif',
      }
    },
  },
  plugins: [],
}

// content: ["./src/**/*.{html,js}"],
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E6F3FF',
          DEFAULT: '#2196F3',
          dark: '#1976D2',
        },
        secondary: '#FF9800',  // Tambahkan warna aksen
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#9E9E9E',
          dark: '#616161',
        },
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Penggunaan font konsisten
      },
    },
  },
  plugins: [],
}

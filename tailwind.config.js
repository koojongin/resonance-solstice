/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline': '1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black', // 작은 텍스트용 외곽선
        'outline-lg': '2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black', // 큰 텍스트용 외곽선
      },
    },
  },
  // plugins: [require('tailwindcss-textshadow')],
}

const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  corePlugins: {
    preflight: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/theme/components**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '300px',
    },
    extend: {
      boxShadow: {
        outline: '1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black', // 작은 텍스트용 외곽선
        'outline-lg': '2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black', // 큰 텍스트용 외곽선
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-outline': {
          textShadow: '-1px -1px 4px #000, 1px -1px 4px #000, -2px 2px 4px #000, 2px 2px 4px #000',
        },
        '.text-shadow-outline-white': {
          textShadow:
            '-1px -1px 4px #ffffff5c, 1px -1px 4px #ffffff3b, -2px 2px 4px #ffffff45, 2px 2px 4px #ffffff82',
        },
        '.text-shadow-outline-white-gray': {
          textShadow:
            '-1px -1px 4px #043d0500, 1px -1px 4px #7a7a7a, -2px 2px 4px #00000000, 2px 2px 4px #00000029;',
        },
      })
    },
  ],
})

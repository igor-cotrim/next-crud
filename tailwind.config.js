module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [{ pattern: /(bg|to|from)-(green|blue|gray)-(400|700)/ }],
  theme: {
    extend: {}
  },
  plugins: []
}

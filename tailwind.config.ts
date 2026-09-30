import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './sections/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#252522', sand: '#f3f1ec', stone: '#dedbd3', clay: '#b49d88' },
      fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'], serif: ['Georgia', 'Times New Roman', 'serif'] },
    },
  },
  plugins: [],
};
export default config;

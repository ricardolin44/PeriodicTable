import type { Config } from 'tailwindcss'
import { colors, periodicTableColors } from "./src/data/predefined/colorConst"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
					comic: ['Comic Sans Ms', 'cursive', 'sans-serif'],
					},
			boxShadow: {
				'alkali-light': '0 4px 6px -1px rgba(255, 102, 255, 0.5)'
			},
      colors: {
        ...colors,
        ...periodicTableColors,
        primary: '#1a237e',
        secondary: '#0d47a1',
        accent: '#2196f3',
      },
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      gridRowStart: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
      },
      maxWidth: {
        '8xl': '96rem',
      },
    },
  },
  plugins: [],
}
export default config 
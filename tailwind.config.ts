import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx', 
  ],
  theme: {
    extend: {
      colors: {
        italo: '#333',
      },
    },
  },
  plugins: [],
}
export default config

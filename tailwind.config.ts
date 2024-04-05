import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        '50': '#f2f9f9',
        '100': '#ddeff0',
        '200': '#bfe0e2',
        '300': '#92cace',
        '400': '#5faab1',
        '500': '#438e96',
        '600': '#3b757f',
        '700': '#356169',
        '800': '#325158',
        '900': '#2d464c',
        '950': '#1a2c32'
      },

      success: {
        '50': '#f0fdf5',
        '100': '#dcfce7',
        '200': '#bbf7d0',
        '300': '#86efab',
        '400': '#4ade7e',
        '500': '#22c55b',
        '600': '#16a347',
        '700': '#15803a',
        '800': '#166532',
        '900': '#14532a',
        '950': '#052e13'
      },

      error: {
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fecaca',
        '300': '#fca5a5',
        '400': '#f87171',
        '500': '#ef4444',
        '600': '#dc2626',
        '700': '#b91c1c',
        '800': '#991b1b',
        '900': '#7f1d1d',
        '950': '#450a0a'
      },

      warning: {
        '50': '#fefbe8',
        '100': '#fef7c3',
        '200': '#fef08a',
        '300': '#fde747',
        '400': '#fade15',
        '500': '#eacf08',
        '600': '#cab204',
        '700': '#a18e07',
        '800': '#85770e',
        '900': '#716612',
        '950': '#423b06'
      },

      gray: {
        '50': '#f6f7f8',
        '100': '#e5e7eb',
        '200': '#dadde3',
        '300': '#c1c7cf',
        '400': '#a2aab8',
        '500': '#8c93a5',
        '600': '#7a8096',
        '700': '#6e7287',
        '800': '#5d5f70',
        '900': '#4d4f5b',
        '950': '#31323a'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
export default config

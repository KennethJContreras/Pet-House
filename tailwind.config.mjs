/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  'secundary': '#A49F67',
			  'claroo': '#E3D6C5',
			  'hola': '#CD8C0A',
			  'tertiary': '#8B4D14',
			  'primary': '#111827',
			},
		  },
	},
	plugins: [],
}

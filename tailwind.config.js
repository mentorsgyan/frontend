/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				kalam: ['Kalam'],
				mukta: ['Mukta']
			},
			screens: {
				'md-900': '900px',
				'md-1024': '1024px',
				'h-md': { 'raw': '(min-height: 768px)' },
				'h-max-md': { 'raw': '(max-height: 768px)' },
        		'h-lg': { 'raw': '(min-height: 1024px)' },
			},
			colors: {
				primary: "#fea928",
				secondary: "#ed8900"
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "3rem"
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}


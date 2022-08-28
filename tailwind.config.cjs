/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: [
				'archivo',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Arial',
				'Noto Sans',
				'sans-serif'
			]
		}
	},
	daisyui: {
		themes: [
			{
				mocha: {
					primary: '#cdd6f4',
					secondary: '#cba6f7',
					accent: '#fab387',
					neutral: '#313244',
					'base-100': '#1e1e2e',
					info: '#89b4fa',
					success: '#a6e3a1',
					warning: '#f9e2af',
					error: '#f2cdcd'
				}
			}
		]
	},
	plugins: [require('daisyui')]
}

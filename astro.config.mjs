// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'IX.CM',
			// sidebar: [
			// 	{
			// 		label: 'Overview',
			// 		items: [
			// 			'overview/getting-started'
			// 		],
			// 	},
			// 	{
			// 		label: 'Faqs',
			// 		items: [
			// 			'faqs/overview',
			// 			'faqs/instance',

			// 		]
			// 	}
			// ],
		}),
		
	],
});

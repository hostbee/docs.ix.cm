// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kvmcloud Network',
			sidebar: [
				{
					label: 'Company Information',
					items: [
						{ label: 'About Us', slug: 'about' },
						{ label: 'Contact Information', slug: 'contact' },
						{ label: 'Refund and Cancellation Policy', slug: 'refunds' },
					],
				},
			],
		}),
	],
});

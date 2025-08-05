import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	define: {
		__APP_ENV__: process.env.VITE_VERCEL_ENV
	},
	server: {
		port: 80
	},
	resolve: {
		alias: {
			'@/app': path.resolve(__dirname, 'src/app'),
			'@/pages': path.resolve(__dirname, 'src/pages'),
			'@/widgets': path.resolve(__dirname, 'src/widgets'),
			'@/features': path.resolve(__dirname, 'src/features'),
			'@/entities': path.resolve(__dirname, 'src/entities'),
			'@/shared': path.resolve(__dirname, 'src/shared')
		}
	},
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use 'src/app/styles/mixins' as *;
				@use 'src/app/styles/variables' as *;`
			}
		}
	}
});

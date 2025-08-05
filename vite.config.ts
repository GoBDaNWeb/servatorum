import react from '@vitejs/plugin-react';

//@ts-expect-error исправить
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 80
	},
	resolve: {
		alias: {
			//@ts-expect-error исправить
			'@/app': path.resolve(__dirname, 'src/app'),
			//@ts-expect-error исправить
			'@/pages': path.resolve(__dirname, 'src/pages'),
			//@ts-expect-error исправить
			'@/widgets': path.resolve(__dirname, 'src/widgets'),
			//@ts-expect-error исправить
			'@/features': path.resolve(__dirname, 'src/features'),
			//@ts-expect-error исправить
			'@/entities': path.resolve(__dirname, 'src/entities'),
			//@ts-expect-error исправить
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: [{ find: '@images', replacement: path.resolve(__dirname, 'src/assets/images') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/styles/util.scss";`,
      },
    },
  },
});

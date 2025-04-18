/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    },
  },
  // todo : import -> use 로 변경 예정
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/util.scss";`,
      },
    },
  },
  assetsInclude: ['**/*.md'],
});

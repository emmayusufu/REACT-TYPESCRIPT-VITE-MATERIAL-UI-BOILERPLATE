import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: [{ find: '@app', replacement: '/src' }],
  },
  plugins: [react(), tsconfigPaths()],
  esbuild: {
    loader: 'tsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'tsx',
      },
    },
  },
});

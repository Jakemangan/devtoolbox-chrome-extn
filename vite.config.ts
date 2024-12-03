import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs'

import manifest from './src/manifest'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        input: {
          dashboard: path.resolve(__dirname, 'dashboard.html'),
          // Include other entry points as needed
          // popup: path.resolve(__dirname, 'popup.html'),
          // options: path.resolve(__dirname, 'options.html'),
          // sidepanel: path.resolve(__dirname, 'sidepanel.html'),
        },
        // output: {
        //   chunkFileNames: 'assets/chunk-[hash].js',
        // },
      },
    },

    plugins: [crx({ manifest }), react(), tsconfigPaths(), commonjs()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})

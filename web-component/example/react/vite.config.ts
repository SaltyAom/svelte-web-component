import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import visualizer from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            plugins: [
                visualizer({
                    gzipSize: true,
                    brotliSize: true
                })
            ]
        }
    },
    plugins: [react()]
})

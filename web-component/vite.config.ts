import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // sourcemap: true,
        // minify: false,
        commonjsOptions: {},
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js'
            },
            plugins: [
                visualizer({
                    gzipSize: true,
                    brotliSize: true,
                    template: 'treemap'
                })
            ]
        }
    },
    plugins: [
        svelte({
            compilerOptions: {
                customElement: true
            }
        }),
        chunkSplitPlugin({
            strategy: 'unbundle'
        })
    ]
})

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

import typescript from '@rollup/plugin-typescript'
import svelteDts from 'svelte-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {
                css: true
            }
        })
    ],
    build: {
        sourcemap: true,
        minify: false,
        lib: {
            name: 'index',
            entry: 'src/main.ts'
        },
        rollupOptions: {
            plugins: [
                svelteDts.default,
                typescript({
                    target: 'es2020',
                    rootDir: 'src',
                    declaration: true,
                    declarationDir: 'dist',
                    exclude: ['node_modules/**'],
                    allowSyntheticDefaultImports: true
                })
            ]
        }
    }
})

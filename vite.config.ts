import path from 'path'
import fs from 'fs'
import process from 'process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import utools from 'vite-plugin-utools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import postBuildPlugin from './build/postBuildPlugin'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (e) => {
          if (e.includes('/node_modules/monaco-editor/')) return 'monaco'
          return 'vendor'
        }
      },
      external: ['electron', 'utools', 'process', 'vm', 'fs']
    }
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console'] : []
  },
  server: {
    port: 8084
  },
  plugins: [
    vue(),
    utools({
      external: 'uTools',
      preload: {
        path: './public/preload.js',
        watch: true,
        name: 'window.preload'
      },
      buildUpx: false
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ArcoResolver()]
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@arco-design/web-vue',
          esModule: true,
          resolveStyle: (name) => {
            const p = `@arco-design/web-vue/es/${name}/style/css.js`
            const actualPath = path.resolve(__dirname, 'node_modules', p)
            if (fs.existsSync(actualPath)) return p
            return ''
          }
        }
      ]
    }),
    postBuildPlugin({
      files: ['index.html', 'plugin.json', 'preload.js']
    })
  ]
})

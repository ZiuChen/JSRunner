import path from 'path'
import fs from 'fs'
import process from 'process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
import postBuildPlugin from './build/postBuildPlugin'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue']
  },
  // external
  build: {
    rollupOptions: {
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
    }),
    monacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript']
    })
  ]
})

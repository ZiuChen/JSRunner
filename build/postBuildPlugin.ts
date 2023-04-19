import path from 'path'
import fs from 'fs'
import { Plugin, transformWithEsbuild } from 'vite'
import htmlMinifier from 'html-minifier-terser'

export interface postBuildPluginOptions {
  /**
   * 需要处理的文件相对于dist目录的路径
   */
  files: string[]
}

/**
 * Vite 构建后处理插件
 */
export default function postBuildPlugin(options: postBuildPluginOptions): Plugin {
  let config = null

  return {
    name: 'post-build-plugin',
    apply: 'build',

    configResolved(resolvedConfig) {
      config = resolvedConfig
    },

    // 构建完成后 将构建后的dist目录下的文件进行最小化处理
    // *.html *.js *.svg *.json
    async closeBundle() {
      const files = options.files || ['index.html']
      const distDir = config.build.outDir

      for (const file of files) {
        const fpath = path.resolve(distDir, file)
        const ext = path.extname(fpath)
        const execMap = {
          '.html': async (code: string) =>
            htmlMinifier.minify(code, {
              removeComments: true,
              collapseWhitespace: true,
              collapseBooleanAttributes: true,
              removeAttributeQuotes: false,
              removeEmptyAttributes: true,
              minifyCSS: true,
              minifyJS: true,
              minifyURLs: true
            }),
          '.js': async (code: string) => {
            const res = await transformWithEsbuild(code, '', {
              loader: 'js',
              minify: true
            })
            return res.code
          },
          '.json': async (code: string) => JSON.stringify(JSON.parse(code))
        }

        if (execMap[ext]) {
          const code = fs.readFileSync(fpath, 'utf-8')
          const codeTransformed = await execMap[ext](code)
          fs.writeFileSync(fpath, codeTransformed)
        } else {
          console.error(`Not Supported File Type: .${ext}`)
        }
      }
    }
  }
}

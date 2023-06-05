import { defineStore } from 'pinia'
import type { setFeature } from 'utools-api-types'
import { Message } from '@arco-design/web-vue'
import { parse } from 'comment-parser'
import { setItem, generateRandomString } from '@/utils'

export interface ScriptState {
  name: string
  description: string
  tags: string[]
}

export type Feature = Parameters<typeof setFeature>[0]

export const useScriptStore = defineStore('script', {
  state: (): ScriptState => ({
    name: '',
    description: '',
    tags: []
  }),
  actions: {
    newScript(code: string) {
      const scriptId = generateRandomString(8)

      setItem(`script/${scriptId}`, {
        name: this.name,
        description: this.description,
        code
      })

      Message.success('保存成功')

      return true
    },

    parseCommentBlock(code: string) {
      const parsed = parse(code)
      if (parsed.length) {
        // 只解析第一个注释块 首行默认作为 name
        // name 优先从首行获取 否则从 @name 获取
        // description 从 @description 获取
        const block = parsed[0]
        const commentInfo = block.tags.length
          ? block.tags.map((tag) => ({
              name: block.description
                ? block.description
                : tag.tag === 'name'
                ? [tag.name, tag.description].join(' ')
                : '',
              description: tag.tag === 'description' ? [tag.name, tag.description].join(' ') : ''
            }))[0]
          : {
              name: block.description || ''
            }

        this.$patch(commentInfo)
      }
    }
  }
})

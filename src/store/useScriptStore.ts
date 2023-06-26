import { defineStore } from 'pinia'
import type { setFeature } from 'utools-api-types'
import { Message } from '@arco-design/web-vue'
import { setItem, generateRandomString, parseCommentBlock } from '@/utils'

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
      const commentInfo = parseCommentBlock(code)
      this.$patch(commentInfo || {})
    }
  }
})

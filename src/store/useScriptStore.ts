import { defineStore } from 'pinia'
import type { setFeature } from 'utools-api-types'
import { Message } from '@arco-design/web-vue'
import { isElectron, setItem, generateRandomString } from '@/utils'

export interface ScriptState {
  name: string
  description: string
  logo: string
  isEditorVisible: boolean
  cmdString: string
  cmdParsed: any
}

export type Feature = Parameters<typeof setFeature>[0]

export const useScriptStore = defineStore('script', {
  state: (): ScriptState => ({
    name: '',
    description: '',
    logo: '/logo.png',
    isEditorVisible: false,
    cmdString: JSON.stringify(['快捷脚本', 'QuickScript'], null, 2),
    cmdParsed: {}
  }),
  actions: {
    setFeatureVisible(visible: boolean) {
      this.isEditorVisible = isElectron ? visible : false
    },

    handlecmdStringChange(s: string) {
      this.cmdString = s
    },

    newScript(code: string) {
      const scriptId = generateRandomString(8)

      try {
        const o = JSON.parse(this.cmdString)
        this.cmdParsed = o
      } catch (error) {
        Message.error('关键字格式错误, 请检查JSON格式')
        return false
      }

      setItem(`script/${scriptId}`, {
        name: this.name,
        description: this.description,
        logo: this.logo === '/logo.png' ? '' : this.logo,
        cmd: this.cmdParsed,
        code
      })

      Message.success('保存成功')

      return true
    }
  }
})

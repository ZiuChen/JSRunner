import { defineStore } from 'pinia'
import type { setFeature } from 'utools-api-types'
import { isElectron } from '@/utils'

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

    saveScript() {
      console.log(this.cmdString)
    }
  }
})

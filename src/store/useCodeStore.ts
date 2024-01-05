import { defineStore } from 'pinia'
import { uniqueId } from 'lodash-es'
import { Message } from '@arco-design/web-vue'
import {
  getItem,
  setItem,
  removeItem,
  runCodeInSandbox,
  runCodeInBrowser,
  isElectron
} from '@/utils'
import { IMessage } from '@/components/Console.vue'
import { useHistoryStore } from './useHistoryStore'

export interface ICodeStoreState {
  /**
   * code id
   */
  id: number
  /**
   * code content
   */
  code: string
  /**
   * console messages
   */
  messages: IMessage[]
  /**
   * code running environment
   */
  env: 'node' | 'browser'
  /**
   * code running mode
   */
  mode: 'ontime' | 'manual'
  /**
   * code readonly
   */
  readonly: boolean
  /**
   * code is running
   */
  execState: boolean
}

export interface ICodeStore extends ReturnType<typeof useCodeStore> {}

export const useCodeStore = defineStore('CodeSrore', {
  state: () =>
    ({
      id: 0,
      code: '',
      messages: [] as IMessage[],
      env: isElectron ? getItem('env') || 'node' : 'browser',
      mode: getItem('mode') || 'ontime',
      readonly: getItem('readonly') || false,
      execState: false
    } as ICodeStoreState),
  getters: {
    codeWithId: (state) => `code/${state.id}`,
    currentEnv: (state) => (state.env === 'browser' ? '浏览器' : 'Node.js'),
    currentMode: (state) => (state.mode === 'ontime' ? '即时执行' : '手动触发'),
    currentReadonly: (state) => (state.readonly ? '只读' : '可编辑')
  },
  actions: {
    init() {
      const lastCodeId = getItem('lastCodeId') || 0
      this.loadCode(lastCodeId)
      useHistoryStore().loadHistorys()
    },

    newCode() {
      if (this.id !== 0) Message.success('成功创建新代码片段')
      this.id = new Date().getTime()
      this.code = getItem('lastCodeId') ? '' : 'console.log("Hello, World!")'
      setItem(this.codeWithId, this.code)
      setItem('lastCodeId', this.id)
      // 更新展示的历史记录数量
      useHistoryStore().loadHistorys()
    },

    loadCode(id: number) {
      const code = getItem(`code/${id}`)
      if (code === null) {
        this.newCode()
        return
      }

      this.id = id
      this.code = code
    },

    handleCodeChange(code: string) {
      this.code = code
      setItem(this.codeWithId, this.code)

      if (this.mode === 'ontime') this.execCode()
    },

    pushMessage(message: IMessage) {
      message && this.messages.push(message)
    },

    clearConsole() {
      this.messages = []
    },

    changeEnv() {
      if (!isElectron) return Message.warning('当前环境不支持切换运行环境')
      this.env = this.env === 'browser' ? 'node' : 'browser'
      this.env === 'browser' ? setItem('env', 'browser') : removeItem('env')
    },

    changeMode() {
      this.mode = this.mode === 'manual' ? 'ontime' : 'manual'
      this.mode === 'manual' ? setItem('mode', 'manual') : removeItem('mode')
    },

    changeReadonly() {
      this.readonly = !this.readonly
      this.readonly ? setItem('readonly', true) : removeItem('readonly')
    },

    readHistory(timeStamp: number) {
      this.loadCode(timeStamp)
      setItem('lastCodeId', this.id)
    },

    execCode() {
      if (!this.code) {
        return
      }

      const handleConsole = (stdout: any[], stderr: any[]) => {
        const id = uniqueId()
        const timeStamp = new Date().getTime()

        if (stdout && stdout?.length)
          this.pushMessage({
            id,
            timeStamp,
            type: 'log',
            content: stdout
          })
        if (stderr) this.pushMessage({ id, timeStamp, type: 'error', content: stderr })
      }

      this.env === 'browser'
        ? runCodeInBrowser(this.code, handleConsole)
        : runCodeInSandbox(this.code, handleConsole)

      // side effect
      this.execState = true
      setTimeout(() => {
        this.execState = false
      })
    }
  }
})

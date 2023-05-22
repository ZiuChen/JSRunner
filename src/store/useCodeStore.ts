import { defineStore } from 'pinia'
import {
  getItem,
  setItem,
  removeItem,
  runCodeInSandbox,
  runCodeInBrowser,
  allDocs,
  isElectron,
  classof
} from '@/utils'
import { IMessage } from '@/components/Console.vue'
import { uniqueId, throttle } from 'lodash-es'
import { Message } from '@arco-design/web-vue'

export interface ICodeStoreState {
  id: number
  code: string
  messages: IMessage[]
  env: 'node' | 'browser'
  historys: { id: string; timeStamp: number; code: string }[]
  mode: 'ontime' | 'manual'
}

export interface ICodeStore extends ReturnType<typeof useCodeStore> {}

export const useCodeStore = defineStore('CodeSrore', {
  state: () =>
    ({
      id: 0,
      code: '',
      messages: [] as IMessage[],
      env: isElectron ? getItem('env') || 'node' : 'browser',
      historys: [],
      mode: getItem('mode') || 'ontime'
    } as ICodeStoreState),
  getters: {
    codeWithId: (state) => `code/${state.id}`,
    currentEnv: (state) => (state.env === 'browser' ? '浏览器' : 'Node.js'),
    currentMode: (state) => (state.mode === 'ontime' ? '即时执行' : '手动触发')
  },
  actions: {
    newCode() {
      if (this.id !== 0) Message.success('成功创建新代码片段')
      this.clearMessages()
      this.id = new Date().getTime()
      this.code = getItem('lastCodeId') ? '' : 'console.log("Hello, World!")'
      setItem(this.codeWithId, this.code)
      setItem('lastCodeId', this.id)
    },

    loadCode(id: number) {
      const code = getItem(`code/${id}`)
      if (classof(code) === 'Null') return this.newCode()
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

    clearMessages() {
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

    loadHistorys() {
      const res = allDocs('code/')

      if (!res || !res.length) return

      // newest at first
      res.sort((a: any, b: any) => parseInt(a._id.split('/')[1]) - parseInt(b._id.split('/')[1]))

      // restrict historys length: 25
      const rm = res.splice(0, res.length - 25)
      rm.forEach((item: any) => removeItem(item._id))

      this.historys = res.map((item: any) => ({
        id: item._id,
        timeStamp: parseInt(item._id.split('/')[1]),
        code: item.data
      }))
    },

    readHistory(timeStamp: number) {
      this.loadCode(timeStamp)
      setItem('lastCodeId', this.id)
    },

    emptyHistory() {
      this.historys = this.historys.filter((item) => {
        item.id === this.codeWithId
        return item.id === this.codeWithId
      })
      allDocs('code/').forEach((item: any) => item._id !== this.codeWithId && removeItem(item._id))
      Message.success('清空历史记录成功')
    },

    execCode: throttle(
      function (this: ICodeStore) {
        // bind this to avoid type error
        if (!this.code) return Message.warning('当前代码为空')

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
      },
      350,
      { leading: true }
    )
  }
})

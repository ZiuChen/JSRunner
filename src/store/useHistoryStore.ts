import { Message } from '@arco-design/web-vue'
import { allDocs, parseCommentBlock, removeItem } from '@/utils'
import { useCodeStore } from './useCodeStore'

export interface CodeHistory {
  id: string
  timeStamp: number
  code: string
  name?: string
}

export interface IHistoryStoreState {
  historys: CodeHistory[]
}

export const useHistoryStore = defineStore('history', {
  state: () =>
    ({
      historys: []
    } as IHistoryStoreState),

  actions: {
    loadHistorys() {
      const res = allDocs('code/')

      if (!res || !res.length) return

      // newest at first
      res.sort((a: any, b: any) => parseInt(b._id.split('/')[1]) - parseInt(a._id.split('/')[1]))

      this.historys = res.map((item: any) => {
        // clear escape character in content and remove `"` at the beginning and end
        const plainCode = item.value
          .replace(/\\n/g, '\n')
          .replace(/\\r/g, '\r')
          .replace(/\\t/g, '\t')
          .slice(1)
          .slice(0, -1)

        const name =
          parseCommentBlock(plainCode)?.name ||
          (plainCode.startsWith('//') ? plainCode.split('\n')[0].slice(2).trim() : '')

        return {
          id: item._id,
          timeStamp: parseInt(item._id.split('/')[1], 10),
          code: item.value,
          name
        }
      })
    },

    deleteHistory(timeStamp: number) {
      const idx = this.historys.findIndex((h) => h.timeStamp === timeStamp)
      this.historys.splice(idx, 1)
      removeItem(`code/${timeStamp}`)
      Message.success('删除成功')

      // 选中第一条历史记录 or 新建代码片段
      this.historys.length
        ? useCodeStore().readHistory(this.historys[0].timeStamp)
        : useCodeStore().newCode()
    }
  }
})

import { defineStore } from 'pinia'
import { setThemeMode } from '@/hooks/usePrefersTheme'
import { setItem, getItem, removeItem, allDocs } from '@/utils'
import { monaco } from '@/common/monaco'
import { Message } from '@arco-design/web-vue'

export type Theme = 'default' | 'dark' | 'light'
export interface Snippet {
  /**
   * id (timestamp string)
   */
  id: string
  /**
   * name
   */
  label: string
  /**
   * content
   */
  insertText: string
  /**
   * description
   */
  documentation: string
}

export interface SettingStoreState {
  theme: Theme
  snippets: Snippet[]
  codeChangeDebounce?: number
  indentType: 'space' | 'tab'
  indentSize: number
}

export const useSettingStore = defineStore('setting', {
  state: (): SettingStoreState => ({
    theme: getItem('setting/theme') || 'default',
    snippets: [],
    codeChangeDebounce: getItem('setting/codeChangeDebounce') || 300,
    indentType: getItem('setting/indentType') || 'space',
    indentSize: getItem('setting/indentSize') || 2
  }),

  actions: {
    init() {
      this.setTheme(this.theme)
      this.snippets = this.loadSnippets()

      monaco.languages.registerCompletionItemProvider('javascript', {
        // @ts-expect-error
        provideCompletionItems: () => {
          return {
            suggestions: this.snippets.map((item) => ({
              ...item,
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
            }))
          }
        }
      })
    },

    setTheme(theme: Theme) {
      this.theme = theme
      theme === 'default' ? removeItem('setting/theme') : setItem('setting/theme', theme)
      setThemeMode(theme)
    },

    update<T extends keyof SettingStoreState>(key: T) {
      return (value: SettingStoreState[T]) => {
        this.$state[key] = value
        setItem(`setting/${key}`, value)
      }
    },

    loadSnippets() {
      const snippets = allDocs('setting/snippet')
      console.log('snippets', snippets)
      if (!snippets.length)
        return [
          {
            id: new Date().getTime().toString(),
            label: 'clg',
            insertText: 'console.log(${1})',
            documentation: 'Print to Console'
          }
        ]

      return snippets.map((item) => ({
        ...item.value,
        id: item._id.split('setting/snippet/')[1]
      }))
    },

    newSnippet() {
      const snippet = {
        id: new Date().getTime().toString(),
        label: '',
        insertText: '',
        documentation: ''
      }
      this.snippets.push(snippet)
      Message.success('新建成功')
    },

    removeSnippet(id: string) {
      this.snippets = this.snippets.filter((item) => item.id !== id)
      removeItem(`setting/snippet/${id}`)
      Message.success('删除成功')
    }
  }
})

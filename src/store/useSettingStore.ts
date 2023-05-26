import { defineStore } from 'pinia'
import { setThemeMode } from '@/hooks/usePrefersTheme'
import { setItem, getItem, removeItem } from '@/utils'
import { useMedia } from '@/hooks/useMedia'

export type Theme = 'default' | 'dark' | 'light'

export interface SettingState {
  theme: Theme
}

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    theme: getItem('setting/theme') || 'default'
  }),

  getters: {
    isDark: ({ theme }) => {
      const isDark = useMedia('(prefers-color-scheme: dark)')
      return theme === 'dark' || (theme === 'default' && isDark.value)
    }
  },

  actions: {
    setTheme(theme: Theme) {
      this.theme = theme
      theme === 'default' ? removeItem(withPrefix('theme')) : setItem(withPrefix('theme'), theme)
      setThemeMode(theme)
    }
  }
})

function withPrefix(key: string) {
  const settingPrefix = 'setting'
  return `${settingPrefix}/${key}`
}

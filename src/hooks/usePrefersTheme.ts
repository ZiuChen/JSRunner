import type { Theme } from '@/store'
import { useMedia } from '@/hooks/useMedia'

export function usePrefersTheme(callback?: (theme: Theme) => void) {
  // MediaQuery theme
  const isDark = useMedia('(prefers-color-scheme: dark)')
  const isLight = useMedia('(prefers-color-scheme: light)')

  onMounted(() => setThemeMode(isDark.value ? 'dark' : 'light'))

  watch(isDark, (val) => {
    setThemeMode(val ? 'dark' : 'light')
    callback && callback(val ? 'dark' : 'light')
  })

  return [isDark, isLight]
}

export function setThemeMode(theme: Theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark')
    document.body.setAttribute('arco-theme', 'dark')
  } else if (theme === 'light') {
    document.body.classList.remove('dark')
    document.body.removeAttribute('arco-theme')
  } else {
    const [isDark] = usePrefersTheme()
    setThemeMode(isDark.value ? 'dark' : 'light')
  }
  return null
}

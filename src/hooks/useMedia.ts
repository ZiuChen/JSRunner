export function useMedia(query: string) {
  const matchList = window.matchMedia(query)
  const isMatch = ref(matchList.matches)

  const handler = (e: MediaQueryListEvent) => {
    isMatch.value = e.matches
  }

  matchList.addEventListener('change', handler)

  onUnmounted(() => {
    matchList.removeEventListener('change', handler)
  })

  return isMatch
}

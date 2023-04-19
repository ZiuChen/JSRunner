export function useScrollLock() {
  const isLocked = ref(false)

  function lock() {
    isLocked.value = true
    document.body.style.overflow = 'hidden'
  }

  function unlock() {
    isLocked.value = false
    document.body.style.overflow = 'auto'
  }

  onUnmounted(unlock)

  return {
    isLocked,
    lock,
    unlock
  }
}

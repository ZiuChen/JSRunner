export function useEventListener(
  target: EventTarget,
  type: string,
  listener: (event: any) => void,
  options?: boolean | AddEventListenerOptions
) {
  onMounted(() => {
    target.addEventListener(type, listener, options)
  })

  onUnmounted(() => {
    target.removeEventListener(type, listener, options)
  })
}

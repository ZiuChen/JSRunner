import { useEventListener } from '@/hooks/useEventListener'
import { Button } from '@arco-design/web-vue'
import { IconLeft } from '@arco-design/web-vue/es/icon'

export function usePageBack() {
  const router = useRouter()
  const back = () => router.back()

  // 监听键盘事件 ESC执行返回
  useEventListener(document, 'keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      back()
      e.stopPropagation()
    }
  })

  // return a function cause we need to use it in setup
  // if directly return a component, it will be called in render
  // and it will cause an warning: Non-function value encountered for default slot.
  return {
    BackButton: () =>
      h(
        Button,
        {
          class: 'back',
          onClick: back,
          shape: 'circle'
        },
        () => h(IconLeft)
      )
  }
}

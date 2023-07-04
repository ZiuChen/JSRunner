import { App } from 'vue'

export function registerDirectives(app: App) {
  // register a directive call v-zoom
  // when v-zoom is true, the element scale to 1.2 and quickly back to 1.0
  app.directive('zoom', (el, binding) => {
    if (binding.value) {
      el.style.transform = 'scale(1.6)'
      el.style.transition = 'transform 0.2s'
      setTimeout(() => {
        el.style.transform = 'scale(1.0)'
      }, 200)
    }
  })
}

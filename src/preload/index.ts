import type { Buffer as _Buffer } from 'buffer'
import 'ses'

declare global {
  interface Window {
    preload: {
      Buffer: typeof _Buffer
      require: NodeRequire
    }
  }
}

function emptyFuncFactory() {
  return new Function()
}

export const Buffer = window.preload?.Buffer || (emptyFuncFactory() as typeof _Buffer)

export const require = window.preload?.require || emptyFuncFactory()

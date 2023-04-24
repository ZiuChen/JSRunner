import type { Buffer as _Buffer } from 'buffer'
import 'ses'

declare global {
  interface Window {
    preload: {
      electron: any
      Buffer: typeof _Buffer
      require: NodeRequire
      Compartment: typeof Compartment
    }
  }
}

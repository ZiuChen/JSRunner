import { Message } from '@arco-design/web-vue'
import { isElectron } from './env'

export function openLink(url: string) {
  return isElectron ? utools.shellOpenExternal(url) : window.open(url)
}

export function pickPicture(options: { isMultiple?: boolean } = {}) {
  const extensions = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'svg', 'ico']

  if (isElectron) {
    return new Promise((resolve) => {
      resolve(utools.showOpenDialog({ filters: [{ name: '', extensions }] }) || undefined)
    })
  }

  return new Promise((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = !!options.isMultiple
    input.accept = extensions.map((ext) => `image/${ext}`).join(',') || ''
    input.click()
    input.onchange = () => {
      const files = input.files || undefined
      if (!files) return

      // 检查文件类型
      for (let i = 0; i < files.length; i++) {
        const file = files?.item(i)
        if (file && !extensions.includes(file.name.split('.').pop()?.toLowerCase() || '')) {
          Message.error('文件类型不符合要求')
          return
        }
      }
      resolve(input.files || undefined)
    }
    input.onabort = () => {
      resolve(undefined)
    }
  })
}

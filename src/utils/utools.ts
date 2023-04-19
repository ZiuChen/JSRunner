import { isElectron } from './env'

export function openLink(url: string) {
  return isElectron ? utools.shellOpenExternal(url) : window.open(url)
}

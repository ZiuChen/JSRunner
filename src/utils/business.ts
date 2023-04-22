import { electron, Buffer, require } from '@/preload'
import { cloneDeep, concat } from 'lodash-es'
import { isElectron } from './env'

const uToolsLite = getuToolsLite()

export function runCodeInSandbox(
  code: string,
  callback: (log?: any, error?: any, warn?: any, info?: any) => any
) {
  try {
    // Compartment: from ses
    new Compartment({
      console: consoleWithCallback(callback),
      fetch: fetch.bind(window),
      utools: uToolsLite,
      electron,
      Buffer,
      require
    }).evaluate(code)
  } catch (error: any) {
    callback && callback(null, [error])
  }
}

export function runCodeInBrowser(
  code: string,
  callback: (log?: any, error?: any, warn?: any, info?: any) => any
) {
  try {
    const fn = new Function('console', 'utools', 'globalThis', `(function(){\n${code}\n})()`)
    const _globalThis = Object.assign({}, globalThis)
    // @ts-ignore
    _globalThis.utools = uToolsLite
    fn(consoleWithCallback(callback), uToolsLite, _globalThis)
  } catch (error: any) {
    callback && callback(null, [error])
  }
}

export function consoleWithCallback(callback: any) {
  return {
    log: (...args: any[]) => callback && callback(args),
    error: (...args: any[]) => callback && callback(null, args),
    warn: (...args: any[]) => callback && callback(null, null, args),
    info: (...args: any[]) => callback && callback(null, null, null, args)
  }
}

export function getuToolsLite() {
  if (!isElectron) return {}
  const utoolsLite = Object.assign({}, cloneDeep(utools))
  const dbBlackList = ['db', 'dbStorage', 'removeFeature', 'setFeature', 'onDbPull']
  const payBlackList = ['fetchUserServerTemporaryToken', 'openPayment', 'fetchUserPayments']
  const etcBlackList = ['onPluginEnter', 'onPluginOut', 'createBrowserWindow']
  concat(dbBlackList, payBlackList, etcBlackList).forEach((item) => {
    // @ts-ignore
    delete utoolsLite[item]
  })
  Object.freeze(utoolsLite)
  return utoolsLite
}

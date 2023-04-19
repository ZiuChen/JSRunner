import { Buffer, require } from '@/preload'
import { cloneDeep, concat } from 'lodash-es'

export function runCodeInSandbox(
  code: string,
  callback: (log?: any, error?: any, warn?: any, info?: any) => any
) {
  try {
    // Compartment: from ses
    new Compartment({
      console: consoleWithCallback(callback),
      fetch: fetch.bind(window),
      utools: getuToolsLite(),
      Buffer,
      require
    }).evaluate(code)
  } catch (error: any) {
    callback && callback(null, error)
  }
}

export function runCodeInBrowser(
  code: string,
  callback: (log?: any, error?: any, warn?: any, info?: any) => any
) {
  try {
    const fn = new Function('console', `(function(){\n${code}\n})()`)
    fn(consoleWithCallback(callback))
  } catch (error: any) {
    callback && callback(null, error)
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
  const utoolsLite = Object.assign({}, cloneDeep(utools))
  const dbBlackList = ['db', 'dbStorage', 'removeFeature', 'setFeature', 'onDbPull']
  const payBlackList = [
    'fetchUserServerTemporaryToken',
    'getUserServerTemporaryToken',
    'openPayment',
    'fetchUserPayments'
  ]
  const etcBlackList = ['onPluginEnter', 'onPluginOut', 'createBrowserWindow']
  concat(dbBlackList, payBlackList, etcBlackList).forEach((item) => {
    // @ts-ignore
    delete utoolsLite[item]
  })
  Object.freeze(utoolsLite)
  return utoolsLite
}

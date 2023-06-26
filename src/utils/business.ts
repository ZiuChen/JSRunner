import { cloneDeep, concat } from 'lodash-es'
import { parse } from 'comment-parser'
import { isElectron } from './env'

const uToolsLite = getuToolsLite()

export async function runCodeInSandbox(
  code: string,
  callback: (log?: any, error?: any, warn?: any, info?: any) => any
) {
  const { electron, Buffer, require, vm } = await import('@/preload')
  const context = {
    console: consoleWithCallback(callback),
    fetch: fetch.bind(window),
    utools: uToolsLite,
    electron,
    Buffer,
    require
  }
  try {
    vm.createContext(context)
    vm.runInContext(`(async function(){\n${code}\n})()`, context).catch((error: any) => {
      callback && callback(null, [error])
    })
  } catch (error: any) {
    callback && callback(null, [error])
  }
}

export function runCodeInBrowser(
  code: string,
  callback: (log?: any, error?: any, warn?: any, info?: any) => any
) {
  try {
    const fn = new Function(
      'console',
      'utools',
      'globalThis',
      `(async function(){\ntry{${code}}catch(error){console.error(error)}\n})()`
    )
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

export function parseCommentBlock(code: string) {
  const parsed = parse(code)
  console.log('code', code)
  if (parsed.length) {
    // 只解析第一个注释块 首行默认作为 name
    // name 优先从首行获取 否则从 @name 获取
    // description 从 @description 获取
    const block = parsed[0]
    const commentInfo = block.tags.length
      ? block.tags.map((tag) => ({
          name: block.description
            ? block.description
            : tag.tag === 'name'
            ? [tag.name, tag.description].join(' ')
            : '',
          description: tag.tag === 'description' ? [tag.name, tag.description].join(' ') : ''
        }))[0]
      : {
          name: block.description || ''
        }
    return commentInfo
  }
  return null
}

import { Buffer, require } from '@/preload'

export function runCodeInSandbox(
  code: string,
  callback: (log?: any, error?: any, warn?: any, info?: any) => any
) {
  try {
    // Compartment: from ses
    new Compartment({
      console: consoleWithCallback(callback),
      fetch: fetch.bind(window),
      utools,
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

import { isElectron } from '@/utils'

export function setItem(key: string, value: any) {
  const data = JSON.stringify(value)

  if (isElectron) {
    return utools.dbStorage.setItem(key, data)
  } else {
    localStorage.setItem(key, data)
  }
}

export function getItem(key: string) {
  if (isElectron) {
    const data = utools.dbStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } else {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }
}

export function removeItem(key: string) {
  const dbStorage = isElectron ? utools.dbStorage : localStorage
  dbStorage.removeItem(key)
}

export function allDocs(key?: string) {
  if (isElectron) {
    return utools.db.allDocs(key)
  } else {
    const res = []
    for (let i = 0; i < localStorage.length; i++) {
      // 如果传入了key 则只返回包含key的数据
      if (key) {
        const _key = localStorage.key(i)
        if (_key && _key.includes(key)) {
          res.push({
            _id: _key,
            data: getItem(_key)
          })
        }
        continue
      }

      // 否则返回所有数据
      res.push({
        _id: localStorage.key(i),
        data: getItem(localStorage.key(i)!)
      })
    }
    return res
  }
}

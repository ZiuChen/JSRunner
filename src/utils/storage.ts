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
    return utools.db.allDocs(key).map((db) => ({
      ...db,
      value: JSON.parse(db.value)
    }))
  }

  const res: { [x: string]: any; _id: string }[] = []

  if (!localStorage.length) {
    return res
  }

  for (let i = 0; i < localStorage.length; i++) {
    const _id = localStorage.key(i)

    // filter by key if key is provided
    if (key && _id && !_id.startsWith(key)) {
      continue
    }

    if (_id) {
      const data = localStorage.getItem(_id)
      res.push({
        value: data ? JSON.parse(data) : null,
        _id
      })
    }
  }

  return res
}

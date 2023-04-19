export function classof(o: any) {
  if (o === null) return 'Null'
  if (o === undefined) return 'Undefined'
  return Object.prototype.toString.call(o).slice(8, -1)
}

export function formatTime(timeStamp: number) {
  // example: 2021年8月12日 08:08:08
  const date = new Date(timeStamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const formatNumber = (n: number) => {
    const sn = n.toString()
    return sn[1] ? sn : '0' + sn
  }

  return `${year}年${formatNumber(month)}月${formatNumber(day)}日 ${formatNumber(
    hour
  )}:${formatNumber(minute)}:${formatNumber(second)}`
}

export function copyText(text: string) {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
    } else {
      var textarea = document.createElement('textarea')
      document.body.appendChild(textarea)
      textarea.style.position = 'fixed'
      textarea.style.clip = 'rect(0 0 0 0)'
      textarea.style.top = '10px'
      textarea.value = text
      textarea.select()
      document.execCommand('copy', true)
      document.body.removeChild(textarea)
    }
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

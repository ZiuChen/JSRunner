export interface Config {
  type: string
  label: string
  isNumber?: boolean
  min?: number
  max?: number
  defaultValue?: string
  options?: {
    label: string
    value: string
  }[]
}

export type featureKey = 'common' | 'regex' | 'over' | 'files' | 'img' | 'window'

export const featureCmdMap = {
  common: '常规',
  regex: '文本匹配',
  over: '任意文本',
  files: '文件或文件夹',
  img: '图片',
  window: '应用窗口'
} as Record<featureKey, string>

export const featureMap = {
  common: [
    {
      type: 'input',
      label: '关键字名称'
    }
  ],
  regex: [
    {
      type: 'input',
      label: '关键字名称'
    },
    {
      type: 'input',
      label: '正则表达式'
    },
    {
      type: 'input',
      label: '最小字符数',
      isNumber: true,
      min: 0
    },
    {
      type: 'input',
      label: '最多字符数',
      isNumber: true,
      min: 0
    }
  ],
  over: [
    {
      type: 'input',
      label: '关键字名称'
    },
    {
      type: 'input',
      label: '排除正则表达式'
    },
    {
      type: 'input',
      label: '最小字符数',
      isNumber: true,
      min: 0
    },
    {
      type: 'input',
      label: '最多字符数',
      isNumber: true,
      min: 0
    }
  ],
  files: [
    {
      type: 'input',
      label: '关键字名称'
    },
    {
      type: 'dropdown',
      label: '文件类型',
      options: [
        {
          label: '文件',
          value: 'file'
        },
        {
          label: '文件夹',
          value: 'folder'
        }
      ]
    },
    {
      type: 'input',
      label: '文件名匹配正则表达式'
    },
    {
      type: 'input',
      label: '最小文件数',
      isNumber: true,
      min: 0
    },
    {
      type: 'input',
      label: '最多文件数',
      isNumber: true,
      min: 0
    }
  ],
  img: [
    {
      type: 'input',
      label: '关键字名称'
    }
  ],
  window: [
    {
      type: 'input',
      label: '关键字名称'
    },
    {
      type: 'input',
      label: '应用名称（多个则使用,隔开）'
    },
    {
      type: 'input',
      label: '窗口标题正则表达式'
    },
    {
      type: 'input',
      label: '窗口类（Windows专有）'
    }
  ]
} as Record<featureKey, Config[] | Config>

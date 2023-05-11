import { defineStore } from 'pinia'
import type { setFeature } from 'utools-api-types'

export interface FeatureState {
  features: Feature[]
}

export type Feature = Parameters<typeof setFeature>[0]

export const featureCmdMap = {
  regex: '文本匹配',
  over: '任意文本',
  files: '文件或文件夹',
  img: '图片',
  window: '应用窗口'
}

export const useFeatureStore = defineStore('feature', {
  state: (): FeatureState => ({
    features: [
      {
        code: 'feature1',
        explain: '功能1',
        platform: ['win32', 'darwin'],
        cmds: ['feature1']
      }
    ]
  }),
  actions: {
    addFeature(feature: Feature) {
      this.features.push(feature)
    },

    removeFeature(code: string) {}
  }
})

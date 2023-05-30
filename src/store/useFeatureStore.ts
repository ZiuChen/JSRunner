import { defineStore } from 'pinia'
import { uniqueId } from 'lodash-es'
import type { setFeature } from 'utools-api-types'
import { isElectron } from '@/utils'
import { featureCmdMap, featureMap, featureKey, Config } from '@/common/feature'

export interface FeatureState {
  name: string
  description: string
  logo: string
  features: {
    id: string
    type: featureKey
    name: string
    model: Config[] | Config
    value: any[]
  }[]
  isEditorVisible: boolean
  cmdString: string
  cmdParsed: any
}

export type Feature = Parameters<typeof setFeature>[0]

export const useFeatureStore = defineStore('feature', {
  state: (): FeatureState => ({
    name: '',
    description: '',
    logo: '/logo.png',
    features: [], // TODO: form editor
    isEditorVisible: false,
    cmdString: JSON.stringify(['快捷脚本', 'QuickScript'], null, 2),
    cmdParsed: {}
  }),
  actions: {
    pushFeature(type: featureKey) {
      this.features.push({
        id: uniqueId(),
        type,
        name: featureCmdMap[type],
        model: featureMap[type],
        value: new Array(featureMap[type].length)
      })
    },

    removeFeature(id: string) {
      const idx = this.features.findIndex((f) => f.id === id)
      if (idx !== undefined && idx !== -1) {
        this.features.splice(idx, 1)
      }
    },

    setFeatureVisible(visible: boolean) {
      this.isEditorVisible = isElectron ? visible : false
    },

    handlecmdStringChange(s: string) {
      this.cmdString = s
    },

    saveScript() {
      console.log(this.cmdString)
    }
  }
})

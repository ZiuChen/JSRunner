<template>
  <div class="form">
    <div class="feature-item" v-for="f of store.features">
      <div class="feature-name">
        {{ f.name }}
      </div>
      <template v-for="m of f.model">
        <FeatureContent :model="m"></FeatureContent>
      </template>
      <a-button class="close-btn" type="text" shape="circle" @click="store.removeFeature(f.id)">
        <icon-close-circle :size="20"></icon-close-circle>
      </a-button>
    </div>
    <a-dropdown v-if="isElectron" @select="(t) => store.pushFeature(t as featureKey)">
      <a-button class="plus-button" type="text">
        <icon-plus />
        <span>添加关键字</span>
      </a-button>
      <template #content>
        <template v-for="f in (Object.keys(featureCmdMap) as featureKey[])" :key="f">
          <a-doption :value="f">
            {{ featureCmdMap[f] }}
          </a-doption>
        </template>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { isElectron } from '@/utils'
import { useFeatureStore } from '@/store'
import { featureCmdMap, featureKey } from '@/common/feature'

const store = useFeatureStore()
</script>

<style lang="less" scoped>
.plus-button {
  width: 25%;
  height: 32px;
  margin-top: 10px;
  justify-content: flex-start;

  span {
    margin-left: 8px;
  }
}
.feature-item {
  position: relative;
  padding: 20px;
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
  margin-top: 10px;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.feature-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>

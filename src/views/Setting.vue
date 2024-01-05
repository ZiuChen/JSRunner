<template>
  <div class="setting">
    <BackButton />
    <SettingContent title="保存时间">
      <a-select
        v-model="setting.codeChangeDebounce"
        @change="(val) => setting.update('codeChangeDebounce')(val as number)"
      >
        <a-option :value="300">0.3秒</a-option>
        <a-option :value="500">0.5秒</a-option>
        <a-option :value="1000">1秒</a-option>
      </a-select>
    </SettingContent>
    <SettingContent title="代码缩进">
      <a-radio-group
        v-model="setting.indentType"
        @change="(val) => setting.update('indentType')(val as 'space' | 'tab')"
      >
        <a-radio value="space">Space</a-radio>
        <a-radio value="tab">Tab</a-radio>
      </a-radio-group>
    </SettingContent>
    <SettingContent title="缩进尺寸">
      <a-select
        v-model="setting.indentSize"
        @change="(val) => setting.update('indentSize')(val as number)"
      >
        <a-option :value="2">2</a-option>
        <a-option :value="4">4</a-option>
        <a-option :value="6">6</a-option>
        <a-option :value="8">8</a-option>
      </a-select>
    </SettingContent>
    <SettingContent title="自定义代码片段">
      <a-collapse v-if="setting.snippets.length">
        <a-collapse-item
          v-for="snippet of setting.snippets"
          :key="snippet.id"
          :header="`Snippet: ${snippet.label} - ${snippet.documentation}`"
        >
          <a-form :model="snippet" layout="vertical">
            <a-row>
              <a-col :span="12">
                <a-form-item field="label" label="提示词" required>
                  <a-input v-model="snippet.label" placeholder="label"></a-input>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item field="documentation" label="说明">
                  <a-input v-model="snippet.documentation" placeholder="documentation"></a-input>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="24">
                <a-form-item field="insertText" label="代码内容" required>
                  <a-textarea v-model="snippet.insertText" placeholder="insertText"></a-textarea>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <template #extra>
            <a-popconfirm content="确定删除吗？" @ok="setting.removeSnippet(snippet.id)">
              <a-button @click.stop="void" status="danger" shape="circle">
                <icon-delete></icon-delete>
              </a-button>
            </a-popconfirm>
          </template>
        </a-collapse-item>
      </a-collapse>
      <a-button type="outline" @click.stop="setting.newSnippet" style="margin-top: 10px" long>
        新建
      </a-button>
    </SettingContent>
    <SettingContent title="插件主题">
      <a-radio-group v-model="setting.theme" @change="setting.setTheme">
        <a-radio value="default">跟随系统</a-radio>
        <a-radio value="dark">深色模式</a-radio>
        <a-radio value="light">浅色模式</a-radio>
      </a-radio-group>
    </SettingContent>
  </div>
</template>

<script setup lang="ts">
import { usePageBack } from '@/hooks/usePageBack'
import SettingContent from '@/components/SettingContent.vue'
import { useSettingStore } from '@/store'
import { setItem } from '@/utils'

const setting = useSettingStore()
const { BackButton } = usePageBack()

onBeforeUnmount(() => {
  for (const snippet of setting.snippets) {
    setItem('setting/snippet/' + snippet.id, snippet)
  }
})
</script>

<style lang="less" scoped>
.setting {
  margin: 0 50px;
  padding-bottom: 50px;
}
</style>

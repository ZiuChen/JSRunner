<template>
  <div class="scripts">
    <template v-for="s of scripts" :key="s.id">
      <a-card class="script" hoverable>
        <div class="script__content">
          <img class="script__logo" :src="s.logo || 'logo.png'" alt="logo" draggable="false" />
          <div class="script__info">
            <span class="script__name" :title="s.name">{{ s.name }}</span>
            <span class="script__description" :title="s.description">{{ s.description }}</span>
          </div>
        </div>
        <div class="script__actions">
          <span class="icon-hover"><icon-eye :size="actionIconSize" /></span>
          <span class="icon-hover"><icon-edit :size="actionIconSize" /></span>
          <span class="icon-hover"><icon-delete :size="actionIconSize" /></span>
          <span class="icon-hover"><icon-share-alt :size="actionIconSize" /></span>
        </div>
      </a-card>
    </template>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import { usePageBack } from '@/hooks/usePageBack'
import { allDocs, classof } from '@/utils'

const actionIconSize = 18

const scripts = ref(
  allDocs('script/').map((doc) =>
    // 兼容浏览器环境（getItem默认parse）
    classof(doc.data) === 'String' ? JSON.parse(doc.data) : doc.data
  )
)

function handleViewClick() {}

function handleEditClick() {}

function handleDeleteClick() {}

function handleShareClick() {}

const { BackButton } = usePageBack()
</script>

<style lang="less" scoped>
.scripts {
  margin: 0 40px;
}
.script {
  margin: 10px;
  overflow: hidden;
}
.script__content {
  display: flex;
  align-items: center;
}
.script__logo {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
.script__info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.script__name {
  font-size: 16px;
  font-weight: bold;
  word-wrap: break-word;
}
.script__description {
  margin-top: 5px;
  word-wrap: break-word;
}
.script__actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.icon-hover {
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: #1890ff;
  }
}
</style>

<template>
  <div class="about">
    <img class="bg-icon" src="/logo.png" alt="logo" />
    <h1 class="title">超级JavaScript</h1>
    <a-link @click="openLink('https://github.com/ZiuChen')">ZiuChen</a-link>
    <div class="footer-btns">
      <template v-for="btn of btns">
        <a-badge v-if="!!btn?.badge" v-bind="btn.badge">
          <a-button @click="openLink(btn.url)">{{ btn.text }}</a-button>
        </a-badge>
        <a-button v-else @click="openLink(btn.url)">{{ btn.text }}</a-button>
      </template>
    </div>
    <div class="footer-tip">Copyright © 2024 ZiuChen</div>
    <BackButton />
  </div>
</template>

<script lang="ts" setup>
import { usePageBack } from '@/hooks/usePageBack'
import { openLink } from '@/utils'

const btns = [
  { text: '插件主页', url: 'https://ziuchen.gitee.io/project/JSRunner/' },
  {
    text: '开源地址',
    url: 'https://github.com/ZiuChen/JSRunner',
    badge: { text: 'Star Me' }
  },
  { text: '体验在线版', url: 'https://ziuchen.github.io/JSRunner/' },
  { text: '更新日志', url: 'https://ziuchen.gitee.io/project/JSRunner/log/' }
]

const { BackButton } = usePageBack()
</script>

<style lang="less" scoped>
.about {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin: auto;
  text-align: center;
  .bg-icon {
    margin-top: 50px;
    width: 150px;
    left: 50%;
    top: 5%;
  }
  .title {
    background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .footer-btns {
    margin-top: 25px;
    .dot {
      :deep(.el-badge__content) {
        z-index: 1;
      }
    }
    & > * {
      margin: 0 5px;
    }
  }
  .footer-tip {
    position: absolute;
    bottom: 10px;
    width: 100%;
    margin: 0 auto;
    font-size: 12px;
    color: var(--text-color-lighter);
  }
}
</style>

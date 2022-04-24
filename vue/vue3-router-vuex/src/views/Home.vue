<template>
  <div class="home">
    <h3>我是首页</h3>
    <router-link to="/home/message">消息</router-link> |
    <router-link to="/home/shops">商品</router-link> |
    <router-link to="/home/moment">动态</router-link>
    <router-view />
  </div>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    onUnmounted(() => {
      console.log('首页组件被卸载')
    })
  },
})
</script>

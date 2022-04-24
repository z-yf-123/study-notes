<template>
  <div class="home-message">
    <ul>
      <li>消息xxx</li>
      <li>消息xxx</li>
      <li>消息xxx</li>
      <li>消息xxx</li>
      <li>消息xxx</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    onUnmounted(() => {
      console.log('首页消息组件被卸载')
    })
  },
})
</script>

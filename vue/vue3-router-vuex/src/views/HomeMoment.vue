<template>
  <div class="home-moment">
    <ul>
      <li>动态xxx</li>
      <li>动态xxx</li>
      <li>动态xxx</li>
      <li>动态xxx</li>
      <li>动态xxx</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    onUnmounted(() => {
      console.log('首页动态组件被卸载')
    })
  },
})
</script>

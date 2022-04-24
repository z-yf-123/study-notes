<template>
  <div class="home-shops">
    <ul>
      <li>商品xxx</li>
      <li>商品xxx</li>
      <li>商品xxx</li>
      <li>商品xxx</li>
      <li>商品xxx</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    onUnmounted(() => {
      console.log('首页商品组件被卸载')
    })
  },
})
</script>

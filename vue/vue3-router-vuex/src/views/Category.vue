<template>
  <div class="category">
    <h3>我是分类页</h3>
  </div>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    onUnmounted(() => {
      console.log('分类页组件被卸载')
    })
  },
})
</script>

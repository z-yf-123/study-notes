<template>
  <div class="about">About: {{ $route.query.name }}-{{ $route.query.age }}</div>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    onUnmounted(() => {
      console.log('关于组件被卸载')
    })
  },
})
</script>

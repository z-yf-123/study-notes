<template>
  <div class="User">
    <h3>用户id为:{{ $route.params.id }}</h3>
    <h3>用户id为:{{ userId }}</h3>
  </div>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    onUnmounted(() => {
      console.log('用户页组件被卸载')
    })
    return {
      userId: route.params.id,
    }
  },
})
</script>

<style scoped lang="less"></style>

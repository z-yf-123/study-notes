<template>
  <div>
    <home />
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import { demoMixin } from './mixins/demoMixin'

export default {
  components: {
    Home,
  },
  mixins: [demoMixin],
}
</script>

<style scoped></style>

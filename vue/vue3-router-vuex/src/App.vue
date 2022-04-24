<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> -->
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user/id/001">User</router-link> |
    <router-link to="/category">Category</router-link> |
    <button @click="jumpToHome">跳转首页</button> |
    <button @click="jumpToAbout">跳转关于页</button>
  </div>
  <router-view v-slot="props">
    <!-- <transition name="why"> -->
    <!-- 对路由组件进行缓存 -->
    <keep-alive>
      <component :is="props.Component"></component>
    </keep-alive>
    <!-- </transition> -->
  </router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()

    const jumpToHome = () => {
      router.push('/')
    }

    const jumpToAbout = () => {
      router.push({
        path: '/about',
        query: {
          name: 'why',
          age: 18,
        },
      })
    }
    return {
      userId: route.params.id,
      jumpToHome,
      jumpToAbout,
    }
  },
})
</script>

<style lang="less">
.why-active {
  color: red;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>

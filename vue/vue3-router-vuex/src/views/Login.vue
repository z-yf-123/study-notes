<template>
  <div>
    <h3>您还没有登录,请登录</h3>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const loginClick = () => {
      window.localStorage.setItem('token', 'why')

      router.push({
        path: '/home',
      })
    }

    return {
      loginClick,
    }
  },
}
</script>

<style scoped></style>

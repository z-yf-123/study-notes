<template>
  <div class="movie">
    <h3>我是电影内容</h3>
    <p>电影id:{{ $route.params.mid }}------{{ mid }}</p>
  </div>
</template>

<script>
export default {
  props: ['mid'],
}
</script>

<style scoped lang="less">
.movie {
  height: 300px;
  background-color: #acf;
}
</style>

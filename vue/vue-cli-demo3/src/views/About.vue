<template>
  <div class="about">
    <h3>这是关于页</h3>
    <div id="tab">
      <router-link to="/about/tab1">Tab1</router-link> ||
      <router-link to="/about/tab2">Tab2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script></script>

<style scoped lang="less">
.about {
  height: 300px;
  background-color: #cba;
}
</style>

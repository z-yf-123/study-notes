<template>
  <div id="app">
    <div id="nav">
      <!-- <a href="#/home">首页</a> -->
      <router-link to="/">Home</router-link> ||
      <!--注意1:在 hash地址中，/后面的参数项，叫做“路径参数”-->
      <!--在路由“参数对象”中，需要使用this.$route.params来访问路径参数-->
      <!--注意2:在hash地址中，?后面的参数项，叫做“查询参数”-->
      <!--在路由“参数对象”中，需要使用this.$route.query来访问查询参数-->
      <!--注意3:在 this.$route 中, path只是路径部分;fullPath 是完整的地址--><!--例如:-->
      <!-- /movie/2?name=zs&age=20是fullPath 的值-->
      <!-- /movie/2是path的值-->
      <router-link to="/movie/001">肖申克的救赎</router-link>--
      <router-link to="/movie/002?name=zs&age=20">这个杀手不太冷</router-link>--
      <router-link to="/movie/003">泰坦尼克号</router-link> ||
      <router-link to="/about">About</router-link>
      <!-- 编程式导航 -->
      <button @click="$router.push('/')">通过push跳转到首页</button>
      <button @click="$router.replace('/about')">
        通过replace跳转到关于页
      </button>
      <button @click="$router.forward()">前进</button>
      <button @click="$router.back()">回退</button>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>

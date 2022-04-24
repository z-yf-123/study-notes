<template>
  <div class="left">
    <h3 v-bgc="'red'">我是左边的组件</h3>
    <p>count的值为:{{ count }}</p>
    <button @click="add">点击+1</button>
  </div>
</template>

<script>
export default {
  name: "left",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
  },
  activated() {
    console.log("activated  组件被激活");
  },
  deactivated() {
    console.log("deactivated 组件被缓存");
  },
};
</script>

<style scoped lang="less">
.left {
  width: 400px;
  height: 200px;
  background-color: #bfc;
}
</style>

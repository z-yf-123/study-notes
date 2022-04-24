<template>
  <div class="left">
    <h3>左边的组件</h3>
    <p>从子组件Count传递过来的count值为:{{ count }}</p>
    <button @click="onReset">将子组件中的count重置为0</button>
    <my-count :add-step="3" @numChange="getNewCount" ref="leftCountRef" />
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
    getNewCount(val) {
      this.count = val;
    },
    onReset() {
      this.$refs.leftCountRef.count = 0;
    },
  },
};
</script>

<style scoped lang="less">
.left {
  width: 300px;
  height: 300px;
  background-color: red;
  // 当在父组件中需要修改子组件的样式(比如使用组件库,有修改组件库默认样式的需求)
  /deep/ .title {
    color: #bfc;
  }
}
</style>

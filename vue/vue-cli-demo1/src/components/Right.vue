<template>
  <div class="right">
    <h3>右边的组件</h3>
    <my-count :add-step="5" />
  </div>
</template>

<script>
export default {
  name: "right",
};
</script>

<style scoped lang="less">
.right {
  width: 300px;
  height: 300px;
  background-color: blue;
  // 当在父组件中需要修改子组件的样式(比如使用组件库,有修改组件库默认样式的需求)
  /deep/ .title {
    color: green;
  }
}
</style>

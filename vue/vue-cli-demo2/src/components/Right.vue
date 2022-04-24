<template>
  <div class="right">
    <h3>我是右边的组件</h3>
  </div>
</template>

<script>
export default {
  name: "right",
  activated() {
    console.log("activated  组件被激活");
  },
  deactivated() {
    console.log("deactivated 组件被缓存");
  },
};
</script>

<style scoped lang="less">
.right {
  width: 400px;
  height: 200px;
  background-color: #caf;
}
</style>

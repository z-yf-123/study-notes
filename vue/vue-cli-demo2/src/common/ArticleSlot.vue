<template>
  <div class="article-slot">
    <div class="header-box">
      <slot name="header">头部标题区域</slot>
    </div>
    <div class="content-box">
      <!--在封装组件时，为预留的<slot>提供属性对应的值，这种用法，叫做“作用域插槽”-->
      <slot name="content" msg="插槽的某个属性值">内容区域</slot>
    </div>
    <div class="footer-box">
      <slot name="footer">底部区域</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "article",
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.article {
  .header-box {
    background-color: #fab;
  }
  .content-box {
    background-color: #acb;
  }
  .footer-box {
    background-color: #bba;
  }
}
</style>

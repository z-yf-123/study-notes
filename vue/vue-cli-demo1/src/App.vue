<template>
  <div id="app" v-if="flag">
    <left />
    <right />
    <button @click="isShow">销毁app组件</button>
    <div v-if="showDiv" ref="divRef">测试nextTick</div>
    <button @click="getDivText">点击后显示div并获取文本值</button>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  name: "App",
  components: {
    Left,
    Right,
  },
  data() {
    return {
      flag: true,
      showDiv: false,
    };
  },
  methods: {
    isShow() {
      this.flag = false;
    },
    getDivText() {
      this.showDiv = true;
      /**
       * 当showDiv为true时只是数据改变了,dom还没有更新
       * 所以拿不到div元素,nextTick可以等组件完成更新后执行回调
       */
      this.$nextTick(() => {
        console.log(this.$refs.divRef.textContent);
      });
    },
  },
  //1.创建阶段
  beforeCreate() {
    console.log(
      "beforeCreate 组件的props/data/methods都尚未被创建,都处于不可用状态"
    );
  },
  created() {
    console.log(
      "created 组件的props/data/methods都已创建好,但模板结构尚未生成,一般在这里进行网络请求"
    );
  },
  beforeMount() {
    console.log(
      "beforeMount 将要把内存中编译好的HTML结构渲染到浏览器中。此时浏览器中还没有当前组件的DOM结构"
    );
  },
  mounted() {
    console.log("mounted 此时浏览器已包含当前组件DOM结构");
  },
  //2.运行阶段
  beforeUpdate() {
    console.log("beforeUpdate 数据改变了,但DOM还未重新渲染");
  },
  updated() {
    console.log("updated 数据和DOM结构都已完全渲染,这里能够操作最新DOM结构,");
  },
  //3.销毁阶段
  beforeDestroy() {
    console.log("beforeDestroy 组件即将销毁,组件还处于正常工作状态");
  },
  destroyed() {
    console.log("destroyed 组件完全销毁");
  },
};
</script>

<style lang="less">
#app {
  display: flex;
  justify-content: space-around;
}
</style>

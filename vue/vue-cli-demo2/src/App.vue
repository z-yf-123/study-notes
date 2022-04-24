<template>
  <div id="app">
    <!-- is属性的值代表要渲染的组件名 -->
    <button @click="comName = 'Left'" v-color="'green'">展示左边的组件</button>
    <button @click="comName = 'Right'" v-bgc="'blue'">展示右边的组件</button>
    <!-- keep-alive可以把内部组件进行缓存,而不是销毁 -->
    <!-- include指定哪个组件需要被缓存 -->
    <keep-alive include="left">
      <component :is="comName"></component>
    </keep-alive>
    <article-slot>
      <template #header>
        <h1 v-color="color">蜀道难</h1>
      </template>
      <template #content="scope">
        <!-- 建议用scope,也可以用其他名 -->
        <p>蜀道难,难于上青天</p>
        <span>{{ scope.msg }}</span>
      </template>
      <template #footer>诗人:李白</template>
    </article-slot>
    <button @click="color = '#bfc'">更改颜色</button>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import ArticleSlot from "@/common/ArticleSlot.vue";

export default {
  name: "App",
  components: {
    //如果在“声明组件”的时候，没有为组件指定name名称，则组件的名称默认就是“注册时候的名称”
    //1.组件的“注册名称”的主要应用场景是:以标签的形式，把注册好的组件，渲染和使用到页面结构之中
    //2.组件声明时候的“name”名称的主要应用场景:结合<keep-alive>标签实现组件缓存功能;以及在调试工具中看到组件的 name名称
    Left,
    Right,
    ArticleSlot,
  },
  data() {
    return {
      comName: "Left",
      color: "red",
    };
  },
  methods: {},
  // 私有自定义指令节点
  directives: {
    //color: {
    //    当指令第一次绑定到元素上时会立即触发bind函数
    //    形参中的el表示当前所绑定到的dom对象
    //    bind(el, binding) {
    //      console.log("触发了v-color的bind函数");
    //      el.style.color = binding.value;
    //    },
    //    在dom更新的时候会触发update函数
    //    update(el, binding) {
    //      console.log("触发了v-color的update函数");
    //      el.style.color = binding.value;
    //    },
    //},
    // 简写
    color(el, binding) {
      el.style.color = binding.value;
    },
  },
};
</script>

<style lang="less"></style>

import Vue from "vue";
import App from "./App.vue";

import Count from "@/common/Count.vue";
//注册全局组件Count(因为Count在很多组件都用到)
Vue.component("MyCount", Count);

Vue.config.productionTip = false;

new Vue({
  // 把 render 函数指定的组件渲染到 HTML 页面中
  render: (h) => h(App),
}).$mount("#app");
//$mount的作用和el属性一样

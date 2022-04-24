import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全局配置 axios 的请求根路径
// axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把 axios 挂载到Vue.prototype上,供每个组件实例使用
// Vue.prototype.$http = axios
// 缺点:不利于接口复用

new Vue({
  // 挂载路由实例
  router,
  render: (h) => h(App),
}).$mount('#app')

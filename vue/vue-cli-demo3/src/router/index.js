import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Movie from '@/views//Movie.vue'
import Tab1 from '@/views/tabs/Tab1.vue'
import Tab2 from '@/views/tabs/Tab2.vue'

// 调用Vue.use()函数,把VueRouter安装为Vue的插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/movie/:mid',
    component: Movie,
    // 也可以为路由开启props传参
    props: true,
  },
  {
    path: '/about',
    redirect: '/about/tab1',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'tab1',
        component: Tab1,
      },
      {
        path: 'tab2',
        component: Tab2,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

// 配置全局前置守卫(在路由跳转之前触发的回调)
router.beforeEach((to, from, next) => {
  // to是要访问的路由信息对象
  // from是要离开的路由信息对象
  // next是一个函数，调用next表示放行
  console.log('触发全局前置守卫', to, from)
  next()
})

export default router

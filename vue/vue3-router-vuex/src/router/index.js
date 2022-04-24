import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/message',
      },
      {
        path: 'message',
        component: () => import('@/views/HomeMessage.vue'),
      },
      {
        path: 'shops',
        component: () => import('@/views/HomeShops.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/user/id/:id',
    component: () => import('@/views/User.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// 添加顶级路由对象
router.addRoute({
  path: '/category',
  component: () => import('@/views/Category.vue'),
})

// 添加二级路由对象
// 注:第一个参数要和路由的name对应
router.addRoute('Home', {
  path: 'moment',
  component: () => import('@/views/HomeMoment.vue'),
})

// 导航守卫beforeEach
router.beforeEach((to, from) => {
  console.log(to)
  console.log(from)
  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token')
    console.log(token)
    if (!token) {
      return '/login'
    }
  }
})

// 返回值问题:
//   1.false: 不进行导航
//   2.undefined或者不写返回值: 进行默认导航
//   3.字符串: 路径, 跳转到对应的路径中
//   4.对象: 类似于 router.push({path: "/login", query: ....})
export default router

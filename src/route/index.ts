import store, { GlobalDataProps } from '@/store/store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 定义当前项目路由
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue'),
    meta: { redireactAleadeLogin: true }
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import(/* webpackChunkName: "column" */ '../views/ColumnDetail/index.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create/index.vue'),
    meta: {
      requireLogin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
/**
 * to: 去哪个路由
 * form: 从哪个路由来
 * next: 允许路由跳转
 */

router.beforeEach((to, form, next) => {
  console.log(to, 'to')
  console.log(store.state, 'store')
  if (to.meta.requireLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redireactAleadeLogin && store.state.user.isLogin) {
    console.log('进来')
    next('/')
  } else {
    next()
  }
})
export default router

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
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ColumnDetail/index.vue')
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
export default router

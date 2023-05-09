import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../pages/MainPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

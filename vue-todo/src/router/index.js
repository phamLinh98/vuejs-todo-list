import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

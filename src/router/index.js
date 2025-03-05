import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../views/Home.vue'
import StartScreen from '../views/Start.vue'

const routes = [
  { path: '/home', component: HomeScreen },
  { path: '/', component: StartScreen }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
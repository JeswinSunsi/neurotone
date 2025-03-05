import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../views/Home.vue'
import StartScreen from '../views/Start.vue'

const routes = [
  { path: '/', component: StartScreen },
  { path: '/home', component: HomeScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
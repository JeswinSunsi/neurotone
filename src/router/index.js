import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../views/Home.vue'
import StartScreen from '../views/Start.vue'
import TremorScreen from '../views/Tremor.vue'

const routes = [
  { path: '/', component: StartScreen },
  { path: '/home', component: HomeScreen },
  { path: '/tremor', component: TremorScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '../views/Home.vue'
import StartScreen from '../views/Start.vue'
import VoiceScreen from '../views/Voice.vue'

const routes = [
  { path: '/', component: StartScreen },
  { path: '/home', component: HomeScreen },
  { path: '/voice', component: VoiceScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
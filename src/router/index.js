import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Habilidade from '@/views/Habilidades.vue'
import Sobre from '@/views/Sobre.vue'
import Status from '@/views/Status.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: 'habilidades', component: Habilidade },
      { path: 'sobre', component: Sobre },
      { path: 'status', component: Status }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

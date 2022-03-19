import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/products',
    name: 'ProductsView',
    component: () => import('../views/ProductsView.vue'),
  },
  {
    path: '/card',
    name: 'CardView',
    component: () => import('../views/CardView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

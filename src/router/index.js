import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/recom',
    children: [
      {
        path: '/recom',
        name: 'Recom',
        component: () => import('@/views/Recommd'),
        children: [
          {
            path: 'detail/:id/:type',
            name: 'Detail',
            component: () => import('@/views/Detail/index.vue')
          },
          {
            path: 'playlist',
            component: () => import('@/views/PlayList/idnex.vue'),
            children: [
              {
                path: ':id/:type',
                component: () => import('@/views/Detail/index.vue')
              }
            ]
          },
          {
            path: 'rank',
            component: () => import('@/views/Rank'),
            children: [
              {
                path: ':id/:type',
                component: () => import('@/views/Detail/index.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search')
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

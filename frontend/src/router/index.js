import { createRouter, createWebHashHistory } from 'vue-router'

const baseRoutes = [
  {
    path: '/',
    name: 'exportConfig',
    component: () => import('@/views/biz/exportConfig/index.vue'),
  },
  {
    path: '/exportPicture',
    name: 'exportPicture',
    component: () => import('@/views/biz/exportPicture/index.vue'),
  },
  {
    path: '/appSetting',
    name: 'appSetting',
    component: () => import('@/views/biz/appSetting/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('@/views/base/NotFound/index.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoutes,
})

export default router

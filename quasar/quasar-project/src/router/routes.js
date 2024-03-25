const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'Test', component: () => import('pages/TestPage.vue') },
      { path: 'Animation', component: () => import('pages/TryAnimate.vue') },
      { path: 'DarkToggle', component: () => import('pages/TryDarkMode.vue') },
      { path: 'DatePick', component: () => import('pages/TryDatePicker.vue') },
      { path: 'QDialog', component: () => import('pages/TryQDialog.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

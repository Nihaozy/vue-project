export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录'
    },
    component: () => import('@/components/HelloWorld')
  },
]
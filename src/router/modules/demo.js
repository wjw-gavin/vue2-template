// 路由
const demoRouter = [
  {
    path: '/areamanagement',
    name: 'areamanagement',
    component: () => import('../../App.vue'),
    meta: {
      title: '地区管理',
      activePath: '/areamanagement'
    }
  }
]

export default demoRouter

/**
 * path:'router-name'             跳转地址
 * name:'router-name'             如果用到<keep-alive>，必须设置该属性
 * meta : {
    title: 'title'                用于设置网页标签显示的标题
    keepAilve: true               是否缓存，默认 false
  }
 */

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../App.vue")
  }
]

/** 当路由很多时，可以拆分成小模块 **/
// 自动导入Modules/ 模块
const customModuleFiles = require.context("./modules", true, /\.js$/)
customModuleFiles.keys().forEach(key => {
  customModuleFiles(key).default.forEach(route => {
    routes.push(route)
  });
});
export default routes

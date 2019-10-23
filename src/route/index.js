
// 路由配置说明

// {
//   name: "router-name" //设定路由的名字，一定要填写 不然使用<keep-alive>时会出现各种问题
//   meta: {
//     type: 1, // 所属模块的id
//     roles: ['readable']  //设置该路由进入的权限, readable 需要可读 editable 需要可写 operable 需要可操作 excuteable 需要可执行
//     title: "title"; //设置该路由在侧边栏和面包屑中展示的名字 * 多语言不需要设置
//     icon: "svg-name"; //设置该路由的图标
//     color: "#000"  // 设置路由标题 图标颜色
//     keepAlive: false //如果设置为true ,则会被 <keep-alive> 缓存(默认 false)
//     notRequireAuth: false  // 如果页面不需要登录 必须明确设置
//     //当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
//     hidden: false  // 默认false 不填写

//     //当设置 false 的时候该路由在面包屑导航中不可被点击
//     redirect: true

//     //当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
//     //只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
//     //若你想不管路由下面的 children 声明的个数都显示你的根路由
//     //你可以设置 true 这样它就会忽略之前定义的规则，一直显示根路由
//     alwaysShow: false
//   }
// }

import Vue from "vue"
import Router from "vue-router"
import { constantRoutesMap } from "./routesMap"

import store from "@/store"

Vue.use(Router)

const createRouter = () => new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: constantRoutesMap,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let pos = { x: 0, y: 0 }

        if (to.hash) {
          pos = { selector: to.hash }
        } else if (savedPosition) {
          pos = savedPosition
        }

        resolve(pos)
      }, 500)
    })
  }
})

const router = createRouter()

export const resetRouter = () => {
  const newRouter = createRouter()

  router.matcher = newRouter.matcher // reset router
}

export const addRouter = async ({ roles, admin }) => {
  const accessRoutes =
    await store
      .dispatch("permission/generateRoutes", {
        roles,
        admin
      })

  router.addRoutes(accessRoutes)
}

export default router

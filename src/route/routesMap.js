
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

import Layout from "@/views/layout"
import { deepPath } from "@/utils"

const constantRoutesMap = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [{
      name: "home",
      component: () => import("@/views/home"),
      meta: {
        icon: "menu",
        title: "home"
      }
    }]
  },

  {
    name: "login",
    component: () => import("@/views/login"),
    meta: {
      title: "login",
      notRequireAuth: true,
      hidden: true
    }
  },

  {
    name: "register",
    component: () => import("@/views/login/register"),
    meta: {
      title: "register",
      notRequireAuth: true,
      hidden: true
    }
  },

  {
    name: "forgot-pwd",
    component: () => import("@/views/login/forgot-pwd"),
    meta: {
      title: "forgot-pwd",
      notRequireAuth: true,
      hidden: true
    }
  },
  {
    name: "error",
    component: Layout,
    children: [{
      name: "404",
      component: () => import("@/views/error/404"),
      meta: {
        title: "404"
      }
    }, {
      name: "401",
      component: () => import("@/views/error/401"),
      meta: {
        title: "401"
      }
    }],
    meta: {
      title: "error",
      notRequireAuth: true,
      hidden: true
    }
  },

  {
    path: "*",
    redirect: "/error/404",
    meta: {
      hidden: true,
      notRequireAuth: true
    }
  }
]

const asyncRoutesMap = [
  {
    name: "sell",
    component: Layout,
    redirect: "/sell/list",
    children: [{
      name: "list",
      component: () => import("@/views/login/register"),
      meta: {
        icon: "menu",
        title: "sell-order",
        type: 1,
        roles: ["readable"]
      }
    }, {
      name: "detail",
      component: () => import("@/views/login/register"),
      meta: {
        icon: "sell",
        title: "sell-detail",
        type: 1,
        roles: ["readable"]
      }
    }],
    meta: {
      icon: "menu",
      title: "sell-order",
      type: 1,
      roles: ["readable"]
    }
  },

  {
    path: "*",
    redirect: "/404",
    meta: {
      hidden: true,
      notRequireAuth: true
    }
  }
]

deepPath(asyncRoutesMap)

deepPath(constantRoutesMap)

export {
  constantRoutesMap,
  asyncRoutesMap
}

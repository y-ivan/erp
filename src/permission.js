
import router from "@/route"
import store from "@/store"

import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  const title = to.meta && to.meta.title
  // start progress bar
  NProgress.start()

  if (title) {
    document.title = title
  }
  // 跳转检测 用户登录 权限
  if (to.matched.some(res => !(res.meta && res.meta.notRequireAuth))) {
    // 如果是 需要登录的 判断是否有登录权限
    const token = store.state.token
    const uid = store.getters["user/uid"]

    if (uid && token) {
      next()
    } else if (token) {
      await store.dispatch("user/getInfo")

      next()
    } else router.replace("/login")
  } else next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

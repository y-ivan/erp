
import instance from "./instance"

/** 用户退出接口 */
function logout (opts) {
  return instance({
    method: "post",
    url: "/logout",
    opts: opts
  })
}

/** 用户登录 */
function login (opts) {
  return instance({
    method: "post",
    url: "/login",
    opts: opts
  })
}

export {
  logout,
  login
}

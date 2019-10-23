
import instance from "./instance"
import { convertRESTAPI } from "../util"

/** 更新用户信息 */
function updateInfo (opts) {
  return instance({
    method: "patch",
    url: convertRESTAPI("/info/:id", opts),
    opts: opts
  })
}

/** 获取用户信息 */
function getInfo (opts) {
  return instance({
    method: "get",
    url: convertRESTAPI("/info/:id", opts),
    opts: opts
  })
}

export {
  updateInfo,
  getInfo
}

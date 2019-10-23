
/**
 * 配置编译环境和线上环境之间的切换
 *
 * origin: api 地址
 * originPath: ""  api公共路径
 * dicUrl : 字典服务器地址
 * staticPath: 图片等静态资源所在域名地址
 */

let origin = ""

const originPath = ""

const staticPath = ""

const env = process.env.NODE_ENV

// const mock = " http://0.0.0.0:7300/"

// const mocks = [{
//   id: "5dad97f556f2f117f0197dec",
//   name: "login"
// }]

if (env === "development") {
  origin = "http://mock.morechips.cn"
} else if (env === "production") {
  origin = "http://test.morechips.cn/"
} else if (env === "test") {
  origin = ""
}

module.exports = {
  // mock,
  // mocks,
  origin,
  originPath,
  staticPath,
  env
}

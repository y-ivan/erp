import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

const modulesFiles = require.context("./modules", true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const state = {
  // 网络状态默认良好
  network: true,
  // 用户token
  token: false,
  // token 有效时间
  lifeTime: "",
  keepMaxLength: 10,
  keeped: true,
  // websocket 实例  需要发送的地方都可以使用
  ws: null,
  // 保存的历史路由名称
  keepAliveComponents: []
}

const getters = {
  // hasKeepedAlive (state) {
  //   return name => {
  //     const idx = state.indexOf(name)
  //     if (idx !== -1) return state.keepMaxLength - idx
  //     return false
  //   }
  // }
}

const mutations = {
  changeNetwork (state, bool) {
    state.network = bool
  },

  updateToken (state, token) {
    state.token = token
  }
}

const actions = {

}

export default new Vuex.Store({
  modules,
  state,

  getters,

  mutations,

  actions,

  strict: false,
  plugins: debug ? [ createLogger() ] : []
})

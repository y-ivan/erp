import "normalize.css"
import "element-ui/lib/theme-chalk/index.css"
import "@/assets/styles/index.scss"

import Vue from "vue"
import ElementUI from "element-ui"
import Cookies from "js-cookie"

import i18n from "@/lang"
import router from "@/route"
import store from "@/store"
import App from "@/App.vue"

import "@/assets/icons"
import "@/utils/error-log"
import colors from "@/config/colors"
import "@/permission"

import { staticPath } from "@/config"

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$staticPath = staticPath
Vue.prototype.$colors = colors

let token = Cookies.get("token")

token && store.commit("updateToken", token)

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount("#app")

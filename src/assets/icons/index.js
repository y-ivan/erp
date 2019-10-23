
import Vue from "vue"
import IconSvg from "@/components/icon-svg"// svg component

// register globally
Vue.component(IconSvg.name, IconSvg)

const req = require.context("./svg", false, /\.svg$/)

const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)

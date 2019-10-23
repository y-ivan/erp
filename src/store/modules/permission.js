
import { asyncRoutesMap, constantRoutesMap } from "@/route/routesMap"

const hasPermission = (route, roles) => {
  if (route.meta && route.meta.notRequireAuth) return true

  if (route.meta && route.meta.roles && route.meta.type) {
    let currentRole = roles[route.meta.type]
    if (!currentRole) return false

    let hasValid = route.meta.roles.every(permission => currentRole[permission] === 1)

    return hasValid

    // let currentRole = roles.find(role => role.type === route.meta.type)
    // if (!currentRole) return false
    // return currentRole.roles && currentRole.roles.readable
  } else {
    return false
  }
}

export const filterAsyncRoutes = (routes, roles) => {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }

    if (hasPermission(tmp, roles)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  setRoutes: (state, routes) => {
    state.addRoutes = [].concat(routes)
    state.routes = constantRoutesMap.concat(routes)
  }
}

const actions = {
  generateRoutes ({ commit }, { roles, admin }) {
    return new Promise(resolve => {
      let accessedRoutes = []

      if (admin) accessedRoutes = asyncRoutesMap || []
      else accessedRoutes = filterAsyncRoutes(asyncRoutesMap, roles)

      commit("setRoutes", accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

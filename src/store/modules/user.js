
import { getInfo } from "@/api/user"
import { resetRouter, addRouter } from "@/route"

const state = {
  info: {}
}

const getters = {
  uid: state => state.info.id,
  roles: state => state.info.roles || []
}

const actions = {
  getInfo: async ({ commit }) => {
    let res = await getInfo({
      path: {
        id: undefined
      }
    })

    if (res.status === 1) {
      const data = res.data
      commit("setInfo", data)

      // 重置 router
      resetRouter()

      addRouter({
        roles: data.roles || [],
        admin: data.is_admin === 1
      })
    }

    return res
  }
}

const mutations = {
  setInfo (state, payload) {
    state.info = payload
  },

  updateInfo (state, payload) {
    let info = Object.assign({}, state.info, payload)

    state.info = info
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

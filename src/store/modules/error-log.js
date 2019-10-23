
const state = {
  log: []
}

const mutations = {
  addErrorLog (state, payload) {
    state.log.push(payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

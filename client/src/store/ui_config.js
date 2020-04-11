const state = {
  condensed: false
}

const actions = {

}

const mutations = {
  toggleCondense(state) {
    state.condensed = !state.condensed
  }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}
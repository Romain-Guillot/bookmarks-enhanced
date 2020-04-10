import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmarks: [{title: "Fake"}, {title: "Fake 2"}],
    tags: []
  },

  actions: {
    addBookmark () {

    }
  },

  mutations: {

  }
})
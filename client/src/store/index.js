import Vuex from 'vuex'
import Vue from 'vue'
import bookmarksAPI from '../api/bookmarks'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmarks: [],
    tags: []
  },

  actions: {
    async getAllBookmarks () {
      const res = await bookmarksAPI.getBookmarks()
      this.commit('setBookmarks', res.bookmarks)
      this.commit('setTags', res.tags)
    },
    async addBookmark () {

    }
  },

  mutations: {
    setBookmarks (state, bookmarks) {
      state.bookmarks = bookmarks
    },
    setTags (state, tags) {
      state.tags = tags
    }
  }
})
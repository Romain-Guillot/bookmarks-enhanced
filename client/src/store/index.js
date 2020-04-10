import Vuex from 'vuex'
import Vue from 'vue'
import bookmarksAPI from '../api/bookmarks-api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmarks: [],
    tags: []
  },

  actions: {
    async getAllBookmarks ({ commit }) {
      const res = await bookmarksAPI.getBookmarks()
      commit('setBookmarks', res.bookmarks)
      commit('setTags', res.tags)
    },
    async addBookmark ({ commit }, bookmark) {
      console.log('addd')
      await bookmarksAPI.addBookmark({ bookmark: {
        title: bookmark.title,
        url: bookmark.link,
        tags: bookmark.tags
      }})
      commit('addBookmark', bookmark)
    }
  },

  mutations: {
    addBookmark(state, bookmark) {
      state.bookmarks.push(bookmark)
    },
    setBookmarks (state, bookmarks) {
      state.bookmarks = bookmarks
    },
    setTags (state, tags) {
      state.tags = tags
    }
  }
})
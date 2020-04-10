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
      const res = await bookmarksAPI.addBookmark({ bookmark: {
        title: bookmark.title,
        url: bookmark.link,
        tags: bookmark.tags
      }})
      commit('addBookmark', res.data)
    },
    async removeBookmark({ commit }, bookmark) {
      const res = await bookmarksAPI.deleteBookmark({ bookmark })
      if (res.error) {
        console.log(res.error)
      } else {
        commit('removeBookmark', res.id)
      }
    }
  },

  mutations: {
    removeBookmark(state, bookmarkID) {
      const index = state.bookmarks.findIndex(b => b.id === bookmarkID)
      console.log(index)
      state.bookmarks.splice(index, 1)
      console.log(state.bookmarks)
    },
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
import bookmarksAPI from '../api/bookmarks-api'


const state = {
  bookmarks: [],
  tags: []
}

const actions = {
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
}

const mutations = {
  removeBookmark(state, bookmarkID) {
    const index = state.bookmarks.findIndex(b => b.id === bookmarkID)
    state.bookmarks.splice(index, 1)
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

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

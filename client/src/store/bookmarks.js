import bookmarksAPI from '../api/bookmarks-api'


const state = {
  bookmarks: [],
  tags: []
}

const actions = {
  async getAllBookmarks ({ commit }) {
    const res = (await bookmarksAPI.getBookmarks())
    if (res != null) {
      commit('setTags', res.tags)
      commit('setBookmarks', res.bookmarks)
    }
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
  },
  async editBookmark({ commit }, data) {
    const res = await bookmarksAPI.updateBookmark({
      bookmark: data
    })
    if (res.error) {
      console.log(res.error)
    } else {
      commit('updateBookmark', res.data)
    }
  },
  async addTag ({ commit }, tag) {
    const res = await bookmarksAPI.addTag({ tag })
    commit('addTag', res.data)
  }
}



const mutations = {
  removeBookmark (state, bookmarkID) {
    const index = state.bookmarks.findIndex(b => b.id === bookmarkID)
    state.bookmarks.splice(index, 1)
  },
  addBookmark (state, bookmark) {
    state.bookmarks.push(bookmark)
  },
  setBookmarks (state, bookmarks) {
    state.bookmarks = bookmarks
  },
  updateBookmark (state, bookmark) {
    const index = state.bookmarks.findIndex(b => b.id === bookmark.id)
    state.bookmarks[index] = bookmark
  },
  setTags (state, tags) {
    state.tags = tags
  },
  addTag (state, tag) {
    state.tags[tag.id] = tag
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

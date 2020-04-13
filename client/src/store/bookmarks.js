import bookmarksAPI from '../api/bookmarks-api'


const state = {
  bookmarks: [],
  tags: []
}

const actions = {
  async getAllBookmarks ({ commit }) {
    const res = (await bookmarksAPI.getBookmarks())

    commit('setTags', res.tags)
    const bookmarks = res.bookmarks.map(b => preprocessBookmark(b))
    console.log(bookmarks)
    commit('setBookmarks', bookmarks)

  },
  async addBookmark ({ commit }, bookmark) {
    const res = await bookmarksAPI.addBookmark({ bookmark: {
      title: bookmark.title,
      url: bookmark.link,
      tags: bookmark.tags
    }})
    commit('addBookmark', preprocessBookmark(res.data))
  },
  async removeBookmark({ commit }, bookmark) {
    const res = await bookmarksAPI.deleteBookmark({ bookmark })
    if (res.error) {
      console.log(res.error)
    } else {
      commit('removeBookmark', res.id)
    }
  },
  async addTag ({ commit }, tag) {
    await bookmarksAPI.addTag({ tag })
    commit('addTag', tag)
  }
}

function preprocessBookmark(data) {
  let bookmarkTags = []
  if (data.tags != null)
    bookmarkTags = data.tags.reduce((acc, tagID) => {
      const tag = state.tags[tagID]
      if (tag != null)
        acc.push(tag)
      return acc
    }, [])
  const dateFormatOpts = { year: 'numeric', month: 'short', day: 'numeric' }
  let date = ''
  if (data.createdAt)
    date = (new Date(data.createdAt)).toLocaleDateString(undefined, dateFormatOpts)
  return {
    id: data.id,
    url: data.url,
    title: data.title,
    createdAt: date,
    tags: bookmarkTags
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
  },
  addTag (state, tag) {
    state.tags.push(tag)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

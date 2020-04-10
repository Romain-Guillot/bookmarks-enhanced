import axios from 'axios'

export default {
  async getBookmarks () {
    const res = await axios.get('/bookmarks/')
    const tags = res.data.tags.reduce(function(map, obj) {
      map[obj.key] = obj;
      return map;
    }, {})
    const bookmarks = res.bookmarks.map((data) => {
      data.tags = data.tags.map(tagID => tags[tagID])
      return data
    })
    return {
      bookmarks: bookmarks,
      tags: tags
    }
  },

  addBookmark ({ data }) {
    const res = await axios.post('/bookmarks/', data)
    console.log(res)
  },

  deleteBookmark () {

  },

  updateBookmark () {

  }
}
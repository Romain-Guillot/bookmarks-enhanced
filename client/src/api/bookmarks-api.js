import axios from 'axios'

export default {
  async getBookmarks () {
    console.log("API: get bookmarks")
    const res = await axios.get('/bookmarks/')
    const tags = res.data.tags.reduce(function(map, obj) {
      obj.color = intToRgb(obj.color)
      map[obj.id] = obj
      return map
    }, {})
    return {
      bookmarks: res.data.bookmarks,
      tags: tags
    }
  },

  async addBookmark ({ bookmark }) {
    const data = {
      title: bookmark.title,
      url: bookmark.url,
      tags: bookmark.tags.map(tag => tag.id)
    }
    const res = await axios.post('/bookmarks/', data)
    return { data: res.data }
  },

  async deleteBookmark ({ bookmark }) {
    const res = await axios.delete('/bookmarks/', {data: {id: bookmark.id}})
    if (res.status === 200) {
      return {
        id: res.data.id
      }
    } else {
      return {
        error: "Cannot remove this bookmark"
      }
    }
  },

  async updateBookmark () {

  }
}


function intToRgb(int) {
  if (int == null)
    return {r: 0, g: 0, b: 0}
  const hex = int.toString(16)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
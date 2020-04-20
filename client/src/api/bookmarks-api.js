import axios from 'axios'


export default {
  /**
   * If success -> {bookmarks, tags}
   * If error   -> null
   */
  async getBookmarks () {
    const res = await axios.get('/bookmarks/')
    if (res.status != 200) {
      return null
    }
    const tags = res.data.tags.reduce((map, obj) => {
      obj.color = intToRgb(obj.color)
      map[obj.id] = obj
      return map
    }, {})
    const bookmarks = res.data.bookmarks.map((b) => preprocessBookmark(b, tags))
    return {
      bookmarks: bookmarks,
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

  async updateBookmark ({ bookmark }) {
    bookmark.tags = bookmark.tags.map(t => t.id)
    const res = await axios.put('/bookmarks/', bookmark)
    return {data: res.data}
  },

  async addTag({ tag }) {
    const res = await axios.post('/tags/', tag)
    res.data.color = intToRgb(res.data.color)
    return { data: res.data }
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


function preprocessBookmark(data, tags) {
  let bookmarkTags = []
  if (data.tags != null)
    bookmarkTags = data.tags.reduce((acc, tagID) => {
      const tag = tags[tagID]
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
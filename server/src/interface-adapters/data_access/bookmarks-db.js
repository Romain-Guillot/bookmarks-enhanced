import { BookmarkModel } from './models.js'


export default {
  async find() {
    const res = await BookmarkModel.find();
    return res.map(bookmark => {
      return {
        id: bookmark.id,
        title: bookmark.title,
        url: bookmark.url,
        createdAt: bookmark.createdAt,
        tags: bookmark.tags.map((t) => t)
      }
    })
  },

  async insert({ data }) {
    const bookmark = new BookmarkModel({
      title: data.title,
      url: data.url,
      createdAt: data.createdAt,
      tags: data.tags
    })
    const res = await bookmark.save()
    return {
      id: res._id,
      ...data
    }
  },

  async update({ data }) {
    const id = data.id
    delete data.id
    const res = await BookmarkModel.updateOne({ _id: id }, data)
    return {
      id: id,
      ...data
    }
  },

  async remove({ id }) {
    const res = await BookmarkModel.deleteOne({ _id : id})
    if (res.deletedCount) {
      return {
        deletedCount: res.deletedCount,
        id: id
      }
    } else {
      return {
        error: "Cannot delete this bookmark"
      }
    }
  }
}



/**
 * 
 */
class BookmarksDatabase {
  constructor({ makeDb, makeId }) {
    this.makeDb = makeDb
    this.makeId = makeId
    this.collectionName = 'bookmarks'
  }

  async find() {
    const db = await this.makeDb()
    const data = await db.collection(this.collectionName).find({}).toArray()
    return data.map(bookmarkData => Object.freeze({
      id: bookmarkData._id,
      title: bookmarkData.title,
      url: bookmarkData.url,
      createdAt: bookmarkData.createdAt,
      tags: bookmarkData.tags
    }))
  }

  async insert({ data }) {
    const db = await this.makeDb()
    const insertResult = await db.collection(this.collectionName).insertOne({
      title: data.title,
      url: data.url,
      tags: data.tags,
      createdAt: data.createdAt
    })
    return {
      id: insertResult.insertedId,
      ...data
    }
  }

  async remove({ id }) {
    const db = await this.makeDb()
    const removeResult = await db.collection(this.collectionName).removeOne({
      _id: this.makeId(id)
    })
    if (removeResult.deletedCount) {
      return {
        deletedCount: removeResult.deletedCount,
        id: id
      }
    } else {
      return {
        error: "Cannot delete this bookmark"
      }
    }
  }
}


export default BookmarksDatabase
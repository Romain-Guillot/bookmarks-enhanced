/**
 * 
 */
class BookmarksDatabase {
  constructor({ makeDb }) {
    this.makeDb = makeDb
    this.collectionName = 'bookmarks'
  }

  async findAll() {
    const db = await this.makeDb()
    const data = await db.collection(this.collectionName).find({}).toArray()
    return data.map(bookmarkData => Object.freeze({
      id: bookmarkData._id,
      title: bookmarkData.title,
      url: bookmarkData.url,
      date: bookmarkData.createdAt,
      tags: bookmarkData.tags
    }))
  }

  async insert({ bookmarkData }) {
    const db = await this.makeDb()
    const insertResult = await db.collection(this.collectionName).insertOne({
      title: bookmarkData.title,
      url: bookmarkData.url,
      tags: bookmarkData.tags,
      createAt: bookmarkData.createAt
    })
    return {
      id: insertResult.insertedId,
      ...bookmarkData
    }
  }
}


export default BookmarksDatabase
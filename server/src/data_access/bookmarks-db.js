/**
 * 
 */
class BookmarksDatabase {
  constructor({ makeDb }) {
    this.makeDb = makeDb
  }

  async findAll() {
    const db = await this.makeDb()
    const data = await db.collection('bookmarks').find({}).toArray()
    return data.map(bookmarkData => Object.freeze({
      id: bookmarkData._id,
      title: bookmarkData.title,
      url: bookmarkData.url,
      date: bookmarkData.createdAt,
      tags: bookmarkData.tags
    }))
  }
}


export default BookmarksDatabase
/**
 * 
 */
class BookmarksDatabase {
  constructor({ makeDb, makeId }) {
    this.makeDb = makeDb
    this.makeId = makeId
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

  async insert({ data }) {
    const db = await this.makeDb()
    const insertResult = await db.collection(this.collectionName).insertOne({
      title: data.title,
      url: data.url,
      tags: data.tags,
      createAt: data.createAt
    })
    return {
      id: insertResult.insertedId,
      ...bookmarkData
    }
  }

  async remove({ id }) {
    const db = await this.makeDb()
    const removeResult = await db.collection(this.collectionName).removeOne({
      _id: this.makeId(id)
    })
    console.log(removeResult)
    return {
      fakeData: "TBD"
    }
  }
}


export default BookmarksDatabase
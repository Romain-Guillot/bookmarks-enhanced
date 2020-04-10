import mongodb from 'mongodb'

import BookmarksDatabase from './bookmarks-db.js'


const url = 'mongodb://127.0.0.1:27017'

const MongoClient = mongodb.MongoClient
const client = new MongoClient(url, { useNewUrlParser: true })

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db('bookmarks-enhanced')
}

export function makeId(id) {
  return new mongodb.ObjectID(id)
}

export const bookmarksDatabase = new BookmarksDatabase({
  makeDb: makeDb,
  makeId: makeId
})





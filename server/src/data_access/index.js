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

export const bookmarksDatabase = new BookmarksDatabase({
  makeDb: makeDb
})





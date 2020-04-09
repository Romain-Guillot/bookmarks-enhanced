import { makeListBookmarks } from './list_bookmarks.js'

import { bookmarksDatabase } from '../data_access/index.js'


export const listBookmarks = makeListBookmarks({
  bookmarksDB: bookmarksDatabase
})
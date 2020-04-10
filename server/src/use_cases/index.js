import makeListBookmarks from './list_bookmarks.js'
import makeAddBookmark from './add_bookmark.js'

import { bookmarksDatabase } from '../data_access/index.js'


export const listBookmarks = makeListBookmarks({
  bookmarksDB: bookmarksDatabase
})

export const addBookmark = makeAddBookmark({
  bookmarksDB: bookmarksDatabase
})
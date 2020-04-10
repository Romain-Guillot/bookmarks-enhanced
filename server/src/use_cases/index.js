import makeListBookmarks from './list_bookmarks.js'
import makeAddBookmark from './add_bookmark.js'
import makeRemoveBookmark from './remove_bookmark.js'
import makeAddTag from './add_tag.js'
import { bookmarksDatabase, tagsDatabase } from '../data_access/index.js'


export const listBookmarks = makeListBookmarks({
  bookmarksDB: bookmarksDatabase,
  tagsDB: tagsDatabase
})

export const addBookmark = makeAddBookmark({
  bookmarksDB: bookmarksDatabase
})

export const removeBookmark = makeRemoveBookmark({
  bookmarksDB: bookmarksDatabase,
})

export const addTag = makeAddTag({
  tagsDB: tagsDatabase
})
import makeGetBookmarks from './get_bookmarks.js' 
import makePostBookmarks from './post_bookmark.js'
import makeDeleteBookmark from './delete_bookmark.js'
import makePostTag from './post_tag.js'
import { 
  listBookmarks,
  addBookmark,
  removeBookmark,
  addTag
} from '../../use_cases/index.js'


export const getBookmarks = makeGetBookmarks({
  listBookmarks: listBookmarks
})

export const postBookmark = makePostBookmarks({
  addBookmark: addBookmark
})

export const deleteBookmark = makeDeleteBookmark({
  removeBookmark: removeBookmark
})

export const postTag = makePostTag({
  addTag: addTag
})
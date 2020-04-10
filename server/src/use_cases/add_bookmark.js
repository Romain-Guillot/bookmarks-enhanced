import Bookmark from '../entities/bookmark.js'

export default function makeAddBookmark({ bookmarksDB }) {
  return async ({ bookmarkData }) => {
    const bookmark = new Bookmark({ // create the bookmark to validate fields, pre-processings, etc.
      title: bookmarkData.title,
      url: bookmarkData.url,
      tags: bookmarkData.tags
    })
    return await bookmarksDB.insert({
      bookmarkData : {
        title: bookmark.title,
        url: bookmark.url,
        tags: bookmark.tags,
        createdAt: bookmark.createdAt
      }
    })
  }
}
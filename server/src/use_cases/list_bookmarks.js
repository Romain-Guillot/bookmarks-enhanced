import Bookmark from "../entities/bookmark.js";
import Tag  from "../entities/tag.js";


export function makeListBookmarks({ bookmarksDB }) {
  return async function listComment({ userID }) {
    console.log("USE CASE : Looking for bookmarks of the user " + userID)
    const bookmarksData = await bookmarksDB.findAll();
    const bookmarks = bookmarksData.map(bookmarkData => {
      const tags = []
      return new Bookmark({
        id: bookmarkData.id,
        title: bookmarkData.title,
        url: bookmarkData.url,
        tags: tags
      })
    });
    return bookmarks;
  }
}
import Bookmark from "../entities/bookmark.js";
import Tag  from "../entities/tag.js";


export default function makeListBookmarks({ bookmarksDB }) {
  return async function listComment({ userID }) {
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
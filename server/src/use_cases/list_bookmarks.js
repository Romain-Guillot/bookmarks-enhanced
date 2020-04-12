import Bookmark from "../entities/bookmark.js";
import Tag  from "../entities/tag.js";


export default function makeListBookmarks({ bookmarksDB, tagsDB }) {
  return async function listComment({ userID }) {
    const bookmarksData = await bookmarksDB.find();
    const bookmarks = bookmarksData.map(bookmarkData => { return {
      id: bookmarkData.id,
      title: bookmarkData.title,
      url: bookmarkData.url,
      tags: bookmarkData.tags,
      createdAt: bookmarkData.createdAt
    }});
    return bookmarks;
  }
}
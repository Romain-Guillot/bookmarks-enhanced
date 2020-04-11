import Bookmark from "../entities/bookmark.js";
import Tag  from "../entities/tag.js";


export default function makeListBookmarks({ bookmarksDB, tagsDB }) {
  return async function listComment({ userID }) {
    const bookmarksData = await bookmarksDB.find();
    const tagsData = await tagsDB.find();
    const bookmarks = bookmarksData.map(bookmarkData => { return {
      id: bookmarkData.id,
      title: bookmarkData.title,
      url: bookmarkData.url,
      tags: bookmarkData.tags,
      createdAt: bookmarkData.createdAt
    }});
    const tags = tagsData.map(tagsData => { return {
      id: tagsData.id,
      name: tagsData.name,
      color: tagsData.color,
    }})
    return {
      bookmarks: bookmarks,
      tags: tags
    };
  }
}
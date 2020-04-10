import Bookmark from "../entities/bookmark.js";
import Tag  from "../entities/tag.js";


export default function makeListBookmarks({ bookmarksDB }) {
  return async function listComment({ userID }) {
    const bookmarksData = await bookmarksDB.find();
    const tagsData = await bookmarksDB.find();
    const bookmarks = bookmarksData.map(bookmarkData => { return {
      id: bookmarkData.id,
      title: bookmarkData.title,
      url: bookmarkData.url,
      tags: bookmarksData.tags
    }});
    const tags = tagsData.map(tagsData => { return {
      id: tagsData.id,
      name: tagsData.name,
      tags: tagsData.tags,
    }})
    return {
      bookmarks: bookmarks,
      tags: tags
    };
  }
}
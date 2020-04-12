import Bookmark from "../entities/bookmark.js";
import Tag  from "../entities/tag.js";
import tagsDb from "../interface-adapters/data_access/tags-db.js";


export default function makeListBookmarks({ bookmarksDB, tagsDB }) {
  return async function listComment() {
    const bookmarks = await bookmarksDB.find();
    const tags = await tagsDb.find()
    return {
      bookmarks: bookmarks,
      tags: tags
    };
  }
}
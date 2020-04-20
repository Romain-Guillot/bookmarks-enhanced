export default function makeListBookmarks({ bookmarksDB, tagsDB }) {
  /**
   * If success -> list of bookmarks and tags
   * If error   -> null
   */
  return async function listComment() {
    try {
      const bookmarks = await bookmarksDB.find();
      const tags = await tagsDB.find()
      return {
        bookmarks: bookmarks,
        tags: tags
      };
    } catch (err) {
      return null
    }
  }
}
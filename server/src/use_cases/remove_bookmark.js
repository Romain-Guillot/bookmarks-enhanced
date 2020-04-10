export default function makeRemoveBookmark({ bookmarksDB }) {
  return async ({ bookmarkID }) => {
    await bookmarksDB.remove({
      id: bookmarkID
    })
    return {}
  }
}
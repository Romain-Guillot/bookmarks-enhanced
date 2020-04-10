export default function makeRemoveBookmark({ bookmarksDB }) {
  return async ({ bookmarkID }) => {
    const res = await bookmarksDB.remove({
      id: bookmarkID
    })
    return res
  }
}
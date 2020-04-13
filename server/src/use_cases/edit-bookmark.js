export default function makeEditBookmark({ bookmarksDB }) {
  return async ({ bookmarkData }) => {

    const res = await bookmarksDB.update({ data: bookmarkData })
    return res
  }
}
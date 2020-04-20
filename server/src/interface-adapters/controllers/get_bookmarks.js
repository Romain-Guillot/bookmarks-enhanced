export default function makeGetBookmarks({ listBookmarks }) {
  return async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const data = await listBookmarks()
    return {
      headers,
      statusCode: data == null ? 500 : 200,
      body: data == null ? "Cannot return the bookmarks and tags" : data
    }
  }
}

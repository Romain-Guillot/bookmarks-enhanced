export default function makeGetBookmarks({ listBookmarks }) {
  return async () => {
    console.log("CONTROLLER: get bookmarks")
    const headers = {
      'Content-Type': 'application/json'
    }
    const bookmarks = await listBookmarks()
    return {
      headers,
      statusCode: 200,
      body: bookmarks,
    }
  }
}

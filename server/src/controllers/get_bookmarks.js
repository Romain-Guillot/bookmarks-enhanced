export function makeGetBookmarks({ listBookmarks }) {
  return async () => {
    console.log("CONTROLLER : Make bookmarks")
    const headers = {
      'Content-Type': 'application/json'
    }
    const bookmarks = await listBookmarks({
      userID: "id"
    })
    return {
      headers,
      statusCode: 200,
      body: bookmarks,
    }
  }
}

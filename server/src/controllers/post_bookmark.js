export default function makePostBookmark({ addBookmark }) {
  return async (httpRequest) => {
    console.log("CONTROLLER: Add bookmarks")
    const headers = {
      'Content-Type': 'application/json'
    }
    const addedBookmark = await addBookmark({
      bookmarkData: httpRequest.body
    })
    return {
      headers,
      statusCode: 200,
      body: addedBookmark,
    }
  }
}
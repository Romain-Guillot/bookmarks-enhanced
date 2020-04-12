export default function makePostBookmark({ addBookmark }) {
  return async (httpRequest) => {
    console.log("CONTROLLER: post bookmark")
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
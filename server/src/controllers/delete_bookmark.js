export default function makeDeleteBookmark({ removeBookmark }) {
  return async (httpRequest) => {
    console.log("CONTROLLER: Remove bookmark")
    const headers = {
      'Content-Type': 'application/json'
    }
    const bookmarkID = httpRequest.body.id;
    const deletedComment = await removeBookmark({
      bookmarkID: bookmarkID
    })
    return {
      headers,
      statusCode: 200,
      body: deletedComment
    }
  }
}
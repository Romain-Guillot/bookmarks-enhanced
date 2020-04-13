export default function makeUpdateBookmark({ editBookmark }) {
  return async (httpRequest) => {
    console.log("CONTROLLER: Update bookmark")
    const headers = {
      'Content-Type': 'application/json'
    }
    // const bookmarkID = httpRequest.body.id;
    const updatedBookmark = await editBookmark({
      bookmarkData: httpRequest.body 
    })
    return {
      headers,
      statusCode: 200,
      body: updatedBookmark
    }
  }
}
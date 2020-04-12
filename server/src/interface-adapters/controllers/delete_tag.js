export default function makeDeleteTag({ removeTag }) {
  return async (httpRequest) => {
    console.log("CONTROLLER: Remove tag")
    const headers = {
      'Content-Type': 'application/json'
    }
    const tagID = httpRequest.body.id;
    const deletedTag = await removeTag({
      tagID: tagID
    })
    return {
      headers,
      statusCode: 200,
      body: deletedTag
    }
  }
}
export default function makePostTag({ addTag }) {
  return async (httpRequest) => {
    console.log("CONTROLLER: post tag")
    const headers = {
      'Content-Type': 'application/json'
    }
    const data = httpRequest.body
    const res = await addTag({ tagData: data })
    return {
      headers,
      statusCode: 200,
      body: res,
    }
  }
}
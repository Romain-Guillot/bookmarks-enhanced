export default function makeRemoveTag({ tagsDB }) {
  return async ({ tagID }) => {
    const res = await tagsDB.remove({
      id: tagID
    })
    return res
  }
}
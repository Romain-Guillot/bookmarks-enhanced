import Tag from "../entities/tag.js"

export default function makeAddTag({ tagsDB }) {
  return async ({ tagData }) => {
    const tag = new Tag({ // performs checking, preprocess
      name: tagData.name,
      color: tagData.color,
    })
    const insertedTag = await tagsDB.insert({ data: {
      name: tag.name,
      color: tag.color
    }})
    return insertedTag
  }
}
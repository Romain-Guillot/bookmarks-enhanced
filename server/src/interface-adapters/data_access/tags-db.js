class TagsDatabase {
  constructor() {
    this.collectionName = "tags"
  }

  async find() {
    // const db = await this.makeDb()
    // const data = await db.collection(this.collectionName).find({}).toArray()
    // return data.map(tagData => Object.freeze({
    //   id: tagData._id,
    //   name: tagData.name,
    //   color: tagData.color,
    // }))
    return {}
  }

  async insert({ data }) {
    const db = await this.makeDb()
    const insertResult = await db.collection(this.collectionName).insertOne({
      name: data.name,
      color: data.color,
    })
    return {
      id: insertResult.insertedId,
      ...data
    }
  }

  async update({ data }) {

  }

  async remove({ id }) {
    const db = await this.makeDb()
    const removeResult = await db.collection(this.collectionName).removeOne({
      _id: this.makeId(id)
    })
    if (removeResult.deletedCount) {
      return {id: id}
    } else {
      return {error: "The tag doesn't exists"}
    }
  }
}

export default TagsDatabase
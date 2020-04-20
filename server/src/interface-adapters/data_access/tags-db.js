import { TagModel } from './models.js'


export default {
  /**
   * If success -> return an array of object
   * If error   -> Throw an exception
   */
  async find() {
    const res = await TagModel.find()
    return res.map(tag => {
      return {
        id: tag.id,
        name: tag.name,
        color: tag.color
      }
    })
  },

  async insert({ data }) {
    const tag = new TagModel({
      name: data.name,
      color: data.color
    })
    const res = await tag.save()
    return {
      id: res._id,
      ...data
    }
  },

  async remove({ id }) {
    const res = await TagModel.deleteOne({ _id : id})
    if (res.deletedCount) {
      return {
        deletedCount: res.deletedCount,
        id: id
      }
    } else {
      return {
        error: "Cannot delete this tag"
      }
    }
  }
}


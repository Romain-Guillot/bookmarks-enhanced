import mongoose from 'mongoose'


const tagSchema = new mongoose.Schema({
  name: String,
  color: Number
})

const bookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
  createdAt: Date,
  tags: [String]
}) 

const BookmarkModel = mongoose.model('Bookmark', bookmarkSchema, 'bookmarks')
const TagModel = mongoose.model('Tag', tagSchema, 'tags')

export {
  BookmarkModel,
  TagModel
}
import express from 'express'
import router from './routes.js'
import mongoose from 'mongoose'

import { BookmarkModel } from './interface-adapters/data_access/models.js'

const app = express()
const corsConfig = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,DELETE,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
}
app.use(corsConfig);
app.use(express.json())
app.use("/", router)


const url = 'mongodb://127.0.0.1:27017/bookmarks-enhanced'

mongoose.connect(url, {useNewUrlParser: true}).then(() => {
  const t = new BookmarkModel({title: "ok"})
  t.save((err) => {console.log(err)})
  console.log("Connected to mongo db")
  app.listen(3000, () => console.log('Server ready'))
})




process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

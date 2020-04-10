import express from 'express'
import { getBookmarks, postBookmark } from './controllers/index.js'

const app = express()

const corsConfig = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
}
app.use(corsConfig);
app.use(express.json())

app.listen(3000, () => console.log('Server ready'))

app.get('/bookmarks/', (req, res) => {
  getBookmarks().then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})

app.post('/bookmarks/', (req, res) => {
  console.log(req.body)
  postBookmark(req).then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})


process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

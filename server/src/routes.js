import express from 'express'
import { 
  getBookmarks, 
  postBookmark,
  deleteBookmark,
  postTag,
  deleteTag
} from './interface-adapters/controllers/index.js'


var router = express.Router()

router.get('/bookmarks/', (req, res) => {
  getBookmarks().then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})

router.post('/bookmarks/', (req, res) => {
  postBookmark(req).then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})

router.delete('/bookmarks/', (req, res) => {
  deleteBookmark(req).then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})

router.post('/tags/', (req, res) => {
  postTag(req).then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})

router.delete('/tags/', (req, res) => {
  deleteTag(req).then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})


export default router
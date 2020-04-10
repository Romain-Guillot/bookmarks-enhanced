import { 
  getBookmarks, 
  postBookmark,
  deleteBookmark,
  postTag
} from './controllers/index.js'

export default function makeRoutes({ app }) {
  app.get('/bookmarks/', (req, res) => {
    getBookmarks().then((httpResponse) => {
      res.type('json')
      res.status(httpResponse.statusCode)
      res.send(httpResponse.body)
    })
  })
  
  app.post('/bookmarks/', (req, res) => {
    postBookmark(req).then((httpResponse) => {
      res.type('json')
      res.status(httpResponse.statusCode)
      res.send(httpResponse.body)
    })
  })
  
  app.delete('/bookmarks/', (req, res) => {
    deleteBookmark(req).then((httpResponse) => {
      res.type('json')
      res.status(httpResponse.statusCode)
      res.send(httpResponse.body)
    })
  })

  app.post('/tags/', (req, res) => {
    postTag(req).then((httpResponse) => {
      res.type('json')
      res.status(httpResponse.statusCode)
      res.send(httpResponse.body)
    })
  })
}


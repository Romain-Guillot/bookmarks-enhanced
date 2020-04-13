import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { 
  getBookmarks, 
  postBookmark,
  deleteBookmark,
  postTag,
  deleteTag,
  updateBookmark
} from './interface-adapters/controllers/index.js'


const options = {
  customCss: '.swagger-ui .topbar { display: none }',
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Bookmarks Enhanced API Documention",
      version: "1.0.0",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
    },
    servers: [
      {
        url: "http://localhost:3000/"
      }
    ]
  },
  apis: ["./src/routes.js"]
};
const specs = swaggerJsdoc(options);

var router = express.Router()

router.use("/docs", swaggerUi.serve);

router.get(
  "/docs",
  swaggerUi.setup(specs, options)
);

/**
 * @swagger
* /bookmarks:
 *   get:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
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

router.put('/bookmarks/', (req, res) => {
  updateBookmark(req).then((httpResponse) => {
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
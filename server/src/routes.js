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
  customCss: '.swagger-ui .topbar { display: none } .swagger-ui .info { margin: 15px 0 }',
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Bookmarks Enhanced API Documention",
      version: "1.0.0",
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
 * 
 * components:
 *   schemas:
 *     Bookmark:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         url:
 *           type: string
 *         createdAt:
 *           type: string
 *     Tag:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         color:
 *           type: integer
 */


/**
 * @swagger
 * 
 * /bookmarks:
 *   get:
 *     summary: Get the list of bookmarks and tags
 *     responses:
 *       '200':
 *         description: Returns the boorkmaks and tags
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bookmarks:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Bookmark'
 *                 tags:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Tag'
 *       '500':
 *          description: Cannot return the bookmarks and tags
 */
router.get('/bookmarks/', (req, res) => {
  getBookmarks().then((httpResponse) => {
    res.type('json')
    res.status(httpResponse.statusCode)
    res.send(httpResponse.body)
  })
})

/**
 * @swagger    
 */
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
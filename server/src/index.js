import express from 'express'
import makeRoutes from './routes.js'

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
app.listen(3000, () => console.log('Server ready'))

makeRoutes({
  app: app
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

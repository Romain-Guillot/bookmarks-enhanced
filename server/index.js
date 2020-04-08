const express = require('express')
const app = express()


const corsConfig = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
}

app.use(corsConfig);


class Tag {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class Bookmark {
  constructor(title, url, tags=[]) {
    this.title = title;
    this.url = url;
    this.tags = tags;
  }
}

const b1 = new Bookmark("Test", "www.example.com")
const b2 = new Bookmark("Other link", "www.example.com")


app.get('/bookmarks/', (req, res) => {
  res.send([b1, b2])
})


app.listen(3000, () => console.log('Server ready'))


process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

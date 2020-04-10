class Bookmark {
  constructor({ id, title, url, tags=[], createdAt=Date.now()}) {
    this.id = id,
    this.title = title;
    this.url = url;
    this.tags = tags;
    this.createdAt = createdAt
  }
}

export default Bookmark
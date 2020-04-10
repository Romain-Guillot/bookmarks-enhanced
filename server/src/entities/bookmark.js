class Bookmark {
  constructor({ id, title, url, tags=[], createdAt=Date.now()}) {
    this.id = id,
    this.title = title;
    this.url = this._formatURL(url);
    this.tags = tags;
    this.createdAt = createdAt
    
  }

  _formatURL(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
      url = "http://" + url
    }
    return url
  }
}

export default Bookmark
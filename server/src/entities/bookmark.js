class Bookmark {
  constructor({ id, title, url, tags=[] }) {
    this.id = id,
    this.title = title;
    this.url = url;
    this.tags = tags;
  }
}

export default Bookmark
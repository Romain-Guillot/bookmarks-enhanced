<template>
  <ul>
    <li v-for="boorkmark in bookmarks" v-bind:key="boorkmark.message">
      <BookmarkItem v-bind:bookmarkItem="boorkmark" />
    </li>
  </ul>
  
</template>


<script>
import axios from 'axios'
import BookmarkItem from './BookmarkItem'

export default {
  name: 'BookmarkList',
  components: {
    BookmarkItem
  },
  data: function () {
    return {
      bookmarks: undefined
    }
  },
  mounted () {
    axios
      .get("/bookmarks")
      .then(res => this.bookmarks = res.data)
  }
}
</script>


<style scoped>

</style>
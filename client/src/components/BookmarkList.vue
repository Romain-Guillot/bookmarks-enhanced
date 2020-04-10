<template>
  <ul>
    <li v-for="boorkmark in bookmarks" v-bind:key="boorkmark.message">
      <BookmarkItem v-bind:bookmarkItem="boorkmark" />
    </li>
  </ul>
  
</template>


<script>
import BookmarkItem from './BookmarkItem'

export default {
  name: 'BookmarkList',
  components: {
    BookmarkItem
  },
  computed: {
    bookmarks () {
      return this.$store.state.bookmarks
    }
  },
  created () {
    this.$store.dispatch('getAllBookmarks')
  }
}
</script>


<style scoped>

</style>
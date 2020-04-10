<template>
  <div class="edition-container">
    <router-link class="emoji-link home-link" to="/">Home</router-link>
    <BookmarkForm />
  </div>
</template>


<script>
import BookmarkForm from '../components/BookmarkForm'

export default {
  name: 'Edition',
  components: {
    BookmarkForm
  }
}
</script>


<style lang="scss" scoped>
.edition-container {
  width: 500px;
  margin: auto;
  margin-top: 50vh;
  transform: translateY(-50%);
}
.home-link:before {
  content: "🔙"
}
</style>
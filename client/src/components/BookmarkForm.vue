<template>
  <div>
    <div class="form-child">
      <label for="title">Title</label>
      <input type="text" name="" id="title" v-model="bookmark.title">
    </div>
    <div class="form-child">
      <label for="link">Link</label>
      <input type="text" name="" id="link" v-model="bookmark.link">
    </div>
    <div class="form-child">
      <label for="tags">Tags</label>
      <TagList v-on:changed="onSelectedTagsChanged" />
    </div>

    <div class="form-child submit-container">
      <button v-on:click="save" type="submit" class="emoji-link">Save</button>
    </div>
  </div>
</template>


<script>
import TagList from './TagList'

export default {
  name: 'BookmarkForm',
  components: {
    TagList
  },
  data() {
    return {
      bookmark : {
        title: "",
        link: "",
        tags: []
      }
    }
  },
  methods: {
    onSelectedTagsChanged (selectedTags) {
      console.log("ok")
      this.bookmark.tags = selectedTags
    },
    save () {
      this.$store.dispatch('bookmarks/addBookmark', this.bookmark)
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/style/variables.scss";


</style>
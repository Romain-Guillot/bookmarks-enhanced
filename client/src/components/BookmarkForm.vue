<template>
  <div>
    <div class="form-child">
      <label for="title">Title</label>
      <input type="text" name="" id="title" v-model="bookmark.title">
    </div>
    <div class="form-child">
      <label for="link">Link</label>
      <input type="text" name="" id="link" v-model="bookmark.url">
    </div>
    <div class="form-child">
      <label for="tags">Tags</label>
      <TagList v-on:changed="onSelectedTagsChanged" v-bind:initialSelected="bookmark.tags" />
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
  props: ['initialData'],
  components: {
    TagList
  },
  data() {
    return {
      bookmark : {
        title: this.initialData != null ? this.initialData.title : "",
        url: this.initialData != null ? this.initialData.url : "",
        tags: this.initialData != null ? this.initialData.tags : ""
      }
    }
  },
  methods: {
    onSelectedTagsChanged (selectedTags) {
      this.bookmark.tags = selectedTags
    },
    save () {
      if (this.initialData != null && this.initialData.id != null ) {
        const id = this.initialData.id;
        console.log(this.bookmark)
        this.$store.dispatch('bookmarks/editBookmark', {id, ...this.bookmark})
      } else {
        this.$store.dispatch('bookmarks/addBookmark', this.bookmark)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/style/variables.scss";


</style>
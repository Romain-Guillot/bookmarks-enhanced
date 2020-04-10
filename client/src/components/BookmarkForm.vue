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
    </div>

    <input v-on:click="save" type="submit" value="Save">
  </div>
</template>


<script>
export default {
  name: 'BookmarkForm',
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
    save () {
      console.log("OK")
      this.$store.dispatch('addBookmark', this.bookmark)
      // this.$store.dispatch('updateBookmark')
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/style/variables.scss";

label {
  font-size: 1.2em;
  display: block;
}
input[type=text] {
  display: block;
  border: none;
  width:100%;
  background: rgba($front-color, 0.1);
  padding: 10px;
  font-size: 1.1em;
  color: $front-color;
  border-radius: 6px;
}
input[type=text]:focus{
  outline-width: 0;
  border: none;
  border-radius: 6px;
}
.form-child {
  padding-bottom: 20px;
}
</style>
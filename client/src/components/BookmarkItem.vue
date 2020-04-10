<template>
  <a :href="bookmarkItem.url" target="_blank" class="bookmark-item-container">
    <div class="bookmark-main">
      <h2>{{ bookmarkItem.title }}</h2><span class="bookmark-date">{{ bookmarkItem.createAt }}</span>
      <span class="bookmark-link">{{ bookmarkItem.url }}</span>
    </div>
    <div class="bookmark-options">
      <router-link to="/edition" class="bookmark-edit emoji-link">Edit</router-link>
      <a v-on:click.prevent="remove" class="bookmark-remove emoji-link">Remove</a>
    </div>
  </a>
</template>


<script>
  export default {
    name: "BookmarkItem",
    props: ['bookmarkItem'],
    methods: {
      remove () {
        this.$store.dispatch('removeBookmark', this.bookmarkItem)
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/style/variables.scss";

  .bookmark-item-container:hover {
    background-color: rgba($front-color, .05);
  }

  .bookmark-item-container {
    display: block;
    text-decoration: none;
    margin: 0;
    padding: 13px 0;
    border-bottom: 1px solid rgb(70,70,70);
    display: grid;
    grid-template-areas: "main options";
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;

    .bookmark-main {
      grid-area: "main";
      h2, .bookmark-date {
        font-size: 1.4em;
        font-weight: 700;
        display: inline-block;
        margin: 0;
        padding: 0;
      }

      .bookmark-date {
        display: inline-block;
        margin-left: 25px;
        color: $front-color-light;
      }
      .bookmark-link {
        display: block;
        color: $front-color-light;
        font-size: 1.2em;
        font-weight: 500;
      }
    }

    .bookmark-options {
      grid-area: "options";
      a {
        display: block;
        margin: 10px 0;
      }
      .bookmark-edit:before {
        content: "🖊️";
      }

      .bookmark-remove:before {
        content: "🗑️";
      }
    }
  }
</style>
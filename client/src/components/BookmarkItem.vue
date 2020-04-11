<template>
  <a :href="bookmarkItem.url" target="_blank" :class="condensed + ' bookmark-item-container'">
    <div class="bookmark-main">
      <h2>{{ bookmarkItem.title }}</h2><span class="bookmark-date">{{ bookmarkItem.createdAt }}</span>
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
        this.$store.dispatch('bookmarks/removeBookmark', this.bookmarkItem)
      }
    },
    computed: {
      condensed () {
        console.log("OK")
        return this.$store.state.uiConfig.condensed ? "condensed" : "expanded"
      }
    }
  }
</script>


<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.bookmark-item-container {
  display: block;
  text-decoration: none;
  margin: 0;
  grid-template-areas: "main options";
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  border-bottom: 1px solid rgb(70,70,70);
  &:hover {
    background-color: rgba($front-color, .05);
  }
}

.bookmark-main {
  grid-area: "main";
  h2, .bookmark-date {
    display: inline-block;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  .bookmark-link {
    color: $front-color-light;
    font-weight: 500;
  }
}

.bookmark-options {
  grid-area: "options";
  .bookmark-edit:before {
    content: "🖊️";
  }
  .bookmark-remove:before {
    content: "🗑️";
  }
}


.condensed {
  padding: 5px 0;
  .bookmark-main {
    h2 {
      font-size: 1em;
      margin-right: 10px;
    }
    .bookmark-date {
      display: none;
    }
    .bookmark-link {
      font-size: 1em;
    }
  }
  .bookmark-options a {
    font-size: 0.9em;
    display: inline-block;
    margin: 0 0 0 15px;
  }
}

.expanded {
  padding: 13px 0;
  
  .bookmark-main {
    h2, .bookmark-date {
      font-size: 1.4em;
    }
    .bookmark-date {
      display: inline-block;
      margin-left: 25px;
      color: $front-color-light;
    }
    .bookmark-link {
      display: block;
      font-size: 1.2em;
    }
  }
  .bookmark-options a {
    display: block;
    margin: 10px 0;
  }
}

  
</style>
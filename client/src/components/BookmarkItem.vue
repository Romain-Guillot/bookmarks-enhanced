<template>
  <a :href="bookmarkItem.url" target="_blank" class="bookmark-item-container" v-bind:class="condensed ? 'condensed-item' : 'expanded-item'">
    <div class="bookmark-main">
      <TagItem  v-for="tag in bookmarkItem.tags" v-bind:key="tag.id" v-bind:tag=tag v-bind:condensed=condensed />
      <div>
        <h2>{{ bookmarkItem.title }}</h2><span class="bookmark-date">{{ bookmarkItem.createdAt }}</span>
      </div>
      <span class="bookmark-link">{{ bookmarkItem.url }}</span>
    </div>
    <div class="bookmark-options">
      <router-link to="/edition" class="bookmark-edit emoji-link">Edit</router-link>
      <a v-on:click.prevent="remove" class="bookmark-remove emoji-link">Remove</a>
    </div>
  </a>
</template>


<script>
import TagItem from './TagItem'

export default {
  name: "BookmarkItem",
  props: ['bookmarkItem'],
  components: {
    TagItem
  },
  methods: {
    remove () {
      this.$store.dispatch('bookmarks/removeBookmark', this.bookmarkItem)
    }
  },
  computed: {
    condensed () {
      return this.$store.state.uiConfig.condensed
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.bookmark-item-container {
  display: flex;
  text-decoration: none;
  margin: 0;
  align-items: center;
  border-bottom: 1px solid rgb(70,70,70);
  &:hover {
    background-color: rgba($front-color, .05);
  }
}

.bookmark-main {
  flex: 1;
  grid-area: main;
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
  grid-area: options;
  .bookmark-edit:before {
    content: "🖊️";
  }
  .bookmark-remove:before {
    content: "🗑️";
  }
}


.condensed-item {
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
    display: inline-block;
    font-size: 0.9em;
    margin: 0 0 0 15px;
  }
}

.expanded-item {
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
      font-size: 1.2em;
    }
  }
  .bookmark-options  a {
    display: block;
    margin: 10px 0;
  }
}

  
</style>
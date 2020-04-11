<template>
  <div>
    <div v-if="tags.length">No tags</div>
    <ul class="tags-container" v-else>
      <li v-for="tag in tags" v-bind:key="tag.id" v-on:click="selectTag(tag)">
          <TagItem v-bind:tag="tag" v-bind:isSelected="isSelected(tag)" />
      </li>
    </ul>
    <a v-on:click="deselectAll">Deselect all</a>
    {{selectedTags.size}}
  </div>

</template>


<script>
import TagItem from './TagItem'

export default {
  name: "TagList",
  components: {
    TagItem
  },
  data () {
    return {
      selectedTags: []
    }
  },
  computed: {
    tags () {
      return this.$store.state.bookmarks.tags
    },
  },
  methods: {
    selectTag (tag) {
      if (this.selectedTags.includes(tag)) {
        const index = this.selectedTags.indexOf(tag)
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag)
      }
      this.notifyAll()
    },
    deselectAll () {
      this.selectedTags = []
      this.notifyAll()
    },
    notifyAll () {
      this.$emit('changed', this.selectedTags)
    },
    isSelected (tag) {
      return this.selectedTags.includes(tag)
    },
  }
}
</script>


<style lang="scss" scoped>
.tags-container {
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    display: inline-block;
  }
}
</style>
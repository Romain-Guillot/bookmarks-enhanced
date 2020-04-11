<template>
  <div>
    <div v-if="tags.length">No tags</div>
    <ul class="tags-container" v-else>
      <li 
        class="tag-card"
        v-bind:class="isSelected(tag)"
        v-bind:style="{ background: 'rgb(' + tag.color.r + ',' + tag.color.g + ',' + tag.color.b + ')' }" 
        v-for="tag in tags" v-bind:key="tag.id"
        v-on:click="selectTag(tag)">
          {{ tag.name }}
          
      </li>
    </ul>
    <a v-on:click="deselectAll">Deselect all</a>
    {{selectedTags.size}}
  </div>

</template>


<script>
export default {
  name: "TagList",
  data () {
    return {
      selectedTags: []
    }
  },
  computed: {
    tags () {
      return this.$store.state.bookmarks.tags
    }
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
      return this.selectedTags.includes(tag) ? "selected" : ""
    },
  }
}
</script>


<style lang="scss" scoped>
.tags-container {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.tag-card {
  display: inline-block;
  padding: 10px;
  border-radius: 6px;
  margin: 0 5px 5px 0;
  cursor: pointer;
}

.selected {
  font-weight: 700;
}
.selected:before {
  content: "✔"
}
</style>
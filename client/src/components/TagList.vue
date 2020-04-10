<template>
  <div>
    <div v-if="tags.length">No tags</div>
    <ul class="tags-container" v-else>
      <li 
        class="tag-card" 
        v-bind:style="{ background: 'rgb(' + tag.color.r + ',' + tag.color.g + ',' + tag.color.b + ')' }" 
        v-for="tag in tags" v-bind:key="tag.id">
          {{ tag.name }}
          {{ }}
      </li>
    </ul>
    <a>Deselect all</a>
  </div>

</template>


<script>
export default {
  name: "TagList",
  data () {
    return { fontSize: 45 }
  },
  computed: {
    tags () {
      return this.$store.state.tags
    }
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
  margin: 0 5px 5px 0
}
</style>
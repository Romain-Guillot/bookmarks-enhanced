<template>
  <div>
    <div v-if="!tags.length">No tags</div>
    <ul v-else>
      <li v-for="tag in tags" v-bind:key="tag.id">{{ tag.title }}</li>
    </ul>
    <a>Deselect all</a>
  </div>

</template>


<script>
export default {
  name: "TagList",
  props: ['tags']
}
</script>


<style lang="sass" scoped>

</style>
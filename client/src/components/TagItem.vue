<template>
  <div 
    class="tag-card"
    v-bind:class="{'selected': isSelected, 'condensed-tag': condensed,}"
    v-bind:style="{background: color}">
    {{ tag.name }}
  </div>
</template>


<script>
export default {
  name: 'TagItem',
  props: ['tag', 'isSelected', 'condensed'],
  computed : {
    color () {
      return 'rgb(' + this.tag.color.r + ',' + this.tag.color.g + ',' + this.tag.color.b + ')'
    },
  }
}
</script>


<style lang="scss" scoped>
.tag-card {
  display: inline-block;
  padding: 10px;
  border-radius: 6px;
  margin: 0 5px 5px 0;
  cursor: pointer;
}

.condensed-tag {
  padding: 5px;
  font-size: 0.8em;
}

.selected {
  font-weight: 700;
  &::before {
    content: "✔"
  }
}
</style>
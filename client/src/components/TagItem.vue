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
@import '../assets/style/variables.scss';

.tag-card {
  display: inline-block;
  padding: 10px;
  border-radius: $radius;
  margin: 2px 4px 2px 0;
  cursor: pointer;
}

.condensed-tag {
  padding: 3px;
  font-size: 0.8em;
}

.selected {
  font-weight: 700;
  &::before {
    content: "✔"
  }
}
</style>
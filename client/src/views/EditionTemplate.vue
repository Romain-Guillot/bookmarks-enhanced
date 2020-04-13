<template>
  <div class="edition-container">
    <a class="emoji-link home-link" v-on:click="goBack">Back</a>
    <component v-bind:is="child" v-bind="childProp"></component>
  </div>
</template>


<script>
import TagForm from '../components/TagForm'
import BookmarkForm from '../components/BookmarkForm'

export default {
  name: 'EditionTemplate',
  components: {
    TagForm,
    BookmarkForm
  },
  props: ['child', 'initialData'],
  computed: {
    childProp () {
      return {
        initialData: this.initialData
      }
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.edition-container {
  width: 500px;
  margin: auto;
  margin-top: 50vh;
  transform: translateY(-50%);
}
.home-link {
  display: block;
  margin-bottom: 40px;
}
.home-link:before {
  content: "🔙"
}
</style>
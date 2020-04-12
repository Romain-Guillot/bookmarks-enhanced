<template>
  <div class="edition-container">
    <a class="emoji-link home-link" v-on:click="goBack">Back</a>
    <component v-bind:is="child"></component>
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
  props: ['child'],
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

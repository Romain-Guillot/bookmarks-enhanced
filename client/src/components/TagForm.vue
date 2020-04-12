<template>
   <div>
    <div class="form-child">
      <label for="name">Name</label>
      <input type="text" name="" id="name" v-model="tag.name">
    </div>
    <div class="form-child">
      <label for="color">Color</label>
      <input type="text" name="" id="color" v-model="tag.color">
    </div>
    <div class="form-child submit-container">
      <button v-on:click="save" type="submit" class="emoji-link">Save</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TagForm',
  data () {
    return {
      child: 'HelloWorld',
      tag: {
        name: "",
        color: "",
      }
    }
  },
  methods: {
    save () {
      console.log('save')
    }
  }
}
</script>


<style lang="scss" scoped >
  
</style>
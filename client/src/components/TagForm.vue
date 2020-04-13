<template>
   <div>
    <div class="form-child">
      <label for="name">Name</label>
      <input type="text" name="" id="name" v-model="tag.name">
    </div>
    <div class="form-child">
      <label for="color">Color</label>
      <input type="text" name="" id="color" v-model="color">
    </div>
    <ColorPicker class="t" :value="colors" @input="onColorSelection" />
    <div class="form-child submit-container">
      <button v-on:click="save" type="submit" class="emoji-link">Save</button>
    </div>

  </div>
</template>


<script>
import { Chrome } from 'vue-color'


export default {
  name: 'TagForm',
  components: {
    'ColorPicker': Chrome
  },
  data () {
    return {
      color: '#a44d33',
      tag: {
        name: "",
        color: "",
      }
    }
  },
  computed: {
    colors () {
      return {hex: this.color}
    }
  },
  methods: {
    save () {
      this.$store.dispatch('bookmarks/addTag', this.tag)
    },
    onColorSelection (newColor) {
      this.color = newColor.hex
    }
  }
}
</script>


<style lang="scss" >
@import '../assets/style/color-picker.scss';

</style>
<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/> 
  </div>
</template>

<script>


export default {
  
}
</script>

<style lang="scss">
@import 'assets/style/variables.scss';

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: $background;
  color: $front-color;
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu';
}

a {
  text-decoration: underline;
  color: $front-color;
  cursor: pointer;
}

button {
  cursor: pointer;
}

.emoji-link:before {
  padding-right: 10px;
  display:inline-block;
}

</style>

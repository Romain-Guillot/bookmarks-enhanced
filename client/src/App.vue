<template>
  <router-view/> 
</template>


<style lang="scss">
// Base css
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

label {
  font-size: 1em;
  display: block;
  padding-bottom: 2px;
}
input, button {
  display: block;
  border: none;
  border-radius: $radius;
  padding: 10px;
  font-size: 1em;
  background: rgba($front-color, 0.1);
  color: $front-color;
}
input[type=text] {
  width: calc(100% - 20px);

}
input:focus, button {
  outline-width: 0;
  border: none;
}
button {
  margin: auto;
}
button:before {
  content: "💾"
}
.submit-container {
  padding-top: 20px;
}

.form-child {
  padding-bottom: 20px;
}



</style>

<template>
  <div class="main-container">
    <aside>
      <SidebarPannel />
    </aside>

    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'
import SidebarPannel from '@/components/SidebarPannel'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SidebarPannel
  },
  created() {
    axios.get("bookmarks").then((res) => console.log(res))
  }
}
</script>


<style lang="scss" scoped>
.main-container {
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-areas: "sidebar main";
  max-width: 1400px;
  margin: auto;

  aside {
    grid-area: sidebar;
    padding: 50px;
  }

  .home {
    grid-area: main;
  }
}


</style>
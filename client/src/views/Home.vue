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
import HelloWorld from '@/components/HelloWorld.vue'
import SidebarPannel from '@/components/SidebarPannel'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SidebarPannel
  },
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
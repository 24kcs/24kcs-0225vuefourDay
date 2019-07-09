<template>
  <div class="container">
      <Search></Search>
      <Main></Main>
  </div>
</template>
<script>
//引入组件

import Search from './components/Search.vue'
import Main from './components/Main.vue'
export default {
  components: {
    Search,
    Main
  }
};
</script>
<style scoped>
</style>
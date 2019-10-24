<template>
  <div class="home">
    <header>
      <img alt="Vue logo" src="../assets/logo.png" style="float:left">
      <h1>Starters directory</h1>
    </header>
    <section>
      <Search/>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/search/Search.vue'; // @ is an alias to /src

@Component({
  components: {
    Search,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  section {
    clear: both;
  }
</style>

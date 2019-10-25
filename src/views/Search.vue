<template>
  <div class="home">
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

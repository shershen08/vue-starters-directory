<template>
  <div class="wrapper">
    <input v-model="search">
    <div class="results">
      <section v-for="(result,index) in results" :key="index">
        {{result}}
      </section>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Model, Vue, Provide, Watch } from 'vue-property-decorator';
import LIST from './data';

@Component
export default class Search extends Vue {
  @Model() search!: string;
  @Provide() foo = 'foo'
  @Prop() amount!: string;
  data() {
    return {
      list: LIST,
      results: []
    }
  }
  @Watch('search')
  onSeachChanged(val: string, oldVal: string) {
    this.results = this.list.filter(i=> {
     return i.title.includes(val)
    })
  }
  mounted(){
    this.results = this.list;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

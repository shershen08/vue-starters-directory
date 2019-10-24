<template>
  <div class="wrapper">
    <SearchForm @search="onSeachChanged"/>
    <div class="results">
      <SearchItem v-for="(result,index) in results" :key="index" :details="result"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ListItem } from '@/types/index';
import { Component, Prop, Model, Provide, Watch } from 'vue-property-decorator';
import LIST from './../data';
import SearchItem from './SearchItem.vue';
import SearchForm from './SearchForm.vue';

@Component({
        components: {
            SearchItem,
            SearchForm
        },
        methods: {
          onSeachChanged(val) {
            this.results = this.list.filter((i: ListItem) => {
              return i.title.includes(val);
            });
          }
        }
    })

export default class Search extends Vue {
  components = {
      SearchItem,
      SearchForm,
  };
  // @Prop() public list: ListItem[] = LIST;
  // @Prop() public results!: ListItem[];
  data() {
    return {
      list: LIST,
      results: []
    }
  }
  mounted() {
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

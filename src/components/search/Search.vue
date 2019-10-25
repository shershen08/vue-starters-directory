<template>
  <div class="wrapper">
    <SearchForm @search:text="onSeachTextChanged"/>
    <div class="results">
      <p class="subtitle results-count">{{results.length}} starters found</p>
      <SearchItem v-for="(result,index) in results" :key="index" :details="result" @search:tag="onSeachTagChanged"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ListItem } from '@/types/index';
import { Component, Prop, Model, Provide, Watch, Vue } from 'vue-property-decorator';
import LIST from './../../../data/starters';
import SearchItem from './SearchItem.vue';
import SearchForm from './SearchForm.vue';

@Component({
        name: 'Search',
        components: {
            SearchItem,
            SearchForm,
        },
    })

export default class Search extends Vue {
  public list: ListItem[] = LIST;
  public results!: ListItem[];
  private components = {
      SearchItem,
      SearchForm,
  };
  private data() {
    return {
      list: LIST,
      results: [],
    };
  }
  private mounted() {
    this.results = this.list;
  }
  private onSeachTextChanged(val: string) {
    this.results = this.list.filter((i: ListItem) => {
      return i.title.includes(val);
    });
  }
   private onSeachTagChanged(val: string) {
    this.results = this.list.filter((i: ListItem) => {
      return i.features.includes(val);
    });
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
.subtitle.results-count {
  font-size: 12px;
  color: #aaa;
}
</style>

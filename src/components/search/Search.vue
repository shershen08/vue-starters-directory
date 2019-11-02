<template>
  <div class="wrapper">
    <SearchForm @search:text="onSeachTextChanged" @search:tag="onSeachTagChanged" :labels="labels"/>
    <div class="results">
      <p class="subtitle results-count" v-if="!searched">{{results.length}} starters available</p>
      <p class="subtitle results-count" v-else>{{results.length}} starters found</p>
      <SearchItem v-for="(result,index) in results" :key="index" :details="result" @search:tag="onSeachTagChanged"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ListItem, SearchState } from '@/types/index';
import { Component, Prop, Model, Provide, Watch, Vue } from 'vue-property-decorator';
import LIST from './../../../data/starters';
import SearchItem from './SearchItem.vue';
import SearchForm from './SearchForm.vue';

const sortByStars = (a: ListItem, b: ListItem): number => {
    if (a.stars === b.stars) {
      return 1;
    }
    return a.stars > b.stars ? -1 : 1;
  };

@Component({
        name: 'Search',
        components: {
            SearchItem,
            SearchForm,
        },
    })

export default class Search extends Vue {
  public list: ListItem[] = LIST;
  public labels: string[] = [];
  public results: ListItem[] = [];
  public searched: boolean = false;
  public searchState: SearchState = {
    text: '',
    tags: [],
  };
  private components = {
      SearchItem,
      SearchForm,
  };
  private mounted() {
    this.results = this.list.sort(sortByStars);
    let list: string[] = [];
    const tmpMap: any = {};
    this.list.forEach( (l) => {
      list = list.concat(l.features).sort();
    });
    list.forEach((label: string) => {
      tmpMap[label] = tmpMap[label] ? tmpMap[label] + 1 : 1;
    });
    this.labels = Object.entries(tmpMap).sort((a: any, b: any ) => {
      if (a[1] === b[1]) {
        return 1;
      }
      return a[1] > b[1] ? -1 : 1;
    }).map((i) => i[0]);
  }
  private onSeachTextChanged(val: string) {
    this.searchState.text = val;
    this.searched = true;
    this.applySearchFilters();
  }
  private onSeachTagChanged(val: string[]) {
    this.searchState.tags = val;
    this.searched = true;
    this.applySearchFilters();
  }
  private applySearchFilters() {
    this.results = this.list.filter((i: ListItem) => {
      return i.title.toLowerCase().includes(this.searchState.text.toLowerCase());
    }).filter((i: ListItem) => {
      if (this.searchState.tags.length === 0) {
        return true;
      }
      let hasAllSelectedTags = true;
      this.searchState.tags.forEach((tag) => {
        if (!i.features.includes(tag)) {
          hasAllSelectedTags = false;
        }
      });
      return hasAllSelectedTags;
    }).sort(sortByStars);
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
  margin-top: 10px;
}
</style>

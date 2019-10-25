<template>
    <section class="search-box">
        <input id="tags" v-model="search" ref="searchInput" class="search-input">
        <div class="clear-button">
         <button v-if="search != ''" type="button" @click="onClear" class="nes-btn is-primary">x</button>
        </div>
        <div class="list">
            <button type="button" class="nes-btn is-success" @click="toggleFilters">filers</button>
            <div v-show="showFilters" class="filters-container ">
                <label v-for="(label, index) in labels" :key="index">
                    <input type="checkbox" class="nes-checkbox" checked />
                    <span>{{label}}</span>
                </label>
            </div>
        </div>
        
    </section>
</template>
<script lang="ts">
import { Component, Model, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

@Component
export class SearchForm extends Vue {
    public search: string = '';
    public showFilters: boolean = false;
    @Prop() private labels!: object;
    @Watch('search')
    @Emit('search:text')
    private onSeachChanged(val: string, oldVal: string) {
        return val;
    }
    private toggleFilters() {
        this.showFilters = !this.showFilters
    }
    private onClear() {
        this.search = '';
        this.$refs.searchInput.focus();
    }
}
export default SearchForm;
</script>

<style lang="scss" scoped>
.clear-button{
    min-width: 6%;
}
.search-input {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    order: 0;
    flex-grow: 12;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    text-align: left;
}
.list {
      display: flex;
      width: 30%;
    margin: 0 auto;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
    overflow: hidden;
}
.filters-container {
        position: absolute;
    background: #fff;
    z-index: 100;
}
.search-box {
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
}
</style>
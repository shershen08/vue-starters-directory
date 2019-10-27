<template>
    <section class="search-box">
        <input id="tags" v-model="search" ref="searchInput" class="search-input" placeholder="type something">
        <div class="clear-button">
         <button v-if="search != ''" type="button" @click="onClear" class="nes-btn">x</button>
        </div>
        <div class="list">
            <button type="button" v-show="!showFilters" class="nes-btn filter-button" @click="toggleFilters">filters ({{activeFlags.length}}) </button>
            <div v-show="showFilters" class="filters-container">
                <div class="wrapper nes-container ">
                    <button type="button" class="nes-btn filter-button" @click="toggleFilters">filters ({{activeFlags.length}})</button>
                    <br>
                    <br>
                    <label v-for="(label, index) in labels" :key="index" :class="{'active': activeFlags.includes(label)}">
                        <input type="checkbox" class="nes-checkbox" v-model="activeFlags" :value="label"/>
                        <span>{{label}}</span>
                    </label>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Model, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

@Component
export class SearchForm extends Vue {
    public search: string = '';
    public activeFlags: string[] = [];
    public showFilters: boolean = false;
    @Prop() private labels!: object;
    @Watch('search')
    @Emit('search:text')
    private onSeachChanged(val: string, oldVal: string) {
        return val;
    }
    @Watch('activeFlags')
    @Emit('search:tag')
    private onTagChanged(val: string[]) {
        return val;
    }
    private toggleFilters() {
        this.showFilters = !this.showFilters;
        this.onTagChanged(this.activeFlags);
    }
    private onClear() {
        this.search = '';
        // TODO, how to focus in TS ?
        // this.$refs.searchInput.focus();
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
}
label {
    width: 100%;
        &.active {
        color: #42b983;
    }
}
.filters-container {
    position: relative;
    z-index: 100;
    top: -25px;
    left: -40px;
    .wrapper {
        position:absolute;
        background: #fff;
        min-width: 290px;
    }
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
@media only screen and (max-device-width : 768px) {
    .filter-button {
        font-size: .5em;
    }
    .filters-container {
        position: absolute;
        z-index: 100;
        top: 110px;
        left: 30px;
        width: calc( 100% - 60px);
    }
}
</style>
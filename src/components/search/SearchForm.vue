<template>
    <section>
        <input v-model="search" class="search-input">
    </section>
</template>
<script lang="ts">
import { Component, Model, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

@Component
export class SearchForm extends Vue {
    data() {
        return {
            search: ''
        }
    }
    @Watch('search')
    @Emit('search')
    onSeachChanged(val: string, oldVal: string) {
        return val
    }
}
export default SearchForm;
</script>

<style lang="scss" scoped>
.search-input {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
</style>
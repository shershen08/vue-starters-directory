<template>
    <section>
        <input v-model="search">
        {{search}}
    </section>
</template>
<script lang="ts">
import { Component, Model, Prop, Vue } from 'vue-property-decorator';

@Component
export class SearchForm extends Vue {
    @Prop() public name = 'SearchForm';
    @Model() private search!: string;
}
export default SearchForm;
</script>
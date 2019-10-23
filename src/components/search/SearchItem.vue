<template>
    <section>
        {{details}}
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export class SearchItem extends Vue {
    @Prop() public name = 'SearchItem';
    @Prop() private details!: object;
}
export default SearchItem;
</script>
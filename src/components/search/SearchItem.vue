<template>
    <section>
        <h3>{{details.title}}</h3>
        <div class="other-details">
            ⭐️{{details.stars}} | <a :href="details.repo">🔗{{details.repo.replace('https://', '')}}</a>
            <br>
            <div class="feature" v-for="(feature, index) in details.features" :key="index">
                {{feature}}
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export class SearchItem extends Vue {
    @Prop() private details!: object;
}
export default SearchItem;
</script>
<style scoped lang="scss">
section {
    width: 80%;
    margin: 0 auto;
}
    h3 {
        margin-bottom: 5px;
    }
    a {
        text-decoration: none;
    }
    .other-details {
        text-align: left
    }
    .feature {
        display: inline;
        border: 1px solid #ccc;
        padding: 1px 5px;
        border-radius: 4px;
        margin-right: 5px;
    }
</style>
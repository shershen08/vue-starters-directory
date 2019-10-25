<template>
    <section class="nes-btn">
        <div class="title">
             <h3>{{details.title}}</h3>
              <div class="star-count">⭐️{{details.stars}} </div>
              <small>{{details.repo.replace('https://', '')}}</small>
        </div>
    
          <div class="features-list">
                <div class="feature-item" v-for="(feature, index) in details.features" :key="index" @click="searchTag(feature)">
                    {{feature}}
                </div>
            </div>
        <div class="link-details">
           <a :href="details.repo" :title="details.repo">>></a>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export class SearchItem extends Vue {
    @Prop() private details!: object;
    @Emit('search:tag')
    private searchTag(feature: string) {
        return feature;
    }
}
export default SearchItem;
</script>
<style scoped lang="scss">
section {
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
}
.title {
    order: 0;
    flex-grow: 12;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    text-align: left;
}
.features-list {
    order: 0;
    flex-grow: 8;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
}
.link-details {
    order: 0;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
}
.star-count {
    color: #ffba3b;
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
    .feature-item {
        display: inline;
        border: 1px solid #ccc;
        padding: 1px 5px;
        border-radius: 4px;
        margin-right: 5px;
        cursor: pointer;
    }
    .features-list {
        margin-top: 10px;
    }
</style>
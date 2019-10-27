<template>
    <section>
        <section class="nes-btn basic-details" @click="onClick">
            <div class="title">
                <h3>{{details.title}}</h3>
                <div class="star-count">
                    <i class="nes-icon star"></i>{{details.stars}}
                </div>
            </div>
        
            <div class="features-list">
             
                </div>
            <div class="link-details">
                <i class="nes-icon arrow-down" v-if="opened">-</i>
                <i class="nes-icon arrow-right" v-if="!opened">+</i>
            </div>
        </section>
        <section v-if="opened" class="nes-container showcase">
               Features: <div class="feature-item" v-for="(feature, index) in details.features" :key="index" @click="searchTag(feature)">
                        {{feature}}
                    </div>
                    <br>
            Repo link: <a :href="details.link" :title="details.link" target="_blank">{{`${details.owner}/${details.repo}`}}</a>
        </section>
    </section>
</template>
<script lang="ts">
import { ListItem } from '@/types/index';
import gql from 'graphql-tag';
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export class SearchItem extends Vue {
    // private repoDetails = gql`query {
    //         repository($name: String!, $owner: String!) {
    //             pushedAt
    //             shortDescriptionHTML
    //             pullRequests(states:OPEN){
    //             totalCount
    //             }
    //             issues(states:OPEN){
    //             totalCount
    //             }
    //             languages(first:5) {
    //             edges {
    //                 node {
    //                 color
    //                 name
    //                 }
    //             }
    //             }
    //         }
    //     }`;
    private opened: boolean = false;
    private hello: any = {};
    @Prop() private details!: ListItem;
    @Emit('search:tag')
    private searchTag(feature: string) {
        return feature;
    }
    private async onClick() {
        this.opened = ! this.opened;
        // TODO, add loading details from GitHub API
        // await this.$apollo.query({
        //             query: this.repoDetails,
        //             variables: {
        //                 owner: String(this.details.owner),
        //                 name: String(this.details.repo),
        //         },
        //     });
        // e.g. name = Vue-Express-Mongo-Boilerplate, owner = Icebob
    }
}
export default SearchItem;
</script>
<style scoped lang="scss">
.basic-details {
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
    flex-grow: 6;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
}
.link-details {
    order: 0;
    width: 50px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
}
.star-count {
    color: #ffba3b;
    font-size: 22px;
    .nes-icon {
        margin-right: 20px;
    }
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
        border: 1px solid #000;
        padding: 1px 5px;
        border-radius: 4px;
        margin-right: 5px;
        cursor: pointer;
        opacity: .7;
        font-size: 12px;
        &:hover {
            color: #42b983;
        }
    }
    .features-list {
        margin-top: 10px;
    }
</style>
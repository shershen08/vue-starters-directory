<template>
    <section>
        <section class="nes-btn top-block" @click="onClick">
            <div class="basic-details">
                <div class="title">
                    <h3>{{details.title}}</h3>
                </div>
                <div class="link-details">
                    <i class="nes-icon arrow-down" v-if="opened">-</i>
                    <i class="nes-icon arrow-right" v-if="!opened">+</i>
                </div>
            </div>
            <div class="top-details">
                <div class="star-count">
                    <i class="nes-icon star"></i>{{details.stars}}
                </div>
                <p>{{details.desc}}</p>
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
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export class SearchItem extends Vue {
    private opened: boolean = false;
    private hello: any = {};
    @Prop() private details!: ListItem;
    @Emit('search:tag')
    private searchTag(feature: string) {
        return feature;
    }
    private async onClick() {
        this.opened = ! this.opened;
    }
}
export default SearchItem;
</script>
<style scoped lang="scss">
.top-block {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
}
.basic-details {
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
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
.top-details {
    justify-content: flex-start;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    p {
        text-align: left;
        color: #999;
        width: 90%;
        flex-basis: auto;
        align-self: auto;
        flex-grow: 4;
    }

    @media only screen and (max-device-width : 768px) {
          p {
              display: none;
          }
    }
}
.star-count {
    color: #ffba3b;
    font-size: 22px;
    flex-grow: 4;
    min-width: 170px;
    flex-basis: auto;
    align-self: auto;
    text-align: left;
    .nes-icon {
        margin-right: 20px;
    }
}
.link-details {
    order: 0;
    width: 50px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
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
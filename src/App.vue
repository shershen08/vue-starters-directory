<template>
  <div id="app" class='with-title'>
    <header @click="toSearch">
      <div>
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <h1>Vue<br>Starters<br>directory</h1>
    </header>
    <router-view/>
    <footer>
      <div id="nav">
        <span>v.0.1.1</span>
      <router-link to="/">Search</router-link>
      <router-link to="/about">About</router-link>
    
      <a href="https://github.com/shershen08/vue-starters-directory/blob/master/data/starters.ts" target="_blank">Contribute</a>
      <a href="https://twitter.com/share?" class="twitter-share-button"  data-text="#vue starters directory - find best bootstrap you #vuejs project" data-show-count="true">Tweet</a>
    </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export class App extends Vue {
    private toSearch() {
        if ( this.$router.currentRoute.fullPath !== '/') {
          this.$router.push('/');
        }
    }
}
export default App;
</script>
<style lang="scss">
@import url(./assets/pixel-style.css);
#app {
      margin: 40px;
}
footer {
    height: 40px;
    width: 100%;
    text-align: center;
    margin-top: 40px;
    @media only screen and (max-device-width : 768px) {
      #nav {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
}
.nes-btn {
  user-select: auto !important;
}
header {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    display: flex;
    h1 {
      width: 23%;
      order: 0;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      align-self: auto;
      @media only screen and (max-device-width : 768px) {
        width: auto;
        font-size: 1em;
      }
    }
    div {
       width: 19%;
        order: 0;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      align-self: auto;
      img {
            width: 100%;
            max-width: 200px;
      }
    }
}


a {
  color: #42b983;
  margin: 10px;
}

@media only screen and (max-device-width : 768px) {
  .nes-container {
      padding: .5em;
      font-size: 70%;
  }
}
</style>

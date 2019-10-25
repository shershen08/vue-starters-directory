<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" style="float:left">
      <h1>Starters directory</h1>
    </header>
    <router-view/>
    <footer>
      <div id="nav">
      <router-link to="/">Search</router-link>
      <router-link to="/about">About</router-link>
    
      <a href="https://github.com/shershen08/vue-starters-directory/blob/master/data/starters.ts">Contribute</a>
      <a href="https://twitter.com/share?" class="twitter-share-button"  data-text="#vue starters directory - find best bootstrap you #vuejs project" data-show-count="true">Tweet</a>

    </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  bottom: 30px;
    height: 40px;
    position: absolute;
    width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

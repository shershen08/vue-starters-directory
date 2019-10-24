<template>
  <div id="app">
    <router-view/>
    <footer>
      <div id="nav">
      <router-link to="/">Search</router-link> |
      <router-link to="/about">Contribute</router-link>
      Share:
      <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=#vue%20starter%20kit%20search%20 - shershen08.github.io/vue-starters-directory/">Tweet</a>
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

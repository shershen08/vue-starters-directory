import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import VueHotkey from 'v-hotkey';
import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql',
});

// const httpLink = createHttpLink({
//   uri: 'https://api.github.com/graphql',
// });

// const cache = new InMemoryCache();

// const apolloClient = new ApolloClient({
//   fetch: httpLink,
//   cache,
// });

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

// Vue.use(VueHotkey);
Vue.use(VueApollo);

new Vue({
  apolloProvider,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

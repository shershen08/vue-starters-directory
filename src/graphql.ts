import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';


const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
const token = 'YOUR_GIHUB_API_TOKEN';
return {
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
    },
};
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

const apolloProvider = new VueApollo({
defaultClient: apolloClient,
});


export default apolloProvider;

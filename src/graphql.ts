import {
    HttpLink,
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
  } from "@apollo/client";
  
  const httpLink = new HttpLink({
    uri: "https://dex-server.herokuapp.com/",
  });
  
  export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
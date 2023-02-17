import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const AUTH_TOKEN = process.env.CONTENTFUL_AUTH;

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const httpLink = createHttpLink({
  fetch,
  uri: CONTENTFUL_URL,
  headers: {
    authorization: `Bearer ${AUTH_TOKEN}`, 
    'Content-Language': 'en-us',
  },
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
});

export default client;
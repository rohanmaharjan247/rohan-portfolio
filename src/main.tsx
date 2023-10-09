import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import App from "./App.tsx";
import "./index.css";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => (Icons as any)[icon]);

library.add(...iconList);

const CONTENTFUL_GRAPHQL_URI = `https://graphql.contentful.com/content/v1/spaces/${
  import.meta.env.VITE_CONTENTFUL_SPACE_ID
}`;

const apolloClient = new ApolloClient({
  uri: CONTENTFUL_GRAPHQL_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_API}`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

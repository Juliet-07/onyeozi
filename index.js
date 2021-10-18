/**
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { name as appName } from "./app.json";
import AsyncStorage from "@react-native-community/async-storage";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  Observable,
} from "@apollo/client";
import Route from "./src/config/Routes/";
import ShowMessage, { type } from "./src/components/showMessage";

const theme = {
  colors: {
    primary: "#1976D2",
    secondary: "#FFC107",
    success: "#28A745",
    error: "#F44545",
    warning: "#FF6600",
    red: "red",
  },
};
const cache = new InMemoryCache({});
const request = async (operation) => {
  const token = await AsyncStorage.getItem("token");
  operation.setContext({
    headers: {
      token: token ? token : "",
    },
  });
};
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: token ? token : "",
    },
  };
});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError, operation }) => {
      if (
        graphQLErrors &&
        operation.query.definitions[0].operation === "mutation"
      ) {
        graphQLErrors.map(({ message }) => {
          if (message !== "Device already exist") {
            ShowMessage(type.ERROR, message);
          }
        });
        return;
      }
      if (operation.query.definitions[0].operation === "mutation") {
        ShowMessage(type.ERROR, "Network error");
      }
      if (networkError) {
        ShowMessage(type.ERROR, "Network error");
      }
      if (graphQLErrors) {
        console.log(graphQLErrors, "kkkkkkk");
        ShowMessage(type.ERROR, "Graphql Error");
      }
    }),
    // requestLink,
    authLink,
    createUploadLink({
      // uri: 'http://192.168.43.47:2080/graphql',
      uri: "http`://onyeozi.herokuapp.com/graphql",
      credentials: "include",
    }),
  ]),
  cache,
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Route />
    </ThemeProvider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);

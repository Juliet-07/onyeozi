import { StyleSheet } from "react-native";
import theme from "../../../config/theme";

export const styles = StyleSheet.create({
  phase4: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
    width: "100%"
  },

  main: {
    maxWidth: 500,
    
  },
  input: {
    borderRadius: 0,
    backgroundColor: "transparent",
    width: "100%"
  },
  header: {
    marginTop: 20,
    width: "100%",
    marginBottom: 30
  },
  headText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    color: theme.primary
  },
  btnContainer: {
    marginBottom: 20,
    alignItems: "flex-start"
  },
  inputs: {
    flex: 2
  },
  pictureContainer: {
    minWidth: "100%",
    marginTop: 0
  },

  picture: {
    height: 40,
    width: 40,
    margin: 20
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  last: {
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 10,
    flexDirection: "row",
    width: "60%"
  },
  texts: {
    color: "grey"
  },
  signUp: {
    color: "#090909"
  }
});

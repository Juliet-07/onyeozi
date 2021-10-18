import { StyleSheet } from "react-native";
import theme from "../../../../config/theme/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  // title:{

  forgotten: {
    color: theme.primary,
    fontSize: 23,
    textAlign: "center",
    // marginBottom: 20
  },

  body: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  messageContainer: {
    width: "100%",
    alignItems: "center",
  },
  message: {
    fontSize: 17,
    color: "grey",
    lineHeight: 19,
    marginTop: 20,
  },
  input: {
    maxWidth: 500,
  },
  btnStyle: {
    borderWidth: 3,
  },
});

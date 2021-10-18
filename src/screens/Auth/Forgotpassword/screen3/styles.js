import { StyleSheet } from "react-native";
import theme from "../../../../config/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btnStyle: {
    backgroundColor: theme.primary
  },
 
  input: {
    maxWidth: 500,
    backgroundColor: "#E5E7E6"
  },
  header: {
    color: theme.primary,
    fontSize: 23,
    textAlign: "center",
  },
  picture: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  }
});

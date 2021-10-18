import { StyleSheet } from "react-native";
import theme from "../../../config/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    marginVertical: 15,
  },
  btnStyle: {
    backgroundColor: theme.primary
  },
  input: {
    borderRadius: 0,
    backgroundColor:'#E5E7E6'
  },
  header: {
    fontSize: 30,
    color: theme.primary,
    marginBottom: 20
  },
  picture:{
    width: 300,
    height: 170,
    alignSelf: "center"
  }
});

import { StyleSheet } from "react-native";
import { colors } from "../../../../config/colors/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  headerText: {
    color: colors.primary,
    fontSize: 23,
    textAlign: "center",
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  codeInputContainer: {
     marginTop: 10, alignItems: "center"
     },
  alert: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
    color: "#4B4D4C"
  },
  word: {
    fontSize: 15,
    color: "#4B4D4C",
    marginTop: 10
  },
  button: {
    marginTop: 60,
    borderRadius: 30
  },
  lastText: {
    flexDirection: "row",
    margin: 20
  },
  wordd: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.4)"
  },
  resend: {
    fontSize: 16,
    color: "#4B4D4C",
    marginLeft: 2
  },
  verify: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  }
});

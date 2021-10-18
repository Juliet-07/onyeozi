import { StyleSheet } from "react-native";
import theme from "../../../config/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    
  },
  subContainer: {
    width: "100%",
    maxWidth: 500
  },
  header: {
    fontSize: 30,
    color: theme.primary,
    marginBottom: 25,
    marginBottom: 25,
    marginTop: 25
  },
  footerContent: {
    color: "#00000080",
    fontSize: 16,
    marginRight: 5
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: "center"
  },
  label: {
    margin: 8
  },
  createAccount: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  iconFacebook: {
    width: 40,
    height: 40,
    alignSelf: "center",
    
  },
  iconContainer: {
    width: "50%",
    height: 70,
    flexDirection: "row",
    alignSelf: "center",
    
    justifyContent: "space-around"
  },
  signUpText: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 10,
    color: "#00000080",
    fontSize: 17
  },
  footer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    marginBottom: 25
  }
});

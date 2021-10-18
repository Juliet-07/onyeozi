import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25
  },
  Verify: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: "bold"
  },
  image: {
    height: 200,
    width: 300,
    marginTop: 20,
    alignItems:"center"
  },
  imageView:{
    alignItems:"center"
  },
  text: {
    color: "#4B4D4C",
    fontSize: 16,
    lineHeight: 19
  },
  button: {
    marginTop: 60,
    borderRadius: 25
  },
  buttonView:{
    alignItems:"center",
    marginBottom:20
  },
  resendOtp: {
    color: "#4B4D4C",
    fontSize: 16,
    textAlign:"center",
     
  }
});

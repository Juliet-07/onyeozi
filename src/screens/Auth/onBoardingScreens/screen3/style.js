import { StyleSheet } from "react-native";
import { colors } from "../../../../config/colors/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  skip: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 19,
    alignSelf: "flex-end"
  },
  imagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  greatservice: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: "#4B4D4C",
    lineHeight: 19
  },
  arrowView: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between"
  },
  arrowNumber: {
    flexDirection: "row"
  },
  number: {
    color: "#1976D2",
    fontWeight: "bold",
    fontSize: 16
  },
  arrowright: {
    color: colors.primary,
    fontSize: 20
  },
  arrowleft: {
    color: colors.primary,
    fontSize: 20
  }
});

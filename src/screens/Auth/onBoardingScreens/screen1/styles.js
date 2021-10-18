import { StyleSheet } from "react-native";
import { colors } from "../../../../config/colors/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  skip: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 19,
    alignSelf: "flex-end",
  },
  imagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  doordelivery: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    color: "#4B4D4C",
    lineHeight: 19,
  },

  arrowView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 0,
  },
  number: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 29,
  },
  frontarrow: {
    color: colors.primary,
    fontSize: 20,
  },
});

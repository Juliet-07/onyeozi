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

  track: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30
  },
  text: {
    fontSize: 16,
    color: "#4B4D4C",
    lineHeight: 19
  },
  arrowView: {
    backgroundColor: "green"
  },
  arrowView: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red"
  },
  numberArrow: {
    flexDirection: "row"
  },
  number: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16
  },
  frontarrow: {
    color: colors.primary
  },

  backarrow: {
    color: colors.primary,
    fontSize: 20
  },
  frontarrow: {
    color: colors.primary,
    fontSize: 20
  },
  numberArrow: {
    flexDirection: "row"
  }
});

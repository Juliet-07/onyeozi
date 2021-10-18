import { StyleSheet } from "react-native";
import { elevationShadowStyle } from "../../utils/elevationStyle";
export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginVertical: 5,
    alignItems: "center",
  },
  card: {
    // height: 200,
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    ...elevationShadowStyle(5),
    borderRadius: 20,
  },
  NumberOfTransactionContainer: {
    backgroundColor: "#1976D2",
    height: 60,
    borderRadius: 70,
    width: 60,
    justifyContent: "center",
    alignItems: "center",

    color: "#FFFFFF",
  },
  NumberOfTransaction: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 45,
  },
  writeUpContainer: {
    marginLeft: 20,
    alignItems: "center",
  },
  writeUp: {
    color: " rgba(75, 77, 76, 0.4);",
    width: 140,
    fontSize: 20,
  },
  line: {
    height: 1,
    backgroundColor: "rgba(75, 77, 76, 0.4);",
    marginTop: 12,
  },
  picture: {
    height: 60,
    width: 60,
  },
  secondPartOfHeader: {
    marginTop: 12,
  },
  parcelNumber: {
    fontSize: 17,
    color: "#4B4D4C",
  },
  parcelNumber1: {
    fontSize: 18,
    color: "#4B4D4C",
    fontWeight: "bold",
  },
  parcelNumber2: {
    fontSize: 17,
    color: "#4B4D4C",
  },
});

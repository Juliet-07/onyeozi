import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    margin: 20,
  },
  notify: {
    color: "#1976D2",
    fontWeight: "bold",
    lineHeight: 29,
    fontSize: 16,
    marginLeft: 60,
  },
  image: {
    height: 200,
    width: 200,
    margin: 30,
    alignSelf: "center",
  },
  notices: {
    color: "#4B4D4C",
    fontWeight: "bold",
    lineHeight: 29,
    fontSize: 24,
    alignSelf: "center",
    textAlign: "center",
  },
  details: {
    alignSelf: "center",
    textAlign: "center",
    maxWidth: 500,
  },
  edit: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    padding: 20,
  },
});

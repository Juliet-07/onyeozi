import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerText: {
    fontSize: 13,
    padding: 10,
    fontWeight: "bold",
    marginTop: 30
  },
  homeAddress: {
    flexDirection: "row",
    borderBottomWidth: 1,
    marginTop: 25,
    marginBottom: 5,
    height: 40,
    justifyContent: "space-between"
  },
  leftIcon: {
    fontSize: 16,
    paddingLeft: 7,
    color: "#00000080"
  },
  workAddress: {
    flexDirection: "row",
    borderBottomWidth: 1,
    height: 40,
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5
  },
  otherAddress: {
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    marginTop: 10
  },
  buttonView: {
    marginTop:170
  },
  button: {
    borderWidth: 2
  }
});

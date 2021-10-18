import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: " rgba(0, 0, 0, 0.09)",
    elevation: 15,
    borderColor: "#E5E5E5",
    height: 65,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  stagesOfOrder: {
    color: "#1976D2",
    fontWeight: "bold",
    fontSize: 24,
    padding: 20,
  },
  stagebar: {
    height: 25,
    width: 120,
    shadowColor: " rgba(0, 0, 0, 0.09)",
    borderColor: "#E5E5E5",
    elevation: 5,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: "green",
    flexDirection: "row",
  },
  stagebar1: {
    backgroundColor: "red",
    flex: 1,
  },
  stagebar2: {
    backgroundColor: "yellow",
    flex: 2,
  },
});

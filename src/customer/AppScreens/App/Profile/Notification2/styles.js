import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notification: {
    color: "#1976D2",
    fontWeight: "bold",
    lineHeight: 29,
    fontSize: 24,
    left: 20,
    top: 40,
    right: 20,
  },
  notify: {
    color: "#4B4D4C",
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 16,
    top: 63,
    right: 20,
    left:90,


  },
  date:{
    top: 60,
    right: 20,
    lineHeight: 20,
    fontSize: 14,
    borderBottomColor:'black',
    borderBottomWidth:1,
    left:90,
    width:"80%",                                                                       


  },
  image: {
    height: 300,
    width: 300,
    top: 50,
    alignSelf: "center",
  },
  notices: {
    color: "#4B4D4C",
    fontWeight: "bold",
    lineHeight: 29,
    fontSize: 24,
    alignSelf: "center",
    textAlign: "center",
    top: 80,
  },
});

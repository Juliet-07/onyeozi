import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  pend: {
    height: 140,
    width: 320,
    backgroundColor: "#EFEFEF",
    marginLeft: 20,
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  pen: {
    height: 50,
    width: 320,
    backgroundColor: "#FFC107",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: "#4B4D4C",
  },
  complet: {
    height: 140,
    width: 320,
    backgroundColor: "#EFEFEF",
    marginLeft: 20,
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 10,
    lineHeight: 12,
  },
  done: {
    height: 50,
    width: 320,
    backgroundColor: "#1976D2",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: "#4B4D4C",
  },
  process: {
    width: "90%",
    alignSelf: 'center',
    backgroundColor: "#EFEFEF", 
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 10,
    lineHeight: 12,
  },
  pro: { 
    backgroundColor: "#1976D2",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: "#4B4D4C",
    fontSize: 10,
    lineHeight: 12,
    paddingVertical: 5
  },
  parcelNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    lineHeight: 24,
  },
  date: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 10,
    lineHeight: 24,
  },
  details: {
    flex: 1,
    alignSelf: "flex-start",
    marginLeft: 15,
    color: "#4B4D4C",
    // marginTop: 10,
    fontSize: 10,
    lineHeight: 12,
    paddingVertical: 5
  },
  location: {
    fontWeight: "bold",
    color: "#4B4D4C",
    fontSize: 10,
    lineHeight: 12,
  },
  time: {
    alignItems: "flex-end",
    color: "#4B4D4C",
    marginTop: -100,
    left: 190,
    fontSize: 10,
    lineHeight: 12,
  },
  assigned: {
    color: "#1976D2",
    bottom: 40,
    left: 190,
    fontSize: 10,
    lineHeight: 12,
  },
  del: {
    color: "#4B4D4C",
    left: 190,
    bottom: 80,
    fontSize: 10,
    lineHeight: 12,
  },
  delivered: {
    margin: 10,
    left: 182,
    bottom: 80,
    fontSize: 10,
    lineHeight: 12,
    color: "#1976D2",
  },
});

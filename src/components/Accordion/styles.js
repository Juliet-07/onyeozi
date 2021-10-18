import { StyleSheet } from "react-native";
import theme  from "../../config/theme"

export const styles = StyleSheet.create({
  AccordionContainer1: {
    backgroundColor: "white",
    paddingLeft: 19,
    paddingRight: 19,
    marginTop: 18
  },
  TitleContainer: {
    height: 45,
    backgroundColor: theme.baseColor,
    borderRadius: 1,
    justifyContent: "center"
  },
  TitleContainerText: {
    color: "#FFFFFF",
    fontSize: 18,
    padding: 5
  },
  TextContainer: {
    flexDirection: "row",
    height: 35,
    width: "90%",
    borderRadius: 0,
    alignSelf: "center",
    marginTop: 5,
    justifyContent: "space-between"
  },
  iconContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    backgroundColor: "#ffffff"
  },
  icon: {
    color: "#1976D2",
    fontSize: 13
  },
  FullNameContainer: {
    backgroundColor: "#EFEFEF",
    marginTop: 12,
    flexDirection:"row",
    alignItems:"center",
    // justifyContent:"space-between"
  },
  
  FullName: {
    backgroundColor: "#EFEFEF",
    height: 45,
    marginLeft: 20,
    width:"80%",

    fontSize: 16,
    textAlignVertical: "center"
  },
  AddressContainer: {
    backgroundColor: "#EFEFEF",
    marginTop: 12,
    flexDirection:"row",
    alignItems:"center",
    // justifyContent: "center"
  },
  Address: {
    backgroundColor: "#EFEFEF",
    height: 45,
    marginLeft: 20,
    width:"80%",
    fontSize: 16,
    textAlignVertical: "center"
  },
  NumberContainer: {
    backgroundColor: "#EFEFEF",
    marginTop: 12,
    alignItems:"center",
    flexDirection:"row",
    // justifyContent: "center"
  },
  Number: {
    backgroundColor: "#EFEFEF",
    height: 45,
    marginLeft: 20,
    width:"80%",

    fontSize: 16,
    textAlignVertical: "center"
  }
});

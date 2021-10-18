import { StyleSheet } from "react-native";
import { colors } from "../../../../../config/colors/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  container2: {
    padding: 20,
    alignSelf:"center",
    maxWidth:500,
    width:"100%"

    
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 0,
    color: colors.primary,

  },
  message: {
    fontSize: 15,
    marginTop: 20,
    lineHeight: 20
  },
  input1: {
       maxWidth:500
  },
  input2: {
    maxWidth:500
  },
  input3: {
    maxWidth:500
  },
  insure: {
    flexDirection: "row",
    marginTop: 0,
    marginBottom:15
  },
  insureText: {
    fontSize: 16,
    lineHeight: 45,
    marginTop: 5
  },
  button: {
    height: 50,
    margin: 15
  },
  image: {
    fontSize:15,
    margin: 10,
    lineHeight:19
  },
  icon: {
    width: 30,
    height: 30,
    fontSize: 22,
    marginTop: 16,
    marginLeft: 5
  },
  
  uploadImage:{
      width:140,
      height:120,
      borderStyle:"dashed",
      borderWidth:2,
      borderRadius:10,
      borderColor: colors.primary,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:15
  },
  //Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContaioner: {
    backgroundColor: "#ffffff",
    height: 225,
    width: 300,
    borderRadius: 20,
    elevation: 50,
    padding: 5,
    alignItems: "center"
  },
  ModalTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold"
  },
  Text: {
    alignItems: "center",
    marginTop: 10,
    width: "80%",
    fontSize: 16,
    justifyContent: "center"
  },
  Moadlbutton:{
    fontSize:20,
    marginTop: 10,
    fontWeight:"bold",
    color:"#1976D2"
  },
  Cancel:{
    
    width:"70%",
    alignItems:"flex-end"
  }
});

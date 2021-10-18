import { StyleSheet } from "react-native";
import {colors} from "../../../../../config/colors"


export const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:20,
    paddingVertical: 20,
    alignItems:"center",
    justifyContent: 'center',
    
  },
  picture: {
    marginTop:30,
    maxWidth:500,
    maxHeight:200,
    resizeMode:"contain"
    
  },
  text1: {
    fontWeight: "bold",
    fontSize:20,
    color: "#4B4D4C",
    textAlign: 'center'
  },
  text: {
    fontSize:17,
    marginTop:5,
    color: "#4B4D4C",
    textAlign: 'center'
  },
  icon: {
    
    fontSize:65,
    color:colors.secondary
  },
  message:{
    marginTop:39,
    alignItems:"center"
  },



  // btn
  cont: { position: "absolute", bottom: 20, right: 10 },
  add_btn: { 
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f8bd17",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  float: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 12, top: 12, textAlign: "center" },
});

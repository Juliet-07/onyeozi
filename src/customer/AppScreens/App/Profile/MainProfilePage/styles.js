import { StyleSheet } from "react-native";
import theme from "../../../../../config/theme"


export const styles = StyleSheet.create({
  image: {
    height: "60%",
    width: 400,
    alignSelf: "center",
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  profileIcon:{
    backgroundColor:"white",
    bottom: 300,
    width:64,
    height:65,
    justifyContent: 'center',
    alignItems:"center",
    alignSelf: "center",
    borderRadius: 50
  },
  text: {
    bottom: 280,
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "bold",
    borderColor: "grey"
  },
  point: {
    bottom: 335,
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    left: 90,
    fontWeight: "bold"
  },
  total: {
    bottom: 250,
    right: 90,
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "bold"
  },
  Bttn: {
    alignItems: "center",
    bottom: 210,
    
  },
  button:{
    backgroundColor:"white",
    borderWidth: 1,
    elevation:1,
    borderColor:"transparent"

  },
  Bttn2: {
    alignItems: "center",
    bottom: 255
  },
  Bttn3: {
    bottom: 299,
    height: 120,
    alignItems: "center"
  },
  //Modal stylings
  ModalContainer:{
    justifyContent:"flex-end",
    flex:1,
    backgroundColor:'rgba(75, 77, 76, 0.8)'
  },
  
  transactionCard:{
    backgroundColor:"#ffffff",
    height:280,
    elevation:90,
    borderTopLeftRadius:22,
    borderTopRightRadius:33
  },
  containerModalText:{
    alignItems:"center",
    marginTop:22,
    justifyContent:"center",
  },
  ModalText:{
    alignItems:"center",
    textAlign:"center",
    width:"70%",
    fontSize:16
  },
  buttonContainer1:{
    marginTop:22,
    alignItems:"center"

  },
  btnCustomer1:{
    backgroundColor:"#EFEFEF",
    color:'green',
  },
  titleStyle:{
    color:theme.black,
  },
  buttonContainer2:{
    marginTop:22,
    alignItems:"center"
  }



});

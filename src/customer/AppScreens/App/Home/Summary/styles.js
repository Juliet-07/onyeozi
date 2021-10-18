import { StyleSheet } from "react-native";
import theme from "../../../../../config/theme"

export const styles = StyleSheet.create({
  
  
  TitleText:{
    color:"#1976D2",
    fontSize:24,
    fontWeight:"bold",
    marginTop:20,
    marginLeft:30,
    lineHeight:30
  },
  containerPaymentDetail:{
    alignItems:"center",
    marginTop:22,

  },
  Payment:{
    fontSize:24,
    fontWeight:"bold",
    width:"86%",
    color:theme.baseColor
  },
  deliverycharge:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  deliveryandPayable:{
    fontWeight:"bold",
    width:"86%",
    
  },
  containerButton:{
    marginBottom: 100,
    marginTop: 40,
    height: 150,
    width:350,
    padding: 16,
    alignSelf: 'center',
    alignItems:"center"
  },

  //Modal 
  

  modalContainer:{
    backgroundColor:"rgba(75, 77, 76, 0.9)",
    flex:1,
    justifyContent:"flex-end"
  },
  modalcardContainer:{
    height:400,
    justifyContent:"center",
    borderTopRightRadius:42,
    borderTopLeftRadius:42,
    backgroundColor:"#ffffff"
  },
  transactionCards:{
    height:"80%",
    alignItems:"center"
  },
  transactioncard1:{
    height:40,
    width:42,
    borderRadius:5,
    // backgroundColor:"red",
    justifyContent: 'center',
    alignSelf:"center"
  },
  transactioncard:{
    height:42,
    width:42,
    alignSelf:"center"

  },
  ModalText:{
    fontSize:20,
    fontWeight:"bold",
    width:"70%",
    justifyContent:"center",
    height:19,
    marginTop:18,
    alignSelf:"center",
    
  
  },
  Text:{
    
    width:"80%",
    height:50,
    alignSelf:"center",
  },
  card1:{
    backgroundColor:"#F7F7F7",
    
  }

});
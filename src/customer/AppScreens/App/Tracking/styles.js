import { StyleSheet, ImageBackground } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 600
    ,  
    
  },
  ImageBackground: {
    height: 420,
  },
  tracking: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 65,
    
  },
  map:{
    height:290,
     width:290
  },
  card: {
    height: 180,
    backgroundColor: "#FFFFFF",
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    bottom: 110,
    borderRadius: 10,
    elevation: 20
  },
  input:{
    borderWidth:1,
    // backgroundColor:"red"
  },
  button:{
    marginTop:10,
    flexDirection:"row"
  },
  
  Applies:{
    color:"rgba(75, 77, 76, 0.4)"
  }

});

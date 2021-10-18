import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notify:{
      color:'#1976D2',
      fontWeight:'bold',
      lineHeight:29,
      fontSize:24,
      left:20,
      top:20,
      bottom:20,
      right:20,
  },
  image: {
      height:300,
      width:300,
      top:50,
    alignSelf: "center",
  },
  notices:{
    color:'#4B4D4C',
    fontWeight:'bold',
    lineHeight:29,
    fontSize:24,
    alignSelf: "center",
    textAlign:'center',
    top:80,


  },
  edit: {
    alignItems: "center",
    top:110,
  },
});

import { StyleSheet } from "react-native";
import theme from "../../../config/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    fontSize: 23,
    color: theme.primary,
  },
  
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },

  buttonView:{
    alignItems:"center",
    
  },
  btnCustomer1: {
    margin: 10,
    fontSize:20,
    
    backgroundColor: theme.secondary,
  },
  lastText:{
    flexDirection:"row",
    margin:20,
    height:50,
    alignItems:"center"
  },

});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  headerContainer: {
    padding: 0,
    flex: 1
  },
  stagesOfOrder: {
    color: "#1976D2",
    flex: 1.6,
    padding: 18,
    justifyContent: "center"
  },
  inputs:{
    maxWidth:500,
    alignItems:"center",
    
  },
  InputContainer: {
    width: "95%",
    flex: 1,
    padding: 10,
    alignSelf: "center",
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    marginBottom: 20
  },
  Title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1976D2"
  },

  InputFormContainer: {
    marginTop: 20,
    width: "95%"
  }
});

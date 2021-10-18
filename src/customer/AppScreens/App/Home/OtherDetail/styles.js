import { StyleSheet } from "react-native";
import { colors } from "../../../../../config/colors/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  container2: {
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    color: colors.primary
  },
  message: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 20
  },
  input1: {
    marginTop: 20
  },
  input2: {
    marginTop: 0
  },

  insure: {
    flexDirection: "row",
    marginTop: 10
  },
  insureText: {
    fontSize: 16,
    lineHeight: 45,
    marginTop: 5
  },
  button: {
    height: 90,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center"
  },
  icon: {
    width: 30,
    height: 30,
    fontSize: 22,
    marginTop: 16,
    marginLeft: 5
  },
  uploadImage: {
    marginTop: 20,
    alignItems: "center"
  },
  subView: {
    width: 140,
    height: 120,
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },

  //Modal styling
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(75, 77, 76, 0.8)'
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
    textAlign:"center",
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

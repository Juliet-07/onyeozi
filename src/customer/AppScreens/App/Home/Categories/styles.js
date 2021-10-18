import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Title: {
    fontSize: 30,
    color: "#1976D2",
    fontWeight: "bold",
    marginBottom: 20,
    paddingHorizontal: 20
  },
  Containerexclamation: {
    flexDirection: "row",
    marginBottom: 20,
    flexWrap: "wrap",
    paddingHorizontal: 20,
   
  },
  subTitle: {
    color: "#4B4D4C",
    fontSize: 14,
    lineHeight: 15
  },

  picture: {
    fontSize: 45,
    marginRight: 10
  },
  // KCardContainer: {
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  //   alignItems:"center"
    
  // },
  CardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  
    alignItems:"center",
    justifyContent: "center"
  },

  image: {
    height: 60,
    width: 60,
    resizeMode: "contain"
  },
  Addmore: {
    fontSize: 100,
    color: "#1976D2",
    width: 100,
    flexDirection: "column",
    
  },

  buttonContainer: {
    marginTop: 20,
    height: 250,
    marginBottom: 20,
    alignItems: "center"
  },
  card: {
    width: 120,
    height: 110,
    borderRadius: 12,
    elevation: 5,
    marginLeft: 20,
    // marginTop: 15,
    // marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

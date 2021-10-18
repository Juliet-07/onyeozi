import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import MainView from "../../../../components/Layouts/MainView";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";
const index = ({ navigation }) => {
  const [verification, setVerification] = useState(null);

  const checkVerification = async () => {
    let verify;
    try {
      const veri = await AsyncStorage.getItem("verify");
      verify = veri;
    } catch (e) {
      ShowMessage(type.ERROR, e.toString());
    }
    setVerification(verify);
    if (verify) return navigation.navigate("VerifyAccount");
  };

  useEffect(() => {
    checkVerification();
  }, []);

  const check = () => {
    if (verification) {
      return "VerifyAccount";
    } else {
      return "CreateAccount";
    }
  };
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("../../../../assets/panadoor.png")}
          />
          <Text style={styles.doordelivery}>Door-to-door Delivery </Text>
          <Text style={styles.text}>
            We pick from your doorstep and deliver {"\n"}to your recipient’s
            doorstep as well
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("OnBoardingScreen2")}
        >
          <View style={styles.arrowView}>
            <Text style={styles.number}>1/3</Text>
            <AntDesign name="arrowright" style={styles.frontarrow} />
          </View>
        </TouchableOpacity>
      </View>
    </MainView>
  );
};
export default index;

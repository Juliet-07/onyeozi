import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import MainView from "../../../../components/Layouts/MainView";
import FlexView from "../../../../components/Layouts/FlexView";

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
        <TouchableOpacity onPress={() => navigation.navigate(check())}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("../../../../assets/screen2.png")}
          />
          <Text style={styles.track}>Trace Your Order </Text>
          <Text style={styles.text}>
            Monitor your package on the fly in-app.{"\n"}You can change delivery
            destination{"\n"}en-route.
          </Text>
        </View>
        <FlexView justifyContent="space-between">
          <TouchableOpacity
            onPress={() => navigation.navigate("OnBoardingScreen1")}
          >
            <AntDesign name="arrowleft" style={styles.backarrow} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("OnBoardingScreen3")}
            style={styles.numberArrow}
          >
            <Text style={styles.number}>2/3</Text>
            <AntDesign name="arrowright" style={styles.frontarrow} />
          </TouchableOpacity>
        </FlexView>
      </View>
    </MainView>
  );
};
export default index;

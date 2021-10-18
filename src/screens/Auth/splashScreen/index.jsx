import React, {useEffect, useState} from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import ShowMessage, {type} from '../../../components/showMessage';
const FirstScreen = ({ navigation }) => {
  const [verification, setVerification] = useState(null)

  const checkVerification = async () => {
    let verify;
    try {
        const veri = await AsyncStorage.getItem('verify'); 
        verify = veri 
    }catch(e){ 
      ShowMessage(type.ERROR, e.toString())
    }
    setVerification(verify)
    if(verify) return navigation.navigate("VerifyAccount")
  };

  useEffect(() => {
    checkVerification();
  }, []);

  const check =() => { 
    if(verification){
      return "VerifyAccount"
    }else {
      return "CreateAccount"
    }
  } 
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("OnBoardingScreen1")}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
export default FirstScreen;

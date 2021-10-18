import React, {useEffect, useState} from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";
import MainView from "../../../../components/Layouts/MainView";
import FlexView from "../../../../components/Layouts/FlexView";
import ShowMessage, {type} from '../../../../components/showMessage';
const GreatService = ({ navigation }) => {
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
    <MainView scrollable>
          <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(check())}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.imagecontainer}>
      <Image
        style={styles.image}
        source={require("../../../../assets/panalast.png")}
      />
      <Text style={styles.greatservice}>Great Service </Text>
      <Text style={styles.text}>
        We offer great customer service{"\n"}in addition to loyalty bonuses.
      </Text>


      </View>
     
      <FlexView justifyContent= 'space-between'>
        <TouchableOpacity
          onPress={() => navigation.navigate("OnBoardingScreen2")}
        >
          <AntDesign name="arrowleft" style={styles.arrowleft} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(check())} style={styles.arrowNumber}>
          <Text style={styles.number}>3/3</Text>
          <AntDesign name="arrowright" style={styles.arrowright}/>
        </TouchableOpacity>
      </FlexView>
    </View>
    </MainView>
  );
};
export default GreatService;

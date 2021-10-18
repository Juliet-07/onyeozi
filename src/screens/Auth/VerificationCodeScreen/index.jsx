import React, { useEffect, useState, useContext } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Obutton } from "../../../components/ButtonCustom/index";
import CodeInput from "react-native-confirmation-code-input";
import { styles } from "./styles";
import { useMutation } from "@apollo/client";
import { VERIFY_ACCOUNT } from "../../../gql/auth/mutations";
import AsyncStorage from "@react-native-community/async-storage";
import ShowMessage, {type} from '../../../components/showMessage';
import {AuthContext} from '../../../context/authContext';
const Validation = ({ navigation }) => {
  const {verification} = useContext(AuthContext)
  const [state, setState] = useState({
    value: "",
    email: "",
  });
  const [value, setValue] = useState('')
  useEffect(() => {
    const getVerify = async () => {
      // await AsyncStorage.removeItem("verify");
      const email = await AsyncStorage.getItem("verify");
      console.log(email, 'emiall')
      if (email) {
        return setState({
          ...state,
          email,
        });
      }
    };
    getVerify();
  }, []);
  const { navigate } = navigation;
  const handleVerification = async () => {
    console.log(value, 'jjjjj')
    const data = {
      verificationCode: value && value.toString(),
      email: state.email,
    };
    await verifyCustomer({
      variables: {
        data,
      },
    }).then(async (res) => { 
      const token = res.data.verifyCustomer.token;
      const accountType = res.data.verifyCustomer.userAccountType
      verification(token,accountType);
      ShowMessage(type.DONE, "Successfully Verified!")
    })
    .catch((e) => ShowMessage(type.ERROR, e.toString()));;
  }; 
  const [verifyCustomer, { loading, error }] = useMutation(VERIFY_ACCOUNT);
   
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Text style={styles.Verify}>Verify Your Account</Text>
          <Image
            style={styles.image}
            source={require("../../../assets/pana11.png")}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text style={styles.text}>
            We have sent an OTP to your email.{"\n"}Please enter the 4-digit
            code sent to{"\n"}you in the field below
          </Text>
        </View>

        <View style={{ marginTop: 35, alignItems: "center" }}>
          <CodeInput
            space={4}
            size={60}
            codeInputStyle={{
              backgroundColor: "#E5E7E6",
              borderBottomColor: "#1976D2",
              borderBottomWidth: 4,
              color: "black",
            }}
            codeLength={4}
            keyboardType="number-pad"
            activeColor="transparent"
            inactiveColor="transparent"
            inputPosition="left"
            onFulfill={(code) => {
              console.log(code, 'code')
              setValue(code)
            }}
          />
        </View>
        <View style={styles.buttonView}>
          <Obutton
          loading={loading}
          disabled={loading}
            title="Verify"
            buttonStyle={styles.button}
            onPress={() => handleVerification()}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Validation;

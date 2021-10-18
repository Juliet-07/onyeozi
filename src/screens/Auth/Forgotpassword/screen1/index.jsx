import React, { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Obutton } from "../../../../components/ButtonCustom/index";
import { styles } from "./styles";
import { InputPlain } from "../../../../components/InputCustom/index";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import theme from "../../../../config/theme";
import * as yup from "yup";
import MainView from "../../../../components/Layouts/MainView";
import FlexView from "../../../../components/Layouts/FlexView";
const index = ({ navigation }) => {
  const { navigate } = navigation;
  const [values, setValues] = useState("");

  return (
    <View style={styles.container}> 
        <FlexView justifyContent="flex-start">
          <Text style={styles.forgotten}>Forgot Password ?</Text>
        </FlexView>
     
      <View style={{alignItems: 'center', justifyContent: 'center', width: '80%',flexDirection: 'column'}}>
      <Image
        style={styles.body}
        source={require("../../../../assets/forgotpassword.png")}
      />
      <Text style={styles.message}>
        We will send a password reset link to your email address to get you back
        into your existing account.
      </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "85%" }}>
          <FlexView>
            <InputPlain
              name="Email"
              label="Email"
              keyboardType="email-address"
              value={values}
              onChangeText={(text) => setValues(text)}
              inputContainerStyles={styles.input}
              rightIcon={
                <EvilIcons
                  name="envelope"
                  color="#00000080"
                  size={theme.iconSize}
                />
              }
            />
          </FlexView>
        </View>
        <FlexView>
          <Obutton
            title="Send Code"
            // disabled={true}
            type="outline"
            onPress={() => navigate("ForgotPassword2")}
            buttonStyle={styles.btnStyle}
          />
        </FlexView>
      </View>
    </View>
  );
};
export default index;

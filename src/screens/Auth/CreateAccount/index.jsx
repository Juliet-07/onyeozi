import React from "react";

import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Obutton } from "../../../components/ButtonCustom";

const index = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    // <ScrollView>
      <View style={styles.container}> 

        <Image
          style={styles.picture}
          source={require("../../../assets/Auth.png")}
        />

        <View style={styles.login}>
          <View>
          <View style={{height:70}}>
          <Obutton
              title="Login"
             
              onPress={() => navigate("Signin")}
              buttonStyle={styles.button1}
            />
          </View>
            <Obutton
              buttonStyle={styles.button2}
              title="Create Account"
              titleStyle={{ color: "black",}}
              onPress={() => navigate("AccountType")}
            />
          </View>
        </View>

        <View style={styles.policyFotter}>
          <Text>By proceeding, you agree to our</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text>Terms of Service</Text>
            </TouchableOpacity>
            <Text>and</Text>
            <TouchableOpacity>
              <Text>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    // </ScrollView>
  );
};
export default index;

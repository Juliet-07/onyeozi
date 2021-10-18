import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { Obutton } from "../../../components/ButtonCustom/index";
import { styles } from "./styles";
import MainView from "../../../components/Layouts/MainView";
import FlexView from "../../../components/Layouts/FlexView";

const index = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Account Type</Text>

      <View style={styles.imagecontainer}>
        <Image
          source={require("../../../assets/accountType.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.buttonView}>
        <Obutton
          title="Customer's account"
          titleStyle={styles.titleCustomer}
          onPress={() => navigate("Signup", {
            accountType: 'customer'
          })}
        />
        <Obutton
          title="Driver's account"
          buttonStyle={styles.btnCustomer1}
          titleStyle={styles.titleCustomer1}
          onPress={() => navigate("Signup", {
            accountType: 'driver'
          })}
        />
      </View>

      <FlexView>
        <Text style={styles.wordd}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate("Signin")}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </FlexView>
    </View>
  );
};
export default index;

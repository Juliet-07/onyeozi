import React from "react";
import { ScrollView, View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import CodeInput from "react-native-confirmation-code-input";
import MainView from "../../../../components/Layouts/MainView";
import FlexView from "../../../../components/Layouts/FlexView";
import { Obutton } from "../../../../components/ButtonCustom/index";

const index = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <MainView scrollable>
      <Text style={styles.headerText}>Forgot Password?</Text>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../../../../assets/pana12.png")}
        />
        <Text style={styles.alert}>Password reset code sent!</Text>

        <Text style={styles.word}>
          Enter the 4-digit code sent to you in the{"\n"}field below.If you
          don't receive any mail{"\n"}from us within 5 minutes, please check
          {"\n"}your SPAM folder
        </Text>
      </View>

      <View style={styles.codeInputContainer}>
        <CodeInput
          space={4}
          size={60}
          codeInputStyle={{
            backgroundColor: "#E5E7E6",
            borderBottomColor: "#1976D2",
            borderBottomWidth: 4,
            color: "black"
          }}
          codeLength={4}
          keyboardType="number-pad"
          activeColor="transparent"
          inactiveColor="transparent"
          inputPosition="left"
        />
      </View>
      <View style={styles.verify}>
        <Obutton
          title="Verify"
          titleStyle={{fontSize:18}}
          buttonStyle={styles.button}
          onPress={() => navigate("ForgotPassword3")}
        />
      </View>

      <FlexView style={styles.lastText}>
        <Text style={styles.wordd}>Not yet received?</Text>
        <TouchableOpacity>
          <Text style={styles.resend}>Resend code</Text>
        </TouchableOpacity>
      </FlexView>
    </MainView>
  );
};
export default index;

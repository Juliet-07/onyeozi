import React, { useState } from "react";
import { InputPlain } from "../../../../../components/InputCustom/index";
import { View, Text } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { styles } from "./styles";
import theme from "../../../../../config/theme/index";
import { Obutton } from "../../../../../components/ButtomCustom/index";

const AddressInput2 = () => {
  const [typed, setTyped] = useState("");
  return (
    <View style={styles.container}>
      <InputPlain
        name="Address"
        value={typed}
        onChangeText={text => setTyped(text)}
        inputContainerStyles={styles.input}
        rightIcon={
          <EvilIcons name="search" color="white" size={theme.iconSize} />
        }
      />
      <View style={styles.buttonView}>
        <Obutton
          title="Select from Map"
          titleStyle={{ fontSize: 20 }}
          type="outline"
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};
export default AddressInput2;

import React from "react";
import {Text, View} from "react-native";
import { styles } from "./styles";


const Header = ({ Title, stagebar,titleStyle,  }) => {
  return (
    <View>
      <View titleStyle={titleStyle} style={styles.header}>
        <Text style={styles.stagesOfOrder}>{Title}</Text>
        <View style={styles.stagebarContainer}>
          {/* <Text style={styles.stagebar}>
            {stagebar}
          </Text> */}
        </View>
      </View>
    </View>
  );
};
export default Header;

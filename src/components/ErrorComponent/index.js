import React from 'react';
import { Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const index = ({message}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MaterialIcons name="error" size={50} color='red'/>
      <Text>{message ? message : 'Ooops! There was an error!'}</Text>
    </View>
  );
};

export default index;
import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

 const index = ({otherColor}) => (
  <View style={styles.container}>
    <ActivityIndicator
      size="large"
      color={otherColor ? otherColor : '#0753AB'}
    />
  </View>
);

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

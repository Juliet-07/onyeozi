import {StyleSheet} from 'react-native';
import {elevationShadowStyle} from '../../utils/elevationStyle';
export const styles = StyleSheet.create({
    inputContainer: {
      // backgroundColor: '#f5f5f5',
      // backgroundColor:"green",
      borderRadius: 3,
      // borderBottomWidth: 0,
      paddingHorizontal: 10,
      // height: 48,
      backgroundColor: '#fff',
      borderWidth: .7,
    // ...elevationShadowStyle(3),
    // width:320,
    },
    errorMessage: {
      position: "absolute",
      color: 'red',
      paddingBottom: 10,
      fontSize: 13,
      // marginTop: 20
      bottom: -3
    },
    container: {
      // height: 42,
      paddingHorizontal: 0,
      borderRadius: 3,
      marginBottom: 3,
      // backgroundColor:"purple",
    },
    main:{
      position: "relative",
      // backgroundColor:"pink",
      marginBottom: 10
      
    }
  });
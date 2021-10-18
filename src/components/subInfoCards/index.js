import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {styles} from './styles';
const index = ({title, body}) => {
  return (
    <View style={{marginTop: 30,marginBottom: 10, alignSelf: 'center', width:"80%", justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.Title}>{title}</Text>
          <View style={styles.Containerexclamation}>
              <FontAwesome
                name="exclamation-circle"
                style={styles.icon}
              />
            <Text style={styles.subTitle}>
              {body}
            </Text>
          </View>
        </View>
  )
}

export default index
 

import React from "react";
import {
View,
Text,
TouchableOpacity
} from "react-native"
import {styles} from "./styles"
import  PopUpOvaryCard from "../../../../../components/PopUpOvaryCard"
const NotificationOverLay=({
    navigation
})=>{
    // const {navigate} = navigation
    return(
        <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
    
                <PopUpOvaryCard
                Notification1="Notification 1"
                Notification2="Your parcel has successfully been  "
                Notification3=" delivered to the destination address. "
                Notification4=" Kindly contact the other party to "
                Notification5="  confirm delivery.. Make your confirmation through email. Check your email now.
                "
                Notification6="OK,GOT IT"
                
                // onPress={()=>  navigation.navigate("Signup")}
                />
                
            

        </View>
    )
}
export default NotificationOverLay;
import React from "react";
import {
View,
Text,
TouchableOpacity
} from "react-native"
import {styles} from "./styles"
import  PopUpOvaryCard from "../../../../../components/PopUpOvaryCard"
const LiveLocationTip=({
    navigation
})=>{
    // const {navigate} = navigation
    return(
        <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
    
                <PopUpOvaryCard
                Notification1="Quick Tips"
                Notification2="

                The areas marked red shows the
                particular area your parcel deliver
                has gotten to. The red
                 line shows the movement of  the vehicle."
                Notification6="OK, GOT IT"
                
                // onPress={()=>  navigation.navigate("Signup")}
                />
                
            

        </View>
    )
}
export default LiveLocationTip;
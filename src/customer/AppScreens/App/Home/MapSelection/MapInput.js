import React from "react"
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import Geolocation from "react-native-geolocation-service"

const MapInput = () =>{
    return(
        <GooglePlacesAutocomplete
            placeholder="Type Here..."
            minLength={2}
            autoFocus={false}
            returnKeyType={"default"}
            fetchDetails={true}
            onPress={(data, details = null)=>{
                console.log(data, details)
            }}
            query={{
                key:"AIzaSyCcP7Y6_fO78Rnitq0u8vlnzngNVStQOKw",
                language:"en"
            }}
            currentLocation={true}
            currentLocationLabel="Current Locations"
            styles={{
                textInputContainer: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  height: 38,
                  color: '#5d5d5d',
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
              }}
        />
    )
}
export default MapInput
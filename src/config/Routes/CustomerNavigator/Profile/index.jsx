import React from "react"; 
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import Profile from "../../../../customer/AppScreens/App/Profile/MainProfilePage";
import EditProfile from "../../../../customer/AppScreens/App/Profile/EditProfile"; 
import ChangePassword from "../../../../customer/AppScreens/App/Profile/ChangePassword"
import Settings from '../../../../customer/AppScreens/App/Profile/OtherSettings';

const index = () => ( 
  <Navigator  headerMode="none" initialRouteName="Profile" >
    <Screen name="Profile" component={Profile} />
    <Screen name ="EditProfile" component={EditProfile}/>
    <Screen name="ChangePassword" component={ChangePassword}/>
    <Screen name="Settings" component={Settings}/>
  </Navigator> 
);
export default index;


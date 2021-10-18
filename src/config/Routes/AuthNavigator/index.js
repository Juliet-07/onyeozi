import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();
import SplashScreen from "../../../screens/Auth/splashScreen";
import OnBoardingScreen1 from "../../../screens/Auth/onBoardingScreens/screen1";
import OnBoardingScreen2 from "../../../screens/Auth/onBoardingScreens/screen2";
import OnBoardingScreen3 from "../../../screens/Auth/onBoardingScreens/screen3";
import CreateAccount from "../../../screens/Auth/CreateAccount";
import Signin from "../../../screens/Auth/Signin";
import ForgotPassword1 from "../../../screens/Auth/Forgotpassword/screen1";
import ForgotPassword2 from "../../../screens/Auth/Forgotpassword/screen2";
import ForgotPassword3 from "../../../screens/Auth/Forgotpassword/screen3";
import AccountType from "../../../screens/Auth/AccountType";
import Signup from "../../../screens/Auth/Signup";
import VerifyAccount from "../../../screens/Auth/VerificationCodeScreen";

const AuthStackScreens = () => {
  return (
    <Navigator headerMode="none" initialRouteName="SplashScreen" >
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="OnBoardingScreen1" component={OnBoardingScreen1} />
      <Screen name="OnBoardingScreen2" component={OnBoardingScreen2} />
      <Screen name="OnBoardingScreen3" component={OnBoardingScreen3} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="Signin" component={Signin} />
      <Screen name="ForgotPassword1" component={ForgotPassword1} />
      <Screen name="ForgotPassword2" component={ForgotPassword2} />
      <Screen name="ForgotPassword3" component={ForgotPassword3} />
      <Screen name="AccountType" component={AccountType} />
      <Screen name="Signup" component={Signup} />
      <Screen name="VerifyAccount" component={VerifyAccount} />
    </Navigator>
  );
};
export default AuthStackScreens;

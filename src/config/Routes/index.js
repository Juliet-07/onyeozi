import React, { useMemo, useEffect, useReducer, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../context/authContext";
import AsyncStorage from '@react-native-community/async-storage';
import ShowMessage, { type } from "../../components/showMessage";
import AuthNavigator from "./AuthNavigator";
import CustomerNavigator from "./CustomerNavigator";
import Loader from '../../components/Loader';

const index = () => {
const initialState = {
  isLoading: true,
  userToken: null,
  accountType: null,
  userEmail: null,
  verification: false
};

const token = false
//CREATE AUTHREDUCER
const authReducer = (prevState, action) => {
  switch (action.type) {
    case "RETRIEVE_TOKEN":
      return {
        ...prevState,
        isLoading: false,
        userToken: action.token,
        accountType: action.accountType,
      };
    case "LOGIN": 
      return {
        ...prevState,
        isLoading: false,
        accountType: action.accountType,
        userToken: action.token
      }
    case "SIGNUP": 
      return {
      ...prevState,
      isLoading: false,
      verification: action.email,
    }
    case 'SIGNOUT': 
      return {
        ...prevState,
        userToken: null,
        accountType: null,
        isLoading: false
      }
    case 'VERIFICATION': 
      return {
        ...prevState,
        isLoading: false,
        accountType: action.accountType,
        userToken: action.token
      }
  }
};

  // SET UP USEREDUCER
const [authState, dispatch] = useReducer(authReducer, initialState);
  // SET UP USEMEMO
const authContext = useMemo(() =>({
  signIn: async(token, accountType) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('accountType', accountType)
      console.log(token, accountType, 'LOGINNN')
    }catch(e){
      ShowMessage(type.ERROR, e.toString())
    }
    dispatch({type: 'LOGIN', token, accountType});
  },
  signUp: async (email) => {
    try{
      await AsyncStorage.setItem("verify", email);
      console.log(email, 'SIGNUP');
    }catch(e){
      ShowMessage(type.ERROR, e.toString())
    }
    dispatch({type: 'SIGNUP', email})
  },
  signOut: async () => {
    try{
      // await AsyncStorage.removeItem('token');
      await AsyncStorage.clear();
    }catch(e){
      ShowMessage(type.ERROR, 'There was error')
    }
    dispatch({type: 'SIGNOUT'})
  },
  verification: async (token, accountType) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('accountType', accountType)
      console.log(token, 'verification')
    }catch(e){
      ShowMessage(type.ERROR, 'There was error')
    }
    dispatch({type: 'VERIFICATION', token, accountType})
  }
}),[])

useEffect(()=>{
  setTimeout(async ()=>{
    let userToken = null;
    try {
        userToken = await AsyncStorage.getItem('token');
        accountType = await AsyncStorage.getItem('accountType');
        console.log(userToken)
    }catch(e){
      ShowMessage(type.ERROR, 'There was error')
    }
    dispatch({type: 'RETRIEVE_TOKEN', token: userToken, accountType})
  }, 1000)
}, [])

// const checkForConstants =async () => {
//   let userToken = null;
//     try {
//         userToken = await AsyncStorage.getItem('token');
//         accountType = await AsyncStorage.getItem('accountType');
//         console.log(accountType)
//     }catch(e){
//       ShowMessage(type.ERROR, 'There was error')
//     }
//     dispatch({type: 'RETRIEVE_TOKEN', token: userToken, accountType})
// }
// useEffect(()=>{
//   checkForConstants()
// },[])
if(authState.isLoading){
  return <Loader />
}
const check = (accountType) => {
  let user;
  if(accountType === "customer"){
    return user = <CustomerNavigator />
  } else {
    return user = <AuthNavigator />
  }
}
console.log(authState.userToken, 'kkkkkk')
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {authState.userToken ? check(authState.accountType) : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default index;

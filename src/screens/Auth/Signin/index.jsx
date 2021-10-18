import React, { useState, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import generateValidationSchema from "../../../utils/validators";
import { Obutton } from "../../../components/ButtonCustom/index";
import { InputField } from "../../../components/InputCustom/index";
import { styles } from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import theme from "../../../config/theme";
import MainView from "../../../components/Layouts/MainView";
import FlexView from "../../../components/Layouts/FlexView";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { SIGNIN } from "../../../gql/auth/mutations";
import { AuthContext } from "../../../context/authContext";
import ShowMessage, {type} from '../../../components/showMessage';
const Index = ({ navigation }) => {
  const {signIn} = useContext(AuthContext)
  const { navigate } = navigation;
  const [select, setSelect] = useState(false);
  const [show, setShow] = useState(true);

  const validate = generateValidationSchema(
    yup,
    ["Email", "Password"],
    ["EMAIL", "PASSWORD"]
  );

  const initialValues = {
    Email: "",
    Password: "",
  };
  const [loginUser, { loading, error }] = useMutation(SIGNIN);

  return (
    <MainView scrollable>
      <FlexView
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      
      >
        <View style={styles.main}>
          <FlexView justifyContent="space-around">
            <View style={styles.header}>
              <Text style={styles.headText}>Login</Text>
            </View>
          </FlexView>

          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={async (values) => {
              const data = {
                email: values.Email,
                password: values.Password
              } 
              await loginUser({
                variables: {
                  data,
                },
              }).then(async (res) => {  
                const token = res.data.loginUser.token;
                const accountType = res.data.loginUser.userAccountType
                signIn(token,accountType);
                ShowMessage(type.DONE, "Welcome to your dashboard")
              })
              .catch((e) => ShowMessage(type.ERROR, e.toString()));
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <View style={styles.inputs}>
                <InputField
                  name="Email"
                  label="Email"
                  value={values.Email}
                  keyboardType="email-address"
                  onChangeText={handleChange("Email")}
                  inputContainerStyles={styles.input}
                  rightIcon={
                    <EvilIcons
                      name="envelope"
                      color="#00000080"
                      size={theme.iconSize}
                    />
                  }
                />
                <InputField
                  name="Password"
                  label="Password"
                  value={values.Password}
                  onChangeText={handleChange("Password")}
                  inputContainerStyles={styles.input}
                  secureTextEntry={show}
                  rightIcon={
                    <TouchableOpacity onPress={() => setShow(!show)}>
                      <Entypo
                        name={show ? "eye" : "eye-with-line"}
                        color="#00000080"
                        size={theme.iconSize}
                      />
                    </TouchableOpacity>
                  }
                />

                <View style={styles.btnContainer}>
                  <FlexView>
                    <CheckBox value={select} onValueChange={setSelect} />
                    <Text>Keep me logged in</Text>
                  </FlexView>
                </View>

                <View style={styles.login}>
                  <Obutton title="Login" onPress={handleSubmit} loading={loading} disabled={loading} />
                </View>
              </View>
            )}
          </Formik>

          <FlexView>
            <Text>Login with Social Media</Text>
          </FlexView>
          <View style={styles.pictureContainer}>
            <FlexView justifyContent="space-around">
              <View style={styles.pictureMain}>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/facebook.png")}
                    style={styles.picture}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.pictureMain}>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/google.png")}
                    style={styles.picture}
                  />
                </TouchableOpacity>
              </View>
            </FlexView>
          </View>

          <FlexView>
            <Text onPress={() => navigate("ForgotPassword1")}>
              Forgot Password?
            </Text>
          </FlexView>

          <FlexView style={styles.last}>
            <Text style={styles.texts}>Don't have an account? </Text>
            <Text
              style={[styles.texts, styles.signUp]}
              onPress={() => navigation.navigate("CreateAccount")}
            >
              SignUp
            </Text>
          </FlexView>
        </View>
      </FlexView>
    </MainView>
  );
};

export default Index;

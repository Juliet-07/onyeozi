import React, { useState, useContext,useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import generateValidationSchema from "../../../utils/validators";
import { Obutton } from "../../../components/ButtonCustom/index";
import { InputField } from "../../../components/InputCustom/index";
import Email from "react-native-vector-icons/Fontisto";
import Person from "react-native-vector-icons/Ionicons";
import Phone from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../../../config/theme";
import { SIGNUP } from "../../../gql/auth/mutations";
import MainView from "../../../components/Layouts/MainView";
import FlexView from "../../../components/Layouts/FlexView";
import ShowMessage, { type } from "../../../components/showMessage";
import { AuthContext } from "../../../context/authContext";
const validationSchema = generateValidationSchema(
  yup,
  ["fullName", "email", "phoneNumber", "password"],
  ["REQUIRED", "EMAIL", "PHONE", "PASSWORD"]
);
const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const index = ({ navigation, route }) => {
  const { signUp } = useContext(AuthContext);
  console.log(signUp, "useContext");
  const { navigate } = navigation;
  const [isSelected, setSelection] = useState(false);
  const [show, setShow] = useState(true);
  const [addUser, { loading, error }] = useMutation(SIGNUP);
  // useEffect(() => {
  //   const removeVerify = async () => {
  //     await AsyncStorage.removeItem("verify");
  //     // await AsyncStorage.removeItem("token");
  //   };
  //   removeVerify();
  // }, []);
  const onSubmit = (values) => { 
    const data = {
      ...values,
      phone: values.phoneNumber,
      userAccountType: route.params.accountType,
    };
    delete data.phoneNumber;
    addUser({
      variables: {
        data,
      },
    })
      .then(async (res) => { 
          ShowMessage(type.DONE, "Welcome to Onyeozi");
          signUp(res.data.addUser.email);
          navigation.navigate("VerifyAccount");
      })
      .catch((e) => {
        ShowMessage(type.ERROR, e.toString())
        console.log(e, 'error')
      });
  };

  return (
    <MainView scrollable>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <>
                <View>
                  <Text style={styles.header}>Sign Up</Text>
                </View>
                <InputField
                  name="fullName"
                  label="Full Name"
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  rightIcon={
                    <Person name="person" color="#00000080" size={20} />
                  }
                />
                <InputField
                  name="email"
                  label="Email Address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  rightIcon={<Email name="email" color="#00000080" size={20} />}
                />
                <InputField
                  name="phoneNumber"
                  label="Phone Number"
                  keyboardType="phone-pad"
                  value={values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  rightIcon={<Phone name="phone" color="#00000080" size={20} />}
                />
                <InputField
                  name="password"
                  label="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  secureTextEntry={show}
                  rightIcon={
                    <TouchableOpacity onPress={() => setShow(!show)}>
                      <Entypo
                        name={show ? "eye-with-line" : "eye"}
                        color="#00000080"
                        size={theme.iconSize}
                      />
                    </TouchableOpacity>
                  }
                />
                <View style={styles.checkboxContainer}>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <Text style={styles.label}>
                    I agree to the Terms of service
                  </Text>
                </View>

                <View style={styles.createAccount}>
                  <Obutton
                    loading={loading}
                    disabled={loading}
                    title="Create Account"
                    titleStyle={styles.titleStyle}
                    onPress={handleSubmit}
                  />
                </View>

                <View style={styles.signUpText}>
                  <Text style={styles.signUpText}>
                    Sign Up with Social Media
                  </Text>
                </View>

                <View>
                  <FlexView>
                    <TouchableOpacity style={{ width: "30%" }}>
                      <Image
                        style={styles.iconFacebook}
                        source={require("../../../assets/facebook.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "30%" }}>
                      <Image
                        style={styles.iconFacebook}
                        source={require("../../../assets/google.png")}
                      />
                    </TouchableOpacity>
                  </FlexView>
                </View>
                <View style={styles.footer}>
                  <Text style={styles.footerContent}>
                    Already have an account
                  </Text>
                  <TouchableOpacity onPress={() => navigate("Signin")}>
                    <Text style={styles.footerContent}>Login</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </MainView>
  );
};
export default index;

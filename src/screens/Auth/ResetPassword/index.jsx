import React, { useState } from "react";
import { View, Text, Linking, TouchableOpacity, Image } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import generateValidationSchema from "../../../utils/validators";
import { Obutton } from "../../../components/ButtomCustom/index";
import { InputField } from "../../../components/InputCustom/index";
import { styles } from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../../../config/theme";

const ResetPassword = ({navigation}) => {
  const [show, setShow] = useState(false);

  const validate = generateValidationSchema(
    yup,
    ["password", "confirmPassword"],
    ["PASSWORD", "CONFIRMPASSWORD"]
  );

  const initialValues = {
    password: "",
    confirmPassword: ""
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Reset Password</Text>
      </View>

        <View style={{marginVertical:25}}>
            <Image source={require("../../../assets/pana.png")} style={styles.picture}/>
        </View>
      

      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={values => navigation.navigate("Signin")}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <InputField
              name="password"
              label="New Password"
              value={values.password}
              onChangeText={handleChange("password")}
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

            <InputField
              name="confirmPassword"
              label="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
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

            <Obutton
              title="Save"
              onPress={handleSubmit}
              buttonStyle={styles.btnStyle}
            />
          </>
        )}
      </Formik>

    </View>
  );
};

export default ResetPassword;

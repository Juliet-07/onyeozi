import React, { useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { Obutton } from "../../../../../components/ButtonCustom/index";
import { InputField } from "../../../../../components/InputCustom";
import { Formik } from "formik";
import * as yup from "yup";
import Email from "react-native-vector-icons/Fontisto";
import Person from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import generateValidationSchema from "../../../../../utils/validators";
import Entypo from "react-native-vector-icons/Entypo";


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

const ChangePassword = () => {
  const onSubmit = (values) => {
    console.log(values, "myvalues");
    onEditProfile({ variables: values });
    const [isSelected, setSelection] = useState(false);
    const [show, setShow] = useState(false);};
  return (
    <ScrollView style={{backgroundColor:"white",}}>
      <View style={styles.container}>
        <Text style={styles.topHeader}>Change Password</Text>

        <View style={styles.InputField}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange }) => (
              <>
              <View>

                  <InputField
                    name="old password"
                    label="Old Password"
                    value={values.fullName}
                    style={styles.name}
                    o
                    // onChangeText={handleChange("old password")}
                    rightIcon={
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Entypo
                    name="eye-with-line"
                      color="#00000080"
                    />
                  </TouchableOpacity>
                }

                  />
             
                <InputField
                  name="Newpassword"
                  label="New Password"
                  value={values.password}
                  rightIcon={
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Entypo
                    name="eye-with-line"
                      color="#00000080"
                    />
                  </TouchableOpacity>
                }
                  
                />
              </View>
            
              </>
            )}
          </Formik>
        </View>

        <View style={styles.updateDetails}>
          <Obutton title=" Change Password " />
        </View>
      </View>
    </ScrollView>
  );
};
export default ChangePassword;

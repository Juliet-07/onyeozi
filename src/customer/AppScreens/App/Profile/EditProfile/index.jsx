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

const validationSchema = generateValidationSchema(
  yup,
  ["fullName", "email", "phoneNumber", "password"],
  ["REQUIRED", "EMAIL", "PHONE", "PASSWORD"]
);
const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: ""
};

const EditProfile = ({ navigation }) => {
  const { navigate } = navigation;
  const onSubmit = values => {
    console.log(values, "myvalues");
    onEditProfile({ variables: values });
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.topHeader}>Edit Profile</Text>

        <View
          style={{
            borderRadius: 50,
            backgroundColor: "#EFEFEF",
            alignSelf: "center",
            width: 70,
            height: 80
          }}
        >
          <AntDesign
            style={{
              alignSelf: "center",
              fontSize: 56,
              color: "#1976D2",

              borderRadius: 50,
              marginTop: 10
            }}
            name="user"
          />
        </View>
        <View style={styles.uploadbttn}>
          <Obutton title=" Upload new image " />
        </View>
        <View style={styles.InputField}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange }) => (
              <>
                <InputField
                  name="fullName"
                  label="Full Name"
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  style={styles.name}
                />
                <InputField
                  name="email"
                  label="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  keyboardType="email-address"
                />
                <InputField
                  name="phoneNumber"
                  label="phoneNumber"
                  onChangeText={handleChange("phoneNumber")}
                  keyboardType="numeric"
                  value={values.phoneNumber}
                />
              </>
            )}
          </Formik>
        </View>
        <TouchableOpacity onPress={() => navigate("ChangePassword")}>
          <Text style={styles.change}>Change Password</Text>
        </TouchableOpacity>

        <View style={styles.updateDetails}>
          <Obutton title=" Update details " />
        </View>
      </View>
    </ScrollView>
  );
};
export default EditProfile;

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./authPage.styles";
import { Formik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required for SignUp"),
  contact: Yup.number()
    .min(999999999, "Should not be less than 10 chars")
    .max(10000000000, "Should not be more than 10 chars")
    .required("Please provide contact number"),
  email: Yup.string()
    .email("Invalid Email")
    .required("The Email Field can't be empty"),
  password: Yup.string()
    .min(8, "Password Should be minimum of 8 chars")
    .max(12, "Password can't be more than 12 chars")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$",
      "Password should contain atleast one lowercase, uppercase & symbol each"
    )
    .required("The Password field can't be empty"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function SignUp({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>SignUp</Text>
      <Formik
        initialValues={{
          name: "",
          contact: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              placeholder="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={styles.formInput}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            <TextInput
              placeholder="Contact No"
              onChangeText={handleChange("contact")}
              onBlur={handleBlur("contact")}
              value={values.contact}
              style={styles.formInput}
            />
            {touched.contact && errors.contact && (
              <Text style={styles.errorText}>{errors.contact}</Text>
            )}
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.formInput}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={styles.formInput}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TextInput
              placeholder="Confirm Password"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              style={styles.formInput}
              secureTextEntry={true}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.smallText}>Already a member? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

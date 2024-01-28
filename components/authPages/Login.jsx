import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./authPage.styles";
import { Formik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
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
});

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
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
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.smallText}>Don't have an account? SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

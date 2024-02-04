import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./authPage.styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import {
  successAuth,
  startLoading,
  stopLoading,
} from "../../store/authSlice.js";
import { signUpService } from "../../services/auth.js";

const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required for SignUp"),
  phone: Yup.number()
    .min(999999999, "Should not be less than 10 chars")
    .max(10000000000, "Should not be more than 10 chars")
    .required("Please provide phone number"),
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
  const [errorData, setErrorData] = useState({});
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) navigation.navigate("HomePage");
  }, [isLoggedIn]);

  const submitSignUp = async (values) => {
    dispatch(startLoading());
    const signUpResp = await signUpService(values);
    if (signUpResp.status === "success") dispatch(successAuth());
    else setErrorData(signUpResp);
    dispatch(stopLoading());
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>SignUp</Text>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={(values) => submitSignUp(values)}
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
              placeholder="phone No"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              style={styles.formInput}
            />
            {touched.phone && errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
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

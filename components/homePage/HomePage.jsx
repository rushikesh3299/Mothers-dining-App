import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./homePage.styles";
import chefImg from "../../assets/images/chef_logo.png";
import { useSelector } from "react-redux";

export default function HomePage({ navigation }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigateHandler = (pageName) => {
    if (isLoggedIn) navigation.navigate(pageName);
    else navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={chefImg} />
      <Text style={styles.appTitle}>Mother's Dining</Text>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigateHandler("ThaliPage")}
      >
        <Text style={styles.menuBtnText}>Explore Thalis</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigateHandler("CoursePage")}
      >
        <Text style={styles.menuBtnText}>Explore CourseMenu</Text>
      </TouchableOpacity>
    </View>
  );
}

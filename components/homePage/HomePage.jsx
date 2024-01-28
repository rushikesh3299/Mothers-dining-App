import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./homePage.styles";
import chefImg from "../../assets/images/chef_logo.png";

export default function HomePage({ navigation }) {
  const navigateHandler = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Image source={chefImg} />
      <Text style={styles.appTitle}>Mother's Dining</Text>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigateHandler("Login")}
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

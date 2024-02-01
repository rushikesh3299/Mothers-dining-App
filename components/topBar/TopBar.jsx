import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import styles from "./topBar.styles";

export default function TopBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.hamburgerContainer}
          // onPress={() => navigation.openDrawer()}
        >
          <View style={[styles.hamburgerLine, styles.line1]}></View>
          <View style={[styles.hamburgerLine, styles.line2]}></View>
          <View style={[styles.hamburgerLine, styles.line3]}></View>
        </TouchableOpacity>
        <Text style={styles.appName}>Mother's Dining</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
          <Image
            style={styles.profileImg}
            source={{
              uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

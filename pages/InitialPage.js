import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const splashImage = require("../assets/images/chef_logo.png");

export default function InitialPage() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#B7DBFF", "#7FBEFF", "#178BFF"]}
      style={styles.background}
    >
      <View style={styles.content}>
        <Image source={splashImage} />
        <Text style={styles.appTitle}>Mothers Dining</Text>
        <Text style={styles.appTagline}>
          Your Shortcut to Nutritious, Delicious Meals
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontSize: 40,
    color: "white",
    marginBottom: 8,
    fontFamily: "lato",
  },
  appTagline: {
    fontSize: 16,
    color: "white",
    fontFamily: "lato",
  },
});

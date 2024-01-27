import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  InitialPage,
  HomePage,
  ThaliPage,
  CoursePage,
} from "./components/index";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    lato: require("./assets/fonts/Lato/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ThaliPage" component={ThaliPage} />
        <Stack.Screen name="CoursePage" component={CoursePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

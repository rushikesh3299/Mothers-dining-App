import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import store from "./store/store";
import { Provider } from "react-redux";
import {
  InitialPage,
  HomePage,
  ThaliPage,
  CoursePage,
  Login,
  SignUp,
  ProfilePage,
  TopBar,
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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="InitialPage" component={InitialPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="ThaliPage" component={ThaliPage} />
          <Stack.Screen name="CoursePage" component={CoursePage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="TopBar" component={TopBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

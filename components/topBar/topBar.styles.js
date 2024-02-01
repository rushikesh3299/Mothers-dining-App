import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS } from "../../constants";

export default styles = StyleSheet.create({
  container: {
    // avoid collapse of content on stausbar for android
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: 64,

    // elevation: 5,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 1 }, // Shadow only at the bottom
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "BLACK",
  },
  topBar: {
    marginHorizontal: 24,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hamburgerContainer: {},
  hamburgerLine: {
    width: 20,
    height: 3,
    backgroundColor: COLORS.gray4,
  },
  line1: { marginBottom: 3 },
  line2: { marginBottom: 3 },
  line3: {},
  appName: {
    fontFamily: "lato",
    fontSize: 20,
  },
  profileImg: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
});

import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 32,
    fontFamily: "lato",
    color: COLORS.primary,
    marginBottom: 12,
  },
  menuBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 60,
    width: 320,
    borderRadius: 30,
    margin: 12,
  },
  menuBtnText: {
    fontFamily: "lato",
    color: COLORS.pureWhite,
    fontSize: 24,
  },
});

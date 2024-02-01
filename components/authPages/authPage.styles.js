import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 36,
  },
  pageTitle: {
    fontFamily: "lato",
    fontSize: 28,
    marginTop: 60,
    marginBottom: 12,
  },
  formInput: {
    height: 52,
    backgroundColor: COLORS.gray3,
    marginVertical: 12,
    paddingLeft: 16,
  },
  errorText: {
    fontFamily: "lato",
    fontSize: 12,
    color: COLORS.error,
    marginLeft: 2,
  },
  submitBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 60,
    width: 320,
    marginTop: 24,
  },
  submitBtnText: {
    fontFamily: "lato",
    color: COLORS.pureWhite,
    fontSize: 24,
  },
  smallText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "lato",
    color: COLORS.primary,
    paddingTop: 8,
  },
  errorMsg: {
    textAlign: "center",
    color: COLORS.error,
    paddingTop: 4,
    fontSize: 16,
  },
});

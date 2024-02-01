import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pureWhite,
  },
  singleMenu: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  menuImg: {
    height: 74,
    width: 74,
  },
  menuContent: {
    marginLeft: 4,
  },
  menuTitle: {
    flexDirection: "row",
    gap: 10,
  },
  menuBottom: {
    flexDirection: "row",
    gap: 4,
  },
  orderNewBtn: {
    flexDirection: "row",
  },
  orderModifyBtn: {
    flexDirection: "row",
    gap: 4,
  },
});

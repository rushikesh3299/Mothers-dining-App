import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import TopBar from "../topBar/TopBar";
import styles from "./coursePage.styles";
import { getMenuItems } from "../../services/menuItems";
import { useSelector, useDispatch } from "react-redux";
import { setMenuItems } from "../../store/menuSlice";
import MenuBox from "../MenuBox/MenuBox";

export default function CoursePage({ navigation }) {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.menuItems);
  const [isMenuLoading, setIsMenuLoading] = useState(true);

  useEffect(() => {
    const getAllMenuItems = async () => {
      try {
        const allMenuItems = await getMenuItems();
        dispatch(setMenuItems(allMenuItems.data));
        setIsMenuLoading(false);
      } catch (error) {}
    };

    getAllMenuItems();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar navigation={navigation} />
      {isMenuLoading ? (
        <ActivityIndicator size="large" color="#007FFF" />
      ) : (
        <ScrollView>
          <MenuBox
            menuItems={menuItems}
            menuCategory="course-menu"
            menuType="veg"
          />
          <Text>Seperator</Text>
          <MenuBox
            menuItems={menuItems}
            menuCategory="course-menu"
            menuType="non-veg"
          />
        </ScrollView>
      )}
      <Text>Sample Text</Text>
    </SafeAreaView>
  );
}

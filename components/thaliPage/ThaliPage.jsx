import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./thaliPage.styles";
import TopBar from "../topBar/TopBar";
import { getMenuItems } from "../../services/menuItems";
import { useSelector, useDispatch } from "react-redux";
import { setMenuItems } from "../../store/menuSlice";

export default function ThaliPage({ navigation }) {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.menuItems);
  const [isMenuLoading, setIsMenuLoading] = useState(true);

  useEffect(() => {
    const getAllMenuItems = async () => {
      try {
        const allMenuItems = await getMenuItems();
        dispatch(setMenuItems(allMenuItems.data));
        setIsMenuLoading(false);
      } catch (error) {
        console.error("Failed to fetch menu items:", error.data);
      }
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
          {menuItems.map((singleItem) => {
            return singleItem.category === "thali" ? (
              <View key={singleItem._id} style={styles.singleMenu}>
                <Image
                  style={styles.menuImg}
                  source={{ uri: "https://picsum.photos/74/74" }}
                />
                <View style={styles.menuContent}>
                  <View style={styles.menuTitle}>
                    <Text>{singleItem.name}</Text>
                    <Text>veg/non-veg icon</Text>
                  </View>
                  <Text>{singleItem.content}</Text>
                  <View style={styles.menuBottom}>
                    <Text>{singleItem.price}₹</Text>
                    <Text>{singleItem.rating}⭐</Text>
                    <Text>({singleItem.TotalRating}+)</Text>
                  </View>
                  <View style={styles.orderNewBtn}>
                    <View style={styles.orderModifyBtn}>
                      <TouchableOpacity>
                        <Text>+</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text>QTY</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text>-</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Text>Order</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : null;
          })}
        </ScrollView>
      )}
      <Text>Sample Text</Text>
    </SafeAreaView>
  );
}

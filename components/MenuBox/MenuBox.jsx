import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./menuBox.styles";

export default function MenuBox({ menuItems, menuCategory, menuType }) {
  return (
    <View>
      {menuItems.map((singleItem) => {
        return singleItem.category === menuCategory &&
          singleItem.menu_type == menuType ? (
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
    </View>
  );
}

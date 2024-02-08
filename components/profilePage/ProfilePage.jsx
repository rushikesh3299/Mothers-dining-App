import { SafeAreaView, Image, View, Text } from "react-native";
import React from "react";
import styles from "./profilePage.styles";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import { emailLogo, phoneLogo, nameLogo } from "../../assets/logos/svg";

export default function ProfilePage() {
  const profileData = useSelector((state) => state.auth.userData);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImgContainer}>
        <Image
          style={styles.profileImg}
          source={{ uri: "https://picsum.photos/280/280" }}
        />
      </View>
      <View style={styles.profileField}>
        <SvgXml xml={nameLogo} width="28" height="28" />
        <Text>{profileData.name}</Text>
      </View>
      <View style={styles.profileField}>
        <SvgXml xml={emailLogo} width="28" height="28" />
        <Text>{profileData.email}</Text>
      </View>
      <View style={styles.profileField}>
        <SvgXml xml={phoneLogo} width="28" height="28" />
        <Text>{profileData.userId}</Text>
      </View>
    </SafeAreaView>
  );
}

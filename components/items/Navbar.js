import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { useState } from "react";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 68,
          marginLeft: 23,
          marginRight: 23,
        }}
      >
        <Text>Menu</Text>
        <Text>Settings</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#979797",
    height: 106,
  },
});

export default Navbar;

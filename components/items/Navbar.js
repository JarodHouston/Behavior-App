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

const Navbar = ({ navigation }) => {
  const [menuDropdown, setMenuDropdown] = useState(false);
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
        <Pressable onPress={() => setMenuDropdown(!menuDropdown)}>
          <Text>Menu</Text>
          {menuDropdown && (
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <Text onPress={() => navigation.navigate("Home")}>Home</Text>
              <Text onPress={() => navigation.navigate("Profile")}>
                Profile
              </Text>
              <Text onPress={() => navigation.navigate("SignUp")}>
                Sign Out
              </Text>
            </View>
          )}
        </Pressable>
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

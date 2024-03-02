import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";

const iconSize = 28;

const Navbar = ({ navigation, resetHome, setProfile }) => {
  const [hamburgerMenu, toggleHamburgerMenu] = useState(false);
  return (
    <View style={{ zIndex: 3 }}>
      <View style={styles.container}>
        <SafeAreaView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 62,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Home", {
                displayType: "default",
              });
              if (resetHome) {
                resetHome();
              }
              toggleHamburgerMenu(false);
            }}
          >
            <Image
              style={styles.homeIcon}
              source={require("../icons/home.png")}
            />
          </Pressable>
          {/* <Pressable onPress={() => setMenuDropdown(!menuDropdown)}>
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
        </Pressable> */}
          <Pressable onPress={() => toggleHamburgerMenu(!hamburgerMenu)}>
            <Image
              style={styles.hamburgerIcon}
              source={require("../icons/hamburger.png")}
            />
          </Pressable>
        </SafeAreaView>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        {hamburgerMenu && (
          <View style={styles.menuStyles}>
            <View
              style={{
                width: "80%",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("Profile", {
                    displayType: "default",
                  });
                  toggleHamburgerMenu(false);
                  if (setProfile) {
                    setProfile("default");
                  }
                  if (resetHome) {
                    resetHome();
                  }
                }}
              >
                Profile
              </Text>
              <Text
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("Home", {
                    displayType: "registered",
                  });
                  if (resetHome) {
                    resetHome();
                  }
                  toggleHamburgerMenu(false);
                }}
              >
                Upcoming Events
              </Text>
              <Text
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("Profile", {
                    displayType: "settings",
                  });
                  toggleHamburgerMenu(false);
                  if (setProfile) {
                    setProfile("settings");
                  }
                  if (resetHome) {
                    resetHome();
                  }
                }}
              >
                Settings
              </Text>
              <Text
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("SignUp");
                  if (resetHome) {
                    resetHome();
                  }
                  toggleHamburgerMenu(false);
                }}
              >
                Sign Out
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7A38E",
    height: 106,
  },
  menuStyles: {
    position: "absolute",
    backgroundColor: "#FFF1EB",
    width: 270,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 30,
    borderBottomLeftRadius: 15,
  },
  menuItem: {
    textAlign: "center",
    fontSize: 19,
    marginTop: 20,
  },
  homeIcon: {
    width: iconSize,
    height: iconSize,
  },
  hamburgerIcon: {
    width: iconSize,
    height: iconSize,
  },
});

export default Navbar;

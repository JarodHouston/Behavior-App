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
              <Pressable
                style={styles.menuItemContainer}
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
                <Image
                  style={styles.menuItemIcon}
                  source={require("../icons/user.png")}
                />
                <Text style={styles.menuItem}>Profile</Text>
              </Pressable>
              <Pressable
                style={styles.menuItemContainer}
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
                <Image
                  style={styles.menuItemIcon}
                  source={require("../icons/next-week.png")}
                />
                <Text style={styles.menuItem}>Upcoming Events</Text>
              </Pressable>
              <Pressable
                style={styles.menuItemContainer}
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
                <Image
                  style={styles.menuItemIcon}
                  source={require("../icons/settings.png")}
                />
                <Text style={styles.menuItem}>Settings</Text>
              </Pressable>
              <Pressable
                style={styles.menuItemContainer}
                onPress={() => {
                  navigation.navigate("SignUp");
                  if (resetHome) {
                    resetHome();
                  }
                  toggleHamburgerMenu(false);
                }}
              >
                <Image
                  style={styles.menuItemIcon}
                  source={require("../icons/sign-out.png")}
                />
                <Text style={styles.menuItem}>Sign Out</Text>
              </Pressable>
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
  menuItemContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 14,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  menuItem: {
    textAlign: "center",
    fontSize: 19,
  },
  menuItemIcon: {
    width: 22,
    height: 22,
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

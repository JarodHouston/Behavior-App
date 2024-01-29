import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
} from "react-native";

import Navbar from "./items/Navbar";

export default function Home({ navigation }) {
  return (
    <View>
      <Navbar />
      <ScrollView
        style={{
          backgroundColor: "#E8E8E8",
          height: "70%",
        }}
      >
        <View
          style={{
            height: 597,
            justifyContent: "flex-end",
          }}
        >
          <View style={styles.cardInfo}>
            <Text style={{ fontSize: 24 }}>Griffith Observatory Yoga</Text>
            <Text style={{ fontSize: 15, width: 150, marginTop: 12 }}>
              Saturday, February 3 10 am - 12 pm PST
            </Text>
            <Text style={{ fontSize: 15 }}>
              $<Text style={{ opacity: 0.2 }}>$$$</Text>
            </Text>
            <Pressable style={styles.signUpButton}>
              <Text style={{ fontSize: 12, color: "#838282" }}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View style={styles.lowerContainer}>
        <View style={styles.lowerButton}></View>
        <View style={styles.lowerButton}></View>
        <View style={styles.lowerButton}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardInfo: {
    marginTop: "auto",
    marginLeft: 50,
    marginBottom: 50,
  },
  signUpButton: {
    backgroundColor: "#DADADA",
    marginTop: 16,
    borderRadius: 7,
    width: 108,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  lowerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 38,
    marginLeft: 25,
    marginRight: 25,
  },
  lowerButton: {
    backgroundColor: "#E8E8E8",
    width: 74,
    height: 74,
    borderRadius: 50,
    borderColor: "#838282",
    borderWidth: 2,
  },
});

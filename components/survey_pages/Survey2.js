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
import Ionicons from "@expo/vector-icons/Ionicons";

{
  /* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */
}

export default function Survey2({ navigation }) {
  const hobbies = [
    {
      id: 1,
      hobbieName: "Yoga",
    },
    {
      id: 2,
      hobbieName: "Hiking",
    },
    {
      id: 3,
      hobbieName: "Movies",
    },
    {
      id: 4,
      hobbieName: "Eating & Drinking",
    },
    {
      id: 5,
      hobbieName: "Crafting",
    },
    {
      id: 6,
      hobbieName: "Fitness & Sports",
    },
  ];
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text>
      <Text style={{ textAlign: "center", fontSize: 24 }}>
        What types of activities are most interesting to you?
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          textDecorationLine: "underline",
          color: "#4A4A4A",
          marginTop: 20,
        }}
      >
        Explore more hobbies
      </Text>
      <FlatList
        key={"_"}
        data={hobbies}
        numColumns={2}
        style={styles.hobbyContainer}
        renderItem={({ item }) => (
          <View style={styles.hobbyCard}>
            <View style={styles.hobbyTitle}>
              <Text style={{ color: "white", fontSize: 15 }}>
                {item.hobbieName}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <View style={styles.hobbyCard}></View>
      <View style={[styles.hobbyCard, { flex: 3 }]}></View>
      <View style={styles.hobbyCard}></View>
      <View style={styles.hobbyCard}></View> */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Survey3")}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#979797",
    borderRadius: 7,
    width: 304,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  hobbyContainer: {
    //backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  hobbyCard: {
    width: 177,
    height: 128,
    backgroundColor: "#D9D9D9",
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "#AFB1B6",
    borderWidth: 2,
    borderRadius: 5,
    margin: 6,
    paddingBottom: 10,
  },
  hobbyTitle: {
    backgroundColor: "#979797",
    //alignSelf: "flex-start",
    //width: 108,
    paddingLeft: 11,
    paddingRight: 11,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

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
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

{
  /* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */
}

export default function Survey2({ navigation }) {
  const [hobbies, setHobbies] = useState([
    {
      id: 1,
      hobbieName: "Yoga",
      selected: false,
    },
    {
      id: 2,
      hobbieName: "Hiking",
      selected: false,
    },
    {
      id: 3,
      hobbieName: "Movies",
      selected: false,
    },
    {
      id: 4,
      hobbieName: "Eating & Drinking",
      selected: false,
    },
    {
      id: 5,
      hobbieName: "Water Sports",
      selected: false,
    },
    {
      id: 6,
      hobbieName: "Fitness & Sports",
      selected: false,
    },
    {
      id: 7,
      hobbieName: "Crafting",
      selected: false,
    },
    {
      id: 8,
      hobbieName: "Live Events",
      selected: false,
    },
  ]);
  const handlePress = (id) => {
    setHobbies((prevHobbies) => {
      return prevHobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, selected: !hobby.selected } : hobby
      );
    });
  };
  // let hobbies = [
  //   {
  //     id: 1,
  //     hobbieName: "Yoga",
  //     selected: false,
  //   },
  //   {
  //     id: 2,
  //     hobbieName: "Hiking",
  //     selected: false,
  //   },
  //   {
  //     id: 3,
  //     hobbieName: "Movies",
  //     selected: false,
  //   },
  //   {
  //     id: 4,
  //     hobbieName: "Eating & Drinking",
  //     selected: false,
  //   },
  //   {
  //     id: 5,
  //     hobbieName: "Crafting",
  //     selected: false,
  //   },
  //   {
  //     id: 6,
  //     hobbieName: "Fitness & Sports",
  //     selected: false,
  //   },
  //   {
  //     id: 7,
  //     hobbieName: "Crafting",
  //     selected: false,
  //   },
  //   {
  //     id: 8,
  //     hobbieName: "Live Events",
  //     selected: false,
  //   },
  // ];
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity
          style={{ justifyContent: "center", position: "absolute", zIndex: 3 }}
          onPress={() => navigation.navigate("ActivityPreferences")}
        >
          <View style={{ width: 22, height: 22 }}>
            <Image
              style={{
                left: 30,
                zIndex: 3,
                width: 22,
                height: 22,
              }}
              source={require("../icons/back.png")}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text>
      </View>
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
          <Pressable
            style={[
              styles.hobbyCard,
              item.selected ? { borderColor: "black", borderWidth: 2.3 } : {},
            ]}
            onPress={() => handlePress(item.id)}
          >
            <View style={styles.hobbyTitle}>
              <Text style={{ color: "white", fontSize: 15 }}>
                {item.hobbieName}
              </Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("NumberActivities")}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F7A38E",
    borderRadius: 7,
    width: 304,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
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
    backgroundColor: "#FFD2DC",
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "#F8B0C0",
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

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
      image: require("../images/activity-icons/yoga-position.png"),
    },
    {
      id: 2,
      hobbieName: "Hiking",
      selected: false,
      image: require("../images/activity-icons/hiking.png"),
    },
    {
      id: 3,
      hobbieName: "Movies",
      selected: false,
      image: require("../images/activity-icons/movie-clapper-open.png"),
    },
    {
      id: 4,
      hobbieName: "Eating & Drinking",
      selected: false,
      image: require("../images/activity-icons/restaurant.png"),
    },
    {
      id: 5,
      hobbieName: "Water Sports",
      selected: false,
      image: require("../images/activity-icons/surfing.png"),
    },
    {
      id: 6,
      hobbieName: "Fitness",
      selected: false,
      image: require("../images/activity-icons/running.png"),
    },
    {
      id: 7,
      hobbieName: "Crafting",
      selected: false,
      image: require("../images/activity-icons/paint.png"),
    },
    {
      id: 8,
      hobbieName: "Live Events",
      selected: false,
      image: require("../images/activity-icons/concert.png"),
    },
  ]);
  const handlePress = (id) => {
    setHobbies((prevHobbies) => {
      return prevHobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, selected: !hobby.selected } : hobby
      );
    });
  };

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
                left: 24,
                zIndex: 3,
                width: 22,
                height: 22,
              }}
              source={require("../icons/back.png")}
            />
          </View>
        </TouchableOpacity>
        <View style={{ padding: 20 }}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill}></View>
          </View>
        </View>
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
              item.selected ? { borderColor: "black", borderWidth: 3 } : {},
            ]}
            onPress={() => handlePress(item.id)}
          >
            <Image
              style={{ width: 60, height: 60, top: -10 }}
              source={item.image}
            />
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
    backgroundColor: "#FFECE4",
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "#F889A2",
    borderWidth: 2,
    borderRadius: 5,
    margin: 6,
    paddingBottom: 10,
  },
  hobbyTitle: {
    backgroundColor: "#FA8366",
    //alignSelf: "flex-start",
    //width: 108,
    paddingLeft: 11,
    paddingRight: 11,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  progressBar: {
    width: 302,
    height: 8,
    backgroundColor: "#FFEAF0",
    borderRadius: 50,
    marginLeft: 40,
  },
  progressFill: {
    width: 210,
    height: 8,
    backgroundColor: "#C35D44",
    borderRadius: 50,
  },
});

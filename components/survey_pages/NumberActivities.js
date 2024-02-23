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

export default function Survey4({ navigation }) {
  const [numActivities, setNumActivities] = useState(2);
  const buttonPadding = 5;

  const handleInputChange = (input) => {
    if (typeof parseInt(input, 10) === "number" && input > 0) {
      setNumActivities(parseInt(input, 10));
    }
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View>
        <Text
          style={{ position: "absolute", top: 20, left: 30, zIndex: 3 }}
          onPress={() => navigation.navigate("ActivityPreferences")}
        >
          back
        </Text>
        <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          One last step!
        </Text>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginLeft: 32,
            marginRight: 32,
          }}
        >
          How many activities do you want to try?
        </Text>
        <Text
          style={{
            color: "#AFB1B6",
            fontSize: 12,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Input number of activities
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 22 }}>
          I would like to try
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            gap: 24,
          }}
        >
          <Text
            style={{ paddingLeft: buttonPadding, paddingRight: buttonPadding }}
            onPress={() => handleInputChange(numActivities - 1)}
          >
            -
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange(value)}
            keyboardType="numeric"
            value={
              Number.isNaN(numActivities)
                ? setNumActivities(0)
                : numActivities.toString()
            }
          />
          <Text
            style={{ paddingLeft: buttonPadding, paddingRight: buttonPadding }}
            onPress={() => handleInputChange(numActivities + 1)}
          >
            +
          </Text>
        </View>
        <Text style={{ fontSize: 20, marginTop: 20 }}>activities</Text>
        <Text style={{ fontSize: 20 }}>every month</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    top: -20,
  },
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
  input: {
    width: 50,
    height: 48,
    borderRadius: 15,
    borderColor: "#8C8C8C",
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
  },
});

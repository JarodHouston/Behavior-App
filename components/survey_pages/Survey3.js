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

export default function Survey3({ navigation }) {
  const [numActivities, setNumActivities] = useState("2");
  const buttonPadding = 5;
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text>
      <View style={styles.container}>
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
            marginTop: 60,
          }}
        >
          Input number of activities
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 36 }}>
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
            onPress={() => setNumActivities(numActivities - 1)}
          >
            -
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setNumActivities(value)}
            placeholder="2"
            //keyboardType="numeric"
            value={numActivities}
          />
          <Text
            style={{ paddingLeft: buttonPadding, paddingRight: buttonPadding }}
            onPress={() => setNumActivities(numActivities + 1)}
          >
            +
          </Text>
        </View>
        <Text style={{ fontSize: 20, marginTop: 20 }}>activities</Text>
        <Text style={{ fontSize: 20 }}>every month</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Survey4")}
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

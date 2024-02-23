import { useState } from "react";
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

export default function Survey3({ navigation }) {
  const [optionSelected, setOptionSelected] = useState(2);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View>
        <Text
          style={{ position: "absolute", top: 20, left: 30, zIndex: 3 }}
          onPress={() => navigation.navigate("GeneralPreferences")}
        >
          back
        </Text>
        <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, marginBottom: 14 }}>Almost Done!</Text>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          Choose one of the following options to find activities that suit your
          preferences
        </Text>
        <Pressable
          style={[
            styles.ellipseOption,
            { marginTop: 36 },
            optionSelected === 0
              ? { borderWidth: 2, borderColor: "black" }
              : {},
          ]}
          onPress={() => setOptionSelected(0)}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>Deepen</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            My Current Interests
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.ellipseOption,
            optionSelected === 1
              ? { borderWidth: 2, borderColor: "black" }
              : {},
          ]}
          onPress={() => setOptionSelected(1)}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>Expand</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>My Horizons</Text>
        </Pressable>
        <Pressable
          style={[
            styles.ellipseOption,
            optionSelected === 2
              ? { borderWidth: 2, borderColor: "black" }
              : {},
          ]}
          onPress={() => setOptionSelected(2)}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>Show Me</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Anything</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          optionSelected === 2
            ? navigation.navigate("NumberActivities")
            : navigation.navigate("ActivityInterests")
        }
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
    marginLeft: 20,
    marginRight: 20,
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
  ellipseOption: {
    backgroundColor: "#D9D9D9",
    width: 135,
    height: 128,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 21,
  },
});

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
  Image,
  TouchableOpacity,
} from "react-native";

export default function Survey3({ navigation }) {
  const [optionSelected, setOptionSelected] = useState(2);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity
          style={{ justifyContent: "center", position: "absolute", zIndex: 3 }}
          onPress={() => navigation.navigate("GeneralPreferences")}
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
    backgroundColor: "#F7A38E",
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
    backgroundColor: "#FFD2DC",
    width: 135,
    height: 128,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 21,
    // shadowColor: "black",
    // shadowOffset: { width: 1, height: 3 },
    // shadowOpacity: 0.3,
  },
  progressBar: {
    width: 302,
    height: 8,
    backgroundColor: "#FFEAF0",
    borderRadius: 50,
    marginLeft: 40,
  },
  progressFill: {
    width: 160,
    height: 8,
    backgroundColor: "#C35D44",
    borderRadius: 50,
  },
});

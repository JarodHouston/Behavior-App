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

export default function Survey4({ navigation }) {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text>
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>One last step!</Text>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          Choose one of the following options to find activities that suit your
          preferences
        </Text>
        <View style={[styles.ellipseOption, { marginTop: 36 }]}>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Deepen</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            My Current Interests
          </Text>
        </View>
        <View style={styles.ellipseOption}>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Expand</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>My Horizons</Text>
        </View>
        <View style={styles.ellipseOption}>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Show Me</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Anything</Text>
        </View>
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

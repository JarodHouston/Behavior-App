import { StyleSheet, View, SafeAreaView, Text, Pressable } from "react-native";

export default function AccountCreated({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 30,
              fontWeight: "bold",
              width: 200,
              textAlign: "center",
            }}
          >
            You are almost done!
          </Text>
          <Text
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              fontSize: 15,
              textAlign: "center",
              lineHeight: 26,
              width: 300,
            }}
          >
            We want to get to know you! Help us personalize your experience by
            answering a quick questionnaire.
          </Text>
        </View>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("GeneralPreferences")}
          >
            <Text style={{ color: "white", fontSize: 17 }}>Continue</Text>
          </Pressable>
          <Text
            style={{
              marginLeft: 50,
              marginRight: 50,
              marginTop: 26,
              fontSize: 12,
              textAlign: "center",
              lineHeight: 22,
            }}
          >
            Not ready to personalize your experience yet?
          </Text>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 12,
              marginTop: 6,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            Skip for now
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 525,
    marginTop: "auto",
    marginBottom: "auto",
    alignContent: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#F7A38E",
    borderRadius: 7,
    width: 304,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});

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
            }}
          >
            Account Created!
          </Text>
          <Text
            style={{
              marginLeft: 30,
              marginRight: 30,
              marginTop: 14,
              fontSize: 15,
              textAlign: "center",
              lineHeight: 26,
            }}
          >
            Your account has been created successfully! Continue to start using
            app.
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
              marginTop: 16,
              fontSize: 12,
              textAlign: "center",
              lineHeight: 22,
            }}
          >
            By clicking start, you agree to our{" "}
            <Text
              style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            >
              Privacy Policy
            </Text>{" "}
            our{" "}
            <Text
              style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            >
              Terms and Conditions
            </Text>
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

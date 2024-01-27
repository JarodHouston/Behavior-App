import { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput } from "react-native";
import { Switch, Pressable } from "react-native";

export default function SignUpPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View style={styles.image}></View>
      <View style={inputStyles.inputContainer}>
        <View>
          <Text style={inputStyles.inputLabel}>Email Address</Text>
          <TextInput
            style={inputStyles.input}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => {
              alert(`Your message is ${email}`);
            }}
            placeholder="Input Text"
            value={email}
          />
        </View>
        <View>
          <Text style={inputStyles.inputLabel}>Username</Text>
          <TextInput
            style={inputStyles.input}
            onChangeText={(text) => setUsername(text)}
            onSubmitEditing={() => {
              alert(`Your message is ${username}`);
            }}
            placeholder="Input Text"
            value={username}
          />
        </View>
        <View>
          <Text style={inputStyles.inputLabel}>Password</Text>
          <TextInput
            style={inputStyles.input}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => {
              alert(`Your message is ${password}`);
            }}
            placeholder="Input Text"
            value={password}
          />
        </View>
      </View>
      <View style={styles.toggleContainer}>
        <Switch
          title="Click"
          value={toggleCheckBox}
          onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
        />
        <Text style={{ marginLeft: 8, fontSize: 12 }}>
          By creating your account you have to agree to our{" "}
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Terms and Conditions
          </Text>
          .
        </Text>
      </View>
      <Pressable
        style={[styles.button, { marginTop: 30 }]}
        onPress={() => navigation.navigate("AccountCreated")}
      >
        <Text style={styles.buttonText}>Create account</Text>
      </Pressable>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 42,
          fontSize: 12,
        }}
      >
        Already have an account? -{" "}
        <Text style={{ fontWeight: "bold" }}>Sign In</Text>
      </Text>
      <Pressable
        style={[styles.button, { marginTop: 14 }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const inputStyles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
  },
  input: {
    height: 62,
    margin: 28,
    marginTop: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    paddingTop: 26,
    fontSize: 16,
  },
  inputEach: {
    position: "relative",
  },
  inputLabel: {
    position: "absolute",
    top: 24,
    left: 38,
    fontSize: 12,
  },
});

const styles = StyleSheet.create({
  signUpContainer: {
    height: "100%",
    //backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 146,
    backgroundColor: "#AFB1B6",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 44,
    borderWidth: 1,
    borderRadius: 7,
  },
  toggleContainer: {
    flexDirection: "row",
    margin: 16,
    marginLeft: 60,
    marginRight: 100,
  },
  button: {
    backgroundColor: "#979797",
    borderRadius: 7,
    width: 304,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
});

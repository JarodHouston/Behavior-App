import { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
} from "react-native";
import { Switch, Pressable } from "react-native";

export default function SignUpPage({ navigation }) {
  const [signingIn, setSigningIn] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.signUpContainer}>
      {/* <View style={styles.image}></View> */}
      <Image
        style={styles.image}
        source={require("./icons/HobbyHopperLogo.png")}
      />
      <View style={inputStyles.inputContainer}>
        {!signingIn && (
          <View>
            <Text style={inputStyles.inputLabel}>Email Address</Text>
            <TextInput
              style={inputStyles.input}
              onChangeText={(text) => setEmail(text)}
              placeholder="Input Text"
              value={email}
            />
          </View>
        )}
        <View>
          <Text style={inputStyles.inputLabel}>Username</Text>
          <TextInput
            style={inputStyles.input}
            onChangeText={(text) => setUsername(text)}
            placeholder="Input Text"
            value={username}
          />
        </View>
        <View>
          <Text style={inputStyles.inputLabel}>Password</Text>
          <TextInput
            style={inputStyles.input}
            onChangeText={(text) => setPassword(text)}
            placeholder="Input Text"
            value={password}
          />
        </View>
      </View>
      {!signingIn && (
        <View style={styles.toggleContainer}>
          <Switch
            title="Click"
            value={toggleCheckBox}
            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
          />
          <Text style={{ marginLeft: 8, fontSize: 12 }}>
            By creating your account you have to agree to our{" "}
            <Text
              style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            >
              Terms and Conditions
            </Text>
            .
          </Text>
        </View>
      )}
      <Pressable
        style={[styles.button, { marginTop: 24 }]}
        onPress={() => {
          if (!signingIn) {
            navigation.navigate("AccountCreated");
          } else {
            navigation.navigate("Home");
          }
        }}
      >
        {!signingIn ? (
          <Text style={styles.buttonText}>Create account</Text>
        ) : (
          <Text style={styles.buttonText}>Log In</Text>
        )}
      </Pressable>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 34,
          fontSize: 12,
        }}
      >
        {!signingIn ? (
          <Text>Already have an account? - </Text>
        ) : (
          <Text>Don't have an account yet?</Text>
        )}
        {!signingIn && <Text style={{ fontWeight: "bold" }}>Log In</Text>}
      </Text>
      <Pressable
        style={[styles.button, { marginTop: 14, backgroundColor: "#F7C1CD" }]}
        onPress={() => {
          if (!signingIn) {
            setSigningIn(true);
          } else {
            // navigation.navigate("Home", { displayType: "default" });
            setSigningIn(false);
          }
        }}
      >
        {!signingIn ? (
          <Text style={styles.buttonText}>Log In</Text>
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
}

const inputStyles = StyleSheet.create({
  inputContainer: {
    marginTop: 16,
  },
  input: {
    height: 62,
    margin: 28,
    marginTop: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    paddingTop: 26,
    fontSize: 16,
    backgroundColor: "#fffefe",
  },
  inputEach: {
    position: "relative",
  },
  inputLabel: {
    position: "absolute",
    top: 20,
    left: 38,
    fontSize: 12,
    zIndex: 3,
  },
});

const styles = StyleSheet.create({
  signUpContainer: {
    height: "100%",
    backgroundColor: "#FFFCF3",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#F7A38E",
  },
  // image: {
  //   width: 250,
  //   height: 146,
  //   backgroundColor: "#AFB1B6",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   marginTop: 44,
  //   borderWidth: 1,
  //   borderRadius: 7,
  // },
  toggleContainer: {
    flexDirection: "row",
    margin: 16,
    marginLeft: 60,
    marginRight: 100,
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
  buttonText: {
    color: "white",
    fontSize: 17,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import { Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/Home";
import AccountCreated from "./components/AccountCreated";
import Survey1 from "./components/survey_pages/Survey1";
import Survey2 from "./components/survey_pages/Survey2";

////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AccountCreated" component={AccountCreated} />
        <Stack.Screen name="Survey1" component={Survey1} />
        <Stack.Screen name="Survey2" component={Survey2} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <Text>Jarod is amazing! Woah</Text>
    //   {/* <TextInput style={styles.input} value="Username" /> */}
    //   <StatusBar style="auto" />
    //   <Button
    //     title="Go to New Page"
    //     onPress={() => navigation.navigate("SignUp")}
    //   />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

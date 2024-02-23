import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import { Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/Home";
import AccountCreated from "./components/AccountCreated";
import GeneralPreferences from "./components/survey_pages/GeneralPreferences";
import ActivityInterests from "./components/survey_pages/ActivityInterests";
import ActivityPreferences from "./components/survey_pages/ActivityPreferences";
import NumberActivities from "./components/survey_pages/NumberActivities";
import Profile from "./components/Profile";
import FriendProfile from "./components/FriendProfile";

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
        <Stack.Screen
          name="GeneralPreferences"
          component={GeneralPreferences}
        />
        <Stack.Screen name="ActivityInterests" component={ActivityInterests} />
        <Stack.Screen
          name="ActivityPreferences"
          component={ActivityPreferences}
        />
        <Stack.Screen name="NumberActivities" component={NumberActivities} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
      </Stack.Navigator>
    </NavigationContainer>
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

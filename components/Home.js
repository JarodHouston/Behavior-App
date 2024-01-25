import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import { Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>This is the Home page!</Text>
      <Button
        title="Sign up page"
        onPress={() => navigation.navigate("SignUp")}
      />
    </SafeAreaView>
  );
}

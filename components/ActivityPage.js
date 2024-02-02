import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
} from "react-native";

export default function ActivityPage({ navigation }) {
  return (
    <SafeAreaView>
      <Text>hi</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 17 }}>HOME</Text>
      </Pressable>
    </SafeAreaView>
  );
}

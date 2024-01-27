import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";

const optionTextSize = 22;

export default function Survey1({ navigation }) {
  const [distnaceOptions, setDistanceOptions] = useState(false);
  const [dayNightOptions, setDayNightOptions] = useState(false);
  const [activeChillOptions, setActiveChillOptions] = useState(false);
  const [indoorOutdoorOptions, setIndoorOutdoorOptions] = useState(false);
  const [groupSizeOptions, setGroupSizeOptions] = useState(false);
  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text>
      <Text style={{ textAlign: "center", fontSize: 24 }}>
        Select your preference
      </Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.surveyContainer}>
          <View style={styles.optionContainer}>
            <View>
              <Pressable
                style={styles.surveyButton}
                onPress={() => setDistanceOptions(!distnaceOptions)}
              >
                <Text style={{ fontSize: optionTextSize }}>Distance</Text>
              </Pressable>
              {distnaceOptions && (
                <View>
                  <View style={styles.option}>
                    <Text>5 miles</Text>
                  </View>
                  <View style={[styles.option, { top: -1 }]}>
                    <Text>10 miles</Text>
                  </View>
                  <View style={[styles.option, { top: -2 }]}>
                    <Text>15 miles</Text>
                  </View>
                  <View style={[styles.option, { top: -3 }]}>
                    <Text>25 miles</Text>
                  </View>
                  <View style={[styles.option, { top: -4 }]}>
                    <Text>50 miles</Text>
                  </View>
                </View>
              )}
            </View>
            <View>
              <Pressable
                style={styles.surveyButton}
                onPress={() => setDayNightOptions(!dayNightOptions)}
              >
                <Text style={{ fontSize: optionTextSize }}>Day / Night</Text>
              </Pressable>
              {dayNightOptions && (
                <View>
                  <View style={styles.option}>
                    <Text>Day</Text>
                  </View>
                  <View style={[styles.option, { top: -1 }]}>
                    <Text>Night</Text>
                  </View>
                </View>
              )}
            </View>
            <View>
              <Pressable
                style={styles.surveyButton}
                onPress={() => setActiveChillOptions(!activeChillOptions)}
              >
                <Text style={{ fontSize: optionTextSize }}>
                  Active vs. Chill
                </Text>
              </Pressable>
              {activeChillOptions && (
                <View>
                  <View style={styles.option}>
                    <Text>Active</Text>
                  </View>
                  <View style={[styles.option, { top: -1 }]}>
                    <Text>Chill</Text>
                  </View>
                </View>
              )}
            </View>
            <View>
              <Pressable
                style={styles.surveyButton}
                onPress={() => setIndoorOutdoorOptions(!indoorOutdoorOptions)}
              >
                <Text style={{ fontSize: optionTextSize }}>
                  Indoor vs. Outdoor
                </Text>
              </Pressable>
              {indoorOutdoorOptions && (
                <View>
                  <View style={styles.option}>
                    <Text>Indoor</Text>
                  </View>
                  <View style={[styles.option, { top: -1 }]}>
                    <Text>Outdoor</Text>
                  </View>
                </View>
              )}
            </View>
            <View>
              <Pressable
                style={styles.surveyButton}
                onPress={() => setGroupSizeOptions(!groupSizeOptions)}
              >
                <Text style={{ fontSize: optionTextSize }}>Group size</Text>
              </Pressable>
              {groupSizeOptions && (
                <View>
                  <View style={styles.option}>
                    <Text>1</Text>
                  </View>
                  <View style={[styles.option, { top: -1 }]}>
                    <Text>2-5</Text>
                  </View>
                  <View style={[styles.option, { top: -2 }]}>
                    <Text>6-10</Text>
                  </View>
                  <View style={[styles.option, { top: -3 }]}>
                    <Text>10-14</Text>
                  </View>
                  <View style={[styles.option, { top: -4 }]}>
                    <Text>15+</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Survey2")}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    //backgroundColor: "green",
    height: "80%",
    padding: 0,
  },
  surveyContainer: {
    height: "95%",
    //backgroundColor: "blue",
    paddingTop: 20,
    paddingBottom: 36,
    justifyContent: "space-between",
  },
  optionContainer: {
    //backgroundColor: "red",
    justifyContent: "space-between",
    marginBottom: 40,
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
    top: -20,
  },
  surveyButton: {
    backgroundColor: "#D9D9D9",
    width: 304,
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  option: {
    width: 304,
    height: 46,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#AFB1B6",
  },
});

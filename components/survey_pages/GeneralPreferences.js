import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const optionTextSize = 22;

export default function Survey1({ navigation }) {
  const [distanceOptionsState, setDistanceOptionsState] = useState(false);
  const [dayNightOptionsState, setDayNightOptionsState] = useState(false);
  const [activeChillOptionsState, setActiveChillOptionsState] = useState(false);
  const [indoorOutdoorOptionsState, setIndoorOutdoorOptionsState] =
    useState(false);
  const [groupSizeOptionsState, setGroupSizeOptionsState] = useState(false);

  const [distanceOptionSelected, setDistanceOptionSelected] = useState(5);
  const [dayNightOptionSelected, setDayNightOptionsSelected] = useState(2);
  const [activeChillOptionsSelected, setActiveChillOptionsSelected] =
    useState(2);
  const [indoorOutdoorOptionsSelected, setIndoorOutdoorOptionsSelected] =
    useState(2);
  const [groupSizeOptionsSelected, setGroupSizeOptionsSelected] = useState(5);

  const distanceOptions = [
    {
      id: 0,
      title: "5 miles",
    },
    {
      id: 1,
      title: "10 miles",
    },
    {
      id: 2,
      title: "15 miles",
    },
    {
      id: 3,
      title: "25 miles",
    },
    {
      id: 4,
      title: "50 miles",
    },
    {
      id: 5,
      title: "No preference",
    },
  ];
  const dayNightOptions = [
    {
      id: 0,
      title: "Day",
    },
    {
      id: 1,
      title: "Night",
    },
    {
      id: 2,
      title: "No preference",
    },
  ];
  const activeChillOptions = [
    {
      id: 0,
      title: "Active",
    },
    {
      id: 1,
      title: "Chill",
    },
    {
      id: 2,
      title: "No preference",
    },
  ];
  const indoorOutdoorOptions = [
    {
      id: 0,
      title: "Indoor",
    },
    {
      id: 1,
      title: "Outdoor",
    },
    {
      id: 2,
      title: "No preference",
    },
  ];
  const groupSizeOptions = [
    {
      id: 0,
      title: "1 person",
    },
    {
      id: 1,
      title: "2-5 people",
    },
    {
      id: 2,
      title: "6-10 people",
    },
    {
      id: 3,
      title: "11-14 people",
    },
    {
      id: 4,
      title: "15+ people",
    },
    {
      id: 5,
      title: "No preference",
    },
  ];

  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity
          style={{ justifyContent: "center", position: "absolute", zIndex: 3 }}
          onPress={() => navigation.navigate("AccountCreated")}
        >
          <View style={{ width: 22, height: 22 }}>
            <Image
              style={{
                position: "absolute",
                left: 24,
                zIndex: 3,
                width: 22,
                height: 22,
              }}
              source={require("../icons/back.png")}
            />
          </View>
        </TouchableOpacity>
        <View style={{ padding: 20 }}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill}></View>
          </View>
        </View>
        {/* <Text style={{ textAlign: "center", padding: 20 }}>Progress Bar</Text> */}
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            marginBottom: 0,
            width: "90%",
          }}
        >
          Let us know your activity preferences
        </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.surveyContainer}>
          <View style={styles.optionContainer}>
            <View>
              <Pressable
                style={[
                  styles.surveyButton,
                  !distanceOptionsState ? styles.buttonShadow : {},
                ]}
                onPress={() => setDistanceOptionsState(!distanceOptionsState)}
              >
                <Text style={{ fontSize: optionTextSize }}>Distance</Text>
              </Pressable>
              {distanceOptionsState &&
                distanceOptions.map((option) => (
                  <Pressable
                    key={option.id}
                    style={[
                      styles.option,
                      { top: option.id * -1 },
                      distanceOptionSelected === option.id
                        ? styles.selectedPreference
                        : {},
                    ]}
                    onPress={() => setDistanceOptionSelected(option.id)}
                  >
                    <Text
                      style={
                        distanceOptionSelected === option.id
                          ? { fontWeight: "bold" }
                          : {}
                      }
                    >
                      {option.title}
                    </Text>
                  </Pressable>
                ))}
            </View>
            <View>
              <Pressable
                style={[
                  styles.surveyButton,
                  !dayNightOptionsState ? styles.buttonShadow : {},
                ]}
                onPress={() => setDayNightOptionsState(!dayNightOptionsState)}
              >
                <Text style={{ fontSize: optionTextSize }}>Day vs. Night</Text>
              </Pressable>
              {dayNightOptionsState &&
                dayNightOptions.map((option) => (
                  <Pressable
                    key={option.id}
                    style={[
                      styles.option,
                      { top: option.id * -1 },
                      dayNightOptionSelected === option.id
                        ? styles.selectedPreference
                        : {},
                    ]}
                    onPress={() => setDayNightOptionsSelected(option.id)}
                  >
                    <Text
                      style={
                        dayNightOptionSelected === option.id
                          ? { fontWeight: "bold" }
                          : {}
                      }
                    >
                      {option.title}
                    </Text>
                  </Pressable>
                ))}
            </View>
            <View>
              <Pressable
                style={[
                  styles.surveyButton,
                  !activeChillOptionsState ? styles.buttonShadow : {},
                ]}
                onPress={() =>
                  setActiveChillOptionsState(!activeChillOptionsState)
                }
              >
                <Text style={{ fontSize: optionTextSize }}>
                  Active vs. Chill
                </Text>
              </Pressable>
              {activeChillOptionsState &&
                activeChillOptions.map((option) => (
                  <Pressable
                    key={option.id}
                    style={[
                      styles.option,
                      { top: option.id * -1 },
                      activeChillOptionsSelected === option.id
                        ? styles.selectedPreference
                        : {},
                    ]}
                    onPress={() => setActiveChillOptionsSelected(option.id)}
                  >
                    <Text
                      style={
                        activeChillOptionsSelected === option.id
                          ? { fontWeight: "bold" }
                          : {}
                      }
                    >
                      {option.title}
                    </Text>
                  </Pressable>
                ))}
            </View>
            <View>
              <Pressable
                style={[
                  styles.surveyButton,
                  !indoorOutdoorOptionsState ? styles.buttonShadow : {},
                ]}
                onPress={() =>
                  setIndoorOutdoorOptionsState(!indoorOutdoorOptionsState)
                }
              >
                <Text style={{ fontSize: optionTextSize }}>
                  Indoor vs. Outdoor
                </Text>
              </Pressable>
              {indoorOutdoorOptionsState &&
                indoorOutdoorOptions.map((option) => (
                  <Pressable
                    key={option.id}
                    style={[
                      styles.option,
                      { top: option.id * -1 },
                      indoorOutdoorOptionsSelected === option.id
                        ? styles.selectedPreference
                        : {},
                    ]}
                    onPress={() => setIndoorOutdoorOptionsSelected(option.id)}
                  >
                    <Text
                      style={
                        indoorOutdoorOptionsSelected === option.id
                          ? { fontWeight: "bold" }
                          : {}
                      }
                    >
                      {option.title}
                    </Text>
                  </Pressable>
                ))}
            </View>
            <View>
              <Pressable
                style={[
                  styles.surveyButton,
                  !groupSizeOptionsState ? styles.buttonShadow : {},
                ]}
                onPress={() => setGroupSizeOptionsState(!groupSizeOptionsState)}
              >
                <Text style={{ fontSize: optionTextSize }}>Solo vs. Group</Text>
              </Pressable>
              {groupSizeOptionsState &&
                groupSizeOptions.map((option) => (
                  <Pressable
                    key={option.id}
                    style={[
                      styles.option,
                      { top: option.id * -1 },
                      groupSizeOptionsSelected === option.id
                        ? styles.selectedPreference
                        : {},
                    ]}
                    onPress={() => setGroupSizeOptionsSelected(option.id)}
                  >
                    <Text
                      style={
                        groupSizeOptionsSelected === option.id
                          ? { fontWeight: "bold" }
                          : {}
                      }
                    >
                      {option.title}
                    </Text>
                  </Pressable>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ActivityPreferences")}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: "80%",
    padding: 0,
  },
  surveyContainer: {
    height: "95%",
    paddingBottom: 36,
    justifyContent: "space-between",
  },
  optionContainer: {
    justifyContent: "space-between",
    marginBottom: 40,
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
    top: -36,
  },
  buttonShadow: {
    shadowColor: "black",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
  },
  surveyButton: {
    backgroundColor: "#fce4ca",
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
    borderColor: "#FA9B84",
  },
  selectedPreference: {
    borderColor: "black",
    borderWidth: 2,
    zIndex: 2,
  },
  progressBar: {
    width: 302,
    height: 8,
    backgroundColor: "#FFEAF0",
    borderRadius: 50,
    marginLeft: 40,
  },
  progressFill: {
    width: 60,
    height: 8,
    backgroundColor: "#C35D44",
    borderRadius: 50,
  },
});

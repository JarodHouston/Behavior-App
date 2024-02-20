import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";

import Navbar from "./items/Navbar";

export default function Home({ navigation, route }) {
  const { displayType } = route.params ?? { displayType: "default" };

  const [activitySelected, setActivitySelected] = useState(false);
  const [registrationPopup, setRegistartionPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [ticketValue, setTicketValue] = useState("1");

  const [registered1, setRegistered1] = useState(false);
  const [registered2, setRegistered2] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const events = [
    {
      id: 0,
      eventTitle: "Griffith Observatory Yoga",
      date: "Saturday, February 3",
      time: "10 am - 12 pm PST",
      price: 1,
      eventDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      registered: true,
      passed: false,
    },
    {
      id: 1,
      eventTitle: "Echo Park Yoga",
      date: "Saturday, February 3",
      time: "10 am - 12 pm PST",
      price: 1,
      eventDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      registered: true,
      passed: false,
    },
    {
      id: 2,
      eventTitle: "Silverlake Yoga",
      date: "Saturday, February 3",
      time: "8 am - 10 am PST",
      price: 2,
      eventDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      registered: false,
      passed: true,
    },
    {
      id: 3,
      eventTitle: "Puppy Yoga",
      date: "Saturday, February 3",
      time: "9 am - 10 am PST",
      price: 3,
      eventDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      registered: false,
      passed: true,
    },
  ];

  const similarEvents = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];

  function selectActivity(id) {
    if (!activitySelected) {
      setActivitySelected(true);
      setSelectedId(id);
    } else {
      setActivitySelected(false);
      setSelectedId(0);
    }
  }

  function registerForEvent(id) {
    setRegistartionPopup(true);
    setSelectedId(id);
  }

  return (
    <View>
      {(registrationPopup || confirmationPopup) && (
        <View
          style={[
            {
              width: "100%",
              //height: '104.6%',
              position: "absolute",
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
            },
            activitySelected ? { height: "89%" } : { height: "89.6%" },
          ]}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0.65,
              position: "absolute",
              zIndex: 2,
            }}
          ></View>
          {registrationPopup && (
            <View style={popUpStyles.register}>
              <Text
                style={popUpStyles.closeButton}
                onPress={() => setRegistartionPopup(false)}
              >
                X
              </Text>
              <View
                style={{
                  alignItems: "center",
                  height: 70,
                  justifyContent: "space-between",
                  //marginTop: 40,
                }}
              >
                <Text style={{ fontSize: 22 }}>
                  {events.at(selectedId).eventTitle}
                </Text>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 14 }}>
                    {events.at(selectedId).date}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    {events.at(selectedId).time}
                  </Text>
                </View>
              </View>
              <View style={popUpStyles.eventDetails}>
                <Text style={{ fontSize: 16, textDecorationLine: "underline" }}>
                  Event Details
                </Text>
                <Text style={{ fontSize: 14, lineHeight: 20, marginTop: 7 }}>
                  {events.at(selectedId).eventDescription}
                </Text>
              </View>
              <View style={popUpStyles.registration}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Registration
                </Text>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>RSVP</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    $5.00
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 20, gap: 13 }}>
                <Text>Select number of tickets</Text>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 13,
                  }}
                >
                  <Text>-</Text>
                  <TextInput
                    style={popUpStyles.ticketInput}
                    onChangeText={(value) => setTicketValue(value)}
                    placeholder="1"
                    //keyboardType="numeric"
                    value={ticketValue}
                  />
                  <Text>+</Text>
                </View>
              </View>
              <Pressable
                style={popUpStyles.confirmButton}
                onPress={() => {
                  setRegistartionPopup(false);
                  setConfirmationPopup(true);
                }}
              >
                <Text style={{ fontSize: 17, color: "white" }}>Confirm</Text>
              </Pressable>
            </View>
          )}
          {confirmationPopup && (
            <View style={popUpStyles.confirmation}>
              <Text
                style={popUpStyles.closeButton}
                onPress={() => setConfirmationPopup(false)}
              >
                X
              </Text>
              <Text style={{ fontSize: 20, textAlign: "center" }}>
                {events.at(selectedId).eventTitle}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).date}
                </Text>
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).time}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 22,
                  width: 150,
                  textAlign: "center",
                  marginTop: 36,
                  marginBottom: 36,
                  lineHeight: 28,
                  letterSpacing: 0.4,
                }}
              >
                You are now registered to this event!
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: "underline",
                  color: "#19191B",
                }}
              >
                See Event Details
              </Text>
              <Pressable
                style={popUpStyles.confirmButton}
                onPress={() => setConfirmationPopup(false)}
              >
                <Text style={{ fontSize: 17, color: "white" }}>Done</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
      <Navbar navigation={navigation} />
      <ScrollView>
        {events.map((ev) => (
          <View key={ev.id}>
            {(!activitySelected || ev.id === selectedId) &&
              (displayType === "default" ||
                (displayType === "history" && ev.passed) ||
                (displayType === "registered" && ev.registered)) && (
                <View>
                  <TouchableOpacity
                    style={
                      activitySelected
                        ? styles.eventCardSelected
                        : styles.eventCard
                    }
                    onPress={() => selectActivity(ev.id)}
                    activeOpacity={1}
                  >
                    {!activitySelected && (
                      <View style={styles.vendorTag}>
                        <Text>Verified Vendor</Text>
                      </View>
                    )}
                    {activitySelected && (
                      <View style={eventStyles.authorContainer}>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <View
                            style={{
                              width: 29,
                              height: 29,
                              borderColor: "#AFB1B6",
                              borderWidth: 1,
                              borderRadius: 50,
                            }}
                          ></View>
                          <View
                            style={{
                              height: "88%",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text style={{ fontSize: 13 }}>
                              By Outdoorsy Outdoorsman
                            </Text>
                            <Text style={{ fontSize: 13 }}>301 Followers</Text>
                          </View>
                        </View>
                        <Pressable style={eventStyles.followButton}>
                          <Text style={{ color: "white" }}>Follow</Text>
                        </Pressable>
                      </View>
                    )}
                    <View style={styles.cardInfo}>
                      <Text style={{ fontSize: 24 }}>
                        {events.at(ev.id).eventTitle}
                      </Text>
                      <Text style={{ fontSize: 15, width: 150, marginTop: 12 }}>
                        {events.at(ev.id).date} {events.at(ev.id).time}
                      </Text>
                      <Text style={{ fontSize: 15 }}>
                        $<Text style={{ opacity: 0.2 }}>$$$</Text>
                      </Text>
                      {displayType !== "history" && (
                        <Pressable
                          style={styles.signUpButton}
                          onPress={() => registerForEvent(ev.id)}
                        >
                          <Text style={{ fontSize: 12, color: "#838282" }}>
                            {displayType === "default" && <Text>Sign Up</Text>}
                            {displayType === "registered" && (
                              <Text>Registered</Text>
                            )}
                          </Text>
                        </Pressable>
                      )}
                      {displayType === "registered" && (
                        <Text
                          style={{
                            fontSize: 16,
                            marginTop: 16,
                            textDecorationLine: "underline",
                          }}
                        >
                          Modify your registration
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                  {!activitySelected && (
                    <View style={styles.registeredFriends}>
                      <View style={{ flexDirection: "row", gap: -10 }}>
                        <View style={[styles.friendPic, { zIndex: 3 }]}></View>
                        <View style={[styles.friendPic, { zIndex: 2 }]}></View>
                        <View style={[styles.friendPic, { zIndex: 1 }]}></View>
                      </View>
                      <Text style={{ fontSize: 12 }}>
                        Jane Doe and 5 others are registered
                      </Text>
                    </View>
                  )}
                </View>
              )}
          </View>
        ))}
        {!activitySelected && <View style={{ marginBottom: 110 }}></View>}
        {activitySelected && (
          <View>
            <View style={eventStyles.eventInfoContainer}>
              <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
                Event Details
              </Text>
              <Text style={{ fontSize: 16, marginTop: 16, lineHeight: 22 }}>
                {events.at(selectedId).eventDescription}
              </Text>
            </View>
            <View style={eventStyles.tagContainer}>
              <View style={eventStyles.tag}>
                <Text>Tag</Text>
              </View>
              <View style={eventStyles.tag}>
                <Text>Tag</Text>
              </View>
              <View style={eventStyles.tag}>
                <Text>Tag</Text>
              </View>
              <View style={eventStyles.tag}>
                <Text>Tag</Text>
              </View>
            </View>
            <View
              style={[
                eventStyles.eventInfoContainer,
                eventStyles.venueInfoContainer,
              ]}
            >
              <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
                Venue Details
              </Text>
              <Text style={{ fontSize: 16, marginTop: 16, lineHeight: 22 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: "underline",
                  marginTop: 30,
                }}
              >
                View in Google Maps
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  textDecorationLine: "underline",
                  marginTop: 30,
                  marginLeft: 40,
                }}
              >
                Explore Similar Events
              </Text>
              <View style={eventStyles.similarEventContainer}>
                {similarEvents.map((item) => (
                  <View style={eventStyles.similarEvent} key={item.id}>
                    <Text>Details</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: "#E8E8E8",
    height: 500,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 38,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
  },
  eventCardSelected: {
    backgroundColor: "#E8E8E8",
    height: 440,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 10,
    paddingBottom: 30,
  },
  cardInfo: {
    marginTop: "auto",
    marginLeft: 44,
  },
  vendorTag: {
    backgroundColor: "#D9D9D9",
    width: 161,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 34,
    marginLeft: "auto",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  signUpButton: {
    backgroundColor: "#DADADA",
    marginTop: 16,
    borderRadius: 7,
    width: 108,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  lowerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 28,
    marginLeft: 25,
    marginRight: 25,
  },
  lowerButton: {
    backgroundColor: "#E8E8E8",
    width: 74,
    height: 74,
    borderRadius: 50,
    borderColor: "#838282",
    borderWidth: 2,
  },
  registeredFriends: {
    height: 62,
    zIndex: -1,
    backgroundColor: "#EFEFF0",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.05,
  },
  friendPic: {
    width: 25,
    height: 25,
    backgroundColor: "#E8E8E8",
    borderColor: "#838282",
    borderWidth: 1,
    borderRadius: 50,
  },
});

const eventStyles = StyleSheet.create({
  eventInfoContainer: {
    width: 354,
    height: 193,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32,
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
    borderColor: "#AFB1B6",
    borderWidth: 2,
    borderRadius: 8,
    paddingBottom: 6,
  },
  venueInfoContainer: {
    height: "auto",
    marginTop: 16,
    padding: 24,
    paddingBottom: 24,
  },
  tagContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 22,
    margin: 20,
  },
  tag: {
    width: 65,
    height: 32,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  similarEventContainer: {
    height: "100%",
    marginTop: 20,
    marginBottom: 200,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  similarEvent: {
    backgroundColor: "#E8E8E8",
    width: 182,
    height: 152,
    borderColor: "#AFB1B6",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 8,
    paddingRight: 16,
  },
  authorContainer: {
    width: "88%",
    height: 44,
    position: "relative",
    top: 30,
    marginLeft: "auto",
    marginRight: "auto",
    // top: -200,
    // left: -25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  followButton: {
    backgroundColor: "#979797",
    width: 99,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

const popUpStyles = StyleSheet.create({
  register: {
    width: 302,
    height: 520,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  eventDetails: {
    width: 269,
    height: 158,
    borderColor: "#AFB1B6",
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 26,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  registration: {
    width: "82%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 18,
  },
  ticketInput: {
    width: 67,
    height: 40,
    backgroundColor: "#AFB1B6",
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  confirmButton: {
    width: "100%",
    height: 54,
    backgroundColor: "#979797",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  closeButton: {
    position: "absolute",
    left: "90.8%",
    top: "2.5%",
    fontSize: 20,
  },
  confirmation: {
    width: 302,
    height: 381,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 48,
  },
});

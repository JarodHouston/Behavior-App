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
  Image,
} from "react-native";
import { useState } from "react";

import Navbar from "./items/Navbar";
import { useNavigationBuilder } from "@react-navigation/native";

export default function Home({ navigation, route }) {
  const { displayType } = route.params ?? {
    displayType: "default",
  };

  const [activitySelected, setActivitySelected] = useState(false);
  const [ticketValue, setTicketValue] = useState(1);
  const [review, setReview] = useState("");

  const [registrationPopup, setRegistartionPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [modifyPopup, setModifyPopup] = useState(false);
  const [attendedEventPopup, setAttendedEventPopup] = useState(false);
  const [missedEventPopup, setMissedEventPopup] = useState(false);
  const [confirmCancelPopup, setConfirmCancelPopup] = useState(false);
  const [confirmedCancelPopup, setConfirmedCancelPopup] = useState(false);

  const [registered1, setRegistered1] = useState(false);
  const [registered2, setRegistered2] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const events = [
    {
      id: 0,
      eventTitle: "Griffith Observatory Starry Yoga Night",
      date: "Saturday, February 3",
      time: "7 pm - 9 pm PST",
      price: 1,
      eventDescription:
        "Merge the tranquility of yoga with the awe-inspiring backdrop of the cosmos at Griffith Observatory. This unique experience combines a serene yoga session with a guided stargazing tour, allowing participants to stretch under the stars and explore the mysteries of the universe.",
      venueDescription:
        "Held on the expansive lawns surrounding the iconic Griffith Observatory, this event offers breathtaking views of Los Angeles and the night sky. The event starts just after sunset, around 7:00 PM, providing a perfect blend of natural beauty and cosmic wonder.",
      image: require("./images/events/GriffithObservatory.png"),
      tags: ["yoga", "outdoors", "group event"],
      registered: false,
      passed: false,
    },
    {
      id: 1, // 7
      eventTitle: "Mindfulness and Wellness Retreat",
      date: "Saturday, February 3",
      time: "8 am - 4 pm PST",
      price: 3,
      eventDescription:
        "A day dedicated to self-care, mindfulness, and holistic wellness. This event features yoga sessions, meditation workshops, motivational speakers, and wellness booths offering products and services related to health and well-being.",
      venueDescription:
        "Hosted at the serene Los Angeles County Arboretum and Botanic Garden, participants can connect with nature and find peace among the lush landscapes. The retreat runs from 8:00 AM to 4:00 PM.",
      image: require("./images/events/WellnessRetreat.png"),
      tags: ["nature", "outdoors", "group event"],
      registered: false,
      passed: false,
    },
    {
      id: 2, // 8
      eventTitle: "Indie Film Festival",
      date: "Saturday, February 3",
      time: "12 pm - 9 pm PST",
      price: 3,
      eventDescription:
        "Celebrate the art of independent filmmaking with screenings of short films, documentaries, and feature-length movies from up-and-coming directors and producers. The festival includes Q&A sessions with filmmakers, panel discussions on the future of indie cinema, and networking events.",
      venueDescription:
        "The festival takes place at the historic Egyptian Theatre in Hollywood, offering a classic cinema experience. Screenings and events are scheduled throughout the day and evening, providing flexible options for attendees.",
      image: require("./images/events/FilmFestival.png"),
      tags: ["movie", "indie", "all day"],
      registered: true,
      passed: false,
    },
    {
      id: 3, // 1
      eventTitle: "Echo Park Lake Sunrise Yoga",
      date: "Saturday, February 3",
      time: "6 am - 8 am PST",
      price: 1,
      eventDescription:
        "Welcome the new day with a rejuvenating yoga session by the serene waters of Echo Park Lake. This early morning class focuses on mindful movements and breathwork, set to the calming sounds of nature, creating a peaceful start to your day.",
      venueDescription:
        "Taking place on the north side of Echo Park Lake, participants will enjoy a scenic view of the water and downtown LA skyline. The session begins at 6:00 AM, allowing yogis to enjoy the tranquil beauty of the park at dawn.",
      image: require("./images/events/EchoPark.png"),
      tags: ["yoga", "outdoors", "nature"],
      registered: true,
      passed: false,
    },
    {
      id: 4, // 2
      eventTitle: "Silverlake Yoga in the Park",
      date: "Saturday, February 3",
      time: "9 am - 10 am PST",
      price: 2,
      eventDescription:
        "Join a community of yoga enthusiasts for an outdoor session in the heart of Silverlake. This event caters to all levels, from beginners to advanced practitioners, and offers a variety of yoga styles. After the session, enjoy mingling with fellow yogis in one of LA's most vibrant neighborhoods.",
      venueDescription:
        "This yoga gathering is located in Silver Lake Meadow, a spacious and grassy area known for its relaxed atmosphere. The event starts at 9:00 AM, making it an ideal morning activity that leaves the rest of the day open for exploration.",
      image: require("./images/events/Silverlake.png"),
      tags: ["yoga", "outdoors", "park"],
      registered: false,
      passed: true,
    },
    {
      id: 5, // 4
      eventTitle: "Sunset Jazz Nights",
      date: "Saturday, February 3",
      time: "6 pm - 9 pm PST",
      price: 3,
      eventDescription:
        "Enjoy an evening under the stars with some of LA's finest jazz musicians. This event features a lineup of local jazz bands and solo artists, bringing you a mix of classic jazz, contemporary, and fusion genres. Food and drinks are available from local vendors, creating a perfect ambiance for a relaxing evening.",
      venueDescription:
        "Held at The Getty Center's beautiful outdoor terrace, attendees can enjoy stunning views of Los Angeles while soaking in the soulful tunes. The event starts at 6:00 PM, just in time for a breathtaking sunset backdrop.",
      image: require("./images/events/SunsetJazz.png"),
      tags: ["music", "outdoors", "nature"],
      registered: false,
      passed: false,
    },
    {
      id: 6, // 5
      eventTitle: "Tech Innovators Expo",
      date: "Saturday, February 3",
      time: "10 am - 5 pm PST",
      price: 3,
      eventDescription:
        "A gathering of the brightest minds in the tech industry, showcasing the latest in tech innovations, startups, and digital trends. This event includes keynote speeches, panel discussions, and interactive workshops led by industry leaders and emerging entrepreneurs.",
      venueDescription:
        "Located at the Los Angeles Convention Center, this event spans multiple exhibition halls, providing ample space for demonstrations, networking, and hands-on experiences. The expo runs from 10:00 AM to 5:00 PM.",
      image: require("./images/events/TechExpo.png"),
      tags: ["tech", "exhibit", "group event"],
      registered: true,
      passed: false,
    },
    {
      id: 7, // 6
      eventTitle: "Culinary Carnival",
      date: "Saturday, February 3",
      time: "11 am - 10 pm PST",
      price: 3,
      eventDescription:
        "A food lover's paradise, featuring a wide array of cuisines from around the world. This event highlights LA's diverse culinary scene, with food trucks, pop-up restaurants, and live cooking demonstrations by renowned chefs. Attendees can indulge in tasting sessions, cooking classes, and culinary competitions.",
      venueDescription:
        "Set in Grand Park, this outdoor event offers a festive atmosphere with plenty of seating areas and live music stages. The carnival is open from 11:00 AM to 10:00 PM, providing a full day of gastronomic exploration.",
      image: require("./images/events/CulinaryCarnival.png"),
      tags: ["food", "outdoors", "diversity"],
      registered: true,
      passed: false,
    },
    {
      id: 8, // 9
      eventTitle: "Urban Art Walk",
      date: "Saturday, February 3",
      time: "3 pm - 8 pm PST",
      price: 3,
      eventDescription:
        "Explore the vibrant street art scene of LA with a guided tour through the city's most iconic murals, graffiti, and installations. This event also includes live art demonstrations, pop-up galleries, and discussions on the impact of urban art on community and culture.",
      venueDescription:
        "The art walk begins in the Arts District and winds through various neighborhoods, showcasing the work of both renowned and underground artists. The walk starts at 3:00 PM and concludes with an after-party at a local gallery.",
      image: require("./images/events/UrbanArtWalk.png"),
      tags: ["art", "outdoors", "party"],
      registered: false,
      passed: true,
    },
    {
      id: 9, // 3
      eventTitle: "Puppy Yoga at the Pet Rescue Center",
      date: "Saturday, February 3",
      time: "9 am - 10 am PST",
      price: 3,
      eventDescription:
        "Combine your love for yoga and furry friends at this heartwarming puppy yoga event. Held at a local pet rescue center, this session involves playful puppies roaming and interacting with participants as they practice, offering a dose of joy and relaxation.",
      venueDescription:
        "Hosted in the outdoor play area of the pet rescue center, this event not only provides a delightful yoga experience but also raises awareness and support for animal adoption. The session begins at 10:00 AM, offering a perfect blend of exercise, play, and philanthropy.",
      image: require("./images/events/PuppyYoga.jpeg"),
      tags: ["animals", "outdoors", "yoga"],
      registered: false,
      passed: false,
    },
    {
      id: 10,
      eventTitle: "Cooking 101",
      date: "Saturday, February 3",
      time: "2 pm - 5 pm PST",
      price: 3,
      eventDescription:
        "Looking to throw a fancy dinner party? Come join us as we teach you to make show-stopper meals with very low effort! You will be wowing all of your friends in no time after taking our Cooking 101 class. Learn to make a perfectly cooked ribeye roast in just one session!",
      venueDescription:
        "Tucked in a quaint neighborhood in West LA, the Adler features a large private venue equipped with a standard kitchen. You will get to enjoy the familiarity of an everyday kitchen to show that you can take the skills you learn home and whip up a great meal anytime you want. With small class sizes and plenty of space to operate, you will be right at home in this kitchen!",
      image: require("./images/events/Cooking.jpeg"),
      tags: ["food", "cooking", "group event"],
      registered: false,
      passed: false,
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

  const reasonsForMissing = [
    {
      id: 1,
      title: "Forgot",
    },
    {
      id: 2,
      title: "Something came up",
    },
    {
      id: 3,
      title: "Event was cancelled",
    },
    {
      id: 4,
      title: "Decided not to go",
    },
    {
      id: 5,
      title: "Reason not available",
    },
  ];

  function resetHome() {
    setActivitySelected(false);
    setRegistartionPopup(false);
    setConfirmationPopup(false);
    setModifyPopup(false);
    setAttendedEventPopup(false);
    setMissedEventPopup(false);
    setConfirmCancelPopup(false);
    setReview("");
    setTicketValue(1);
  }

  function selectActivity(id) {
    if (!activitySelected) {
      // if (displayType === "history" && id === 2) {
      //   setAttendedEventPopup(true);
      //   setReview("");
      // } else if (displayType === "history" && id === 3) {
      //   setMissedEventPopup(true);
      // }
      if (displayType === "history") {
        setAttendedEventPopup(true);
      }
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
    setTicketValue(1);
  }

  const updateNumberOfTickets = (input) => {
    if (typeof parseInt(input, 10) === "number" && input > 0) {
      setTicketValue(parseInt(input, 10));
    }
  };

  return (
    <View>
      {(registrationPopup ||
        confirmationPopup ||
        modifyPopup ||
        attendedEventPopup ||
        missedEventPopup ||
        confirmCancelPopup ||
        confirmedCancelPopup) && (
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
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    maxWidth: "90%",
                  }}
                >
                  {events.at(selectedId).eventTitle}
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
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
              <View style={{ marginTop: 20, marginBottom: 26, gap: 13 }}>
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
                  <Text onPress={() => updateNumberOfTickets(ticketValue - 1)}>
                    -
                  </Text>
                  <TextInput
                    style={popUpStyles.ticketInput}
                    onChangeText={(value) => updateNumberOfTickets(value)}
                    keyboardType="numeric"
                    value={
                      Number.isNaN(ticketValue)
                        ? setTicketValue(0)
                        : ticketValue.toString()
                    }
                  />
                  <Text onPress={() => updateNumberOfTickets(ticketValue + 1)}>
                    +
                  </Text>
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
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  width: "80%",
                }}
              >
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
                  marginTop: 30,
                  marginBottom: 40,
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
                  marginTop: 10,
                  marginBottom: 30,
                }}
                onPress={() => {
                  if (!activitySelected) {
                    selectActivity(events.at(selectedId).id);
                  }
                  setConfirmationPopup(false);
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
          {modifyPopup && (
            <View style={popUpStyles.modifyRegistration}>
              <Text
                style={popUpStyles.closeButton}
                onPress={() => setModifyPopup(false)}
              >
                X
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  width: "90%",
                  textAlign: "center",
                  marginTop: 46,
                }}
              >
                You are registered for this event
              </Text>
              <Text
                style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}
              >
                {events.at(selectedId).eventTitle}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).date}
                </Text>
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).time}
                </Text>
              </View>
              <View
                style={[
                  popUpStyles.eventDetails,
                  { paddingTop: 14, paddingBottom: 16, marginTop: 20 },
                ]}
              >
                <Text style={{ fontSize: 16, textDecorationLine: "underline" }}>
                  Event Details
                </Text>
                <Text style={{ fontSize: 14, lineHeight: 20, marginTop: 7 }}>
                  {events.at(selectedId).eventDescription}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    textDecorationLine: "underline",
                    marginTop: 16,
                  }}
                >
                  View full event details
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: "underline",
                  marginTop: 34,
                  marginBottom: 20,
                }}
              >
                Adjust ticket quantity
              </Text>
              <Pressable
                style={popUpStyles.confirmButton}
                onPress={() => {
                  setModifyPopup(false);
                  setConfirmCancelPopup(true);
                }}
              >
                <Text style={{ fontSize: 17, color: "white" }}>
                  Cancel your registration
                </Text>
              </Pressable>
            </View>
          )}
          {confirmCancelPopup && (
            <View style={popUpStyles.confirmCancelContainer}>
              <Text
                style={popUpStyles.closeButton}
                onPress={() => setConfirmCancelPopup(false)}
              >
                X
              </Text>
              <Text
                style={{ fontSize: 20, textAlign: "center", marginTop: 40 }}
              >
                {events.at(selectedId).eventTitle}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
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
                  fontWeight: "bold",
                  marginTop: 20,
                  textAlign: "center",
                  width: "80%",
                }}
              >
                Are you sure you want to cancel your registration?
              </Text>
              <View style={{ marginTop: 50, marginBottom: 36, gap: 16 }}>
                <Pressable
                  style={[
                    popUpStyles.confirmCancelButton,
                    { backgroundColor: "#F7C1CD" },
                  ]}
                  onPress={() => setConfirmCancelPopup(false)}
                >
                  <Text style={{ fontSize: 16, textAlign: "center" }}>
                    No, keep my registration!
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    popUpStyles.confirmCancelButton,
                    { backgroundColor: "#F88E73" },
                  ]}
                  onPress={() => {
                    setConfirmCancelPopup(false);
                    setConfirmedCancelPopup(true);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Yes, please cancel it!
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          {confirmedCancelPopup && (
            <View style={popUpStyles.confirmCancelContainer}>
              <Text
                style={[popUpStyles.closeButton, { top: 10 }]}
                onPress={() => setConfirmedCancelPopup(false)}
              >
                X
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  width: "80%",
                  textAlign: "center",
                  marginTop: 36,
                }}
              >
                Your registration has been canceled
              </Text>
              <Text
                style={{
                  marginTop: 40,
                  fontSize: 17,
                  textAlign: "center",
                  width: "70%",
                  lineHeight: 24,
                }}
              >
                Check out other events that might interest you!
              </Text>
              <Pressable
                style={[popUpStyles.confirmButton, { marginTop: 60 }]}
                onPress={() => {
                  setConfirmedCancelPopup(false);
                  navigation.navigate("Home", {
                    displayType: "default",
                  });
                  resetHome();
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: "white",
                  }}
                >
                  Browse more events
                </Text>
              </Pressable>
            </View>
          )}
          {attendedEventPopup && (
            <View style={[popUpStyles.attendedEvent, { top: 120 }]}>
              <Text
                style={popUpStyles.closeButton}
                onPress={() => setAttendedEventPopup(false)}
              >
                X
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 46,
                }}
              >
                How was your experience?
              </Text>
              <Text
                style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}
              >
                {events.at(selectedId).eventTitle}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).date}
                </Text>
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).time}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 24,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  How was it?
                </Text>
                <View
                  style={{
                    marginTop: 22,
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      width: 90,
                      gap: 6,
                    }}
                  >
                    <Pressable
                      style={{
                        backgroundColor: "#98ccb2",
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                      }}
                    ></Pressable>
                    <Text>I liked it!</Text>
                  </View>
                  <View style={{ alignItems: "center", width: 90, gap: 6 }}>
                    <Pressable
                      style={{
                        backgroundColor: "#f8e1a4",
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                      }}
                    ></Pressable>
                    <Text>It was fine</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      width: 90,
                      gap: 6,
                    }}
                  >
                    <Pressable
                      style={{
                        backgroundColor: "#f0b4b4",
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                      }}
                    ></Pressable>
                    <Text>I didn't like it</Text>
                  </View>
                </View>
              </View>
              <View style={{ width: "82%", marginTop: 22 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Leave a review
                </Text>
                <View
                  style={[
                    popUpStyles.eventDetails,
                    {
                      height: 130,
                      justifyContent: "flex-start",
                      paddingTop: 7,
                    },
                  ]}
                >
                  <TextInput
                    style={{ height: "100%" }}
                    fontSize={16}
                    value={review}
                    onChangeText={(text) => setReview(text)}
                    multiline
                    textAlignVertical="top"
                  />
                </View>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  textDecorationLine: "underline",
                  marginTop: 32,
                  marginBottom: 20,
                }}
                onPress={() => {
                  setAttendedEventPopup(false);
                  setMissedEventPopup(true);
                }}
              >
                I didn't go
              </Text>
              <Pressable
                style={[popUpStyles.confirmButton, { marginTop: "auto" }]}
                onPress={() => setAttendedEventPopup(false)}
              >
                <Text style={{ fontSize: 15, color: "white" }}>Submit</Text>
              </Pressable>
            </View>
          )}
          {missedEventPopup && (
            <View style={popUpStyles.missedEvent}>
              <Text
                style={popUpStyles.closeButton}
                onPress={() => setMissedEventPopup(false)}
              >
                X
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  width: "80%",
                  textAlign: "center",
                  marginTop: 42,
                }}
              >
                Tell us why you didn't go
              </Text>
              <Text
                style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}
              >
                {events.at(selectedId).eventTitle}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).date}
                </Text>
                <Text style={{ fontSize: 13 }}>
                  {events.at(selectedId).time}
                </Text>
              </View>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 36 }}>
                I didn't go because
              </Text>
              <View style={popUpStyles.reasonContainer}>
                {reasonsForMissing.map((reason) => (
                  <View key={reason.id} style={popUpStyles.reason}>
                    <Text
                      style={{
                        fontSize: 16,
                        width: "75%",
                        textAlign: "center",
                      }}
                    >
                      {reason.title}
                    </Text>
                  </View>
                ))}
              </View>
              <Pressable
                style={[popUpStyles.confirmButton, { marginTop: "auto" }]}
                onPress={() => setMissedEventPopup(false)}
              >
                <Text style={{ fontSize: 15, color: "white" }}>Submit</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
      <Navbar navigation={navigation} resetHome={resetHome} />
      <ScrollView>
        {events.map((ev) => (
          <View key={ev.id}>
            {(!activitySelected || ev.id === selectedId) &&
              ((displayType === "default" &&
                ev.registered === false &&
                ev.passed === false) ||
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
                        <Image
                          style={{ width: 22, height: 22 }}
                          source={require("./icons/verified.png")}
                        />
                        <Text>Verified Vendor</Text>
                      </View>
                    )}
                    {ev.image && (
                      <Image
                        style={
                          activitySelected
                            ? [
                                styles.eventImage,
                                {
                                  borderBottomLeftRadius: 0,
                                  borderBottomRightRadius: 0,
                                },
                              ]
                            : styles.eventImage
                        }
                        source={ev.image}
                      />
                    )}
                    {activitySelected && (
                      <View style={eventStyles.authorContainer}>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                            padding: 12,
                            paddingLeft: 16,
                            paddingRight: 16,
                            left: -4,
                            borderRadius: 15,
                            minWidth: 200,
                          }}
                        >
                          <Image
                            style={{
                              width: 42,
                              height: 42,
                              borderColor: "#AFB1B6",
                              borderWidth: 1,
                              borderRadius: 50,
                            }}
                            source={require("./images/profiles/Lincoln.png")}
                          />
                          <View
                            style={{
                              height: 36,
                              justifyContent: "space-between",
                            }}
                          >
                            <Text style={{ fontSize: 13 }}>By Lincoln</Text>
                            <Text style={{ fontSize: 13 }}>301 Followers</Text>
                          </View>
                        </View>
                        <Pressable style={eventStyles.followButton}>
                          <Image
                            style={{ width: 17, height: 17 }}
                            source={require("./icons/add.png")}
                          />
                          <Text>Follow</Text>
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
                          onPress={() =>
                            displayType === "default" && registerForEvent(ev.id)
                          }
                        >
                          <Text style={{ fontSize: 12, color: "black" }}>
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
                          onPress={() => {
                            setModifyPopup(true);
                            selectActivity(ev.id);
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
                        <Image
                          style={[styles.friendPic, { zIndex: 3 }]}
                          source={require("./images/profiles/Giulia.png")}
                        />
                        <Image
                          style={[styles.friendPic, { zIndex: 2 }]}
                          source={require("./images/profiles/Kevin.png")}
                        />
                        <Image
                          style={[styles.friendPic, { zIndex: 1 }]}
                          source={require("./images/profiles/Richard.png")}
                        />
                      </View>
                      <Text style={{ fontSize: 12 }}>
                        Giulia and 3 others are registered
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
              {events.at(selectedId).tags.map((tag) => (
                <View key={tag} style={eventStyles.tag}>
                  <Text>{tag}</Text>
                </View>
              ))}
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
                {events.at(selectedId).venueDescription}
              </Text>
              <Image
                style={{ width: 300, height: 100, marginTop: 24 }}
                source={require("./images/other/GoogleMaps.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: "underline",
                  marginTop: 20,
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
    backgroundColor: "#FFFCF3",
    height: 500,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // paddingBottom: 38,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
  },
  eventCardSelected: {
    backgroundColor: "#FFFCF3",
    height: 440,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 10,
    // paddingBottom: 30,
  },
  cardInfo: {
    marginTop: "auto",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 28,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    padding: 20,
    borderRadius: 15,
  },
  vendorTag: {
    backgroundColor: "#F7C1CD",
    zIndex: 2,
    width: 161,
    height: 38,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 34,
    marginLeft: "auto",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  eventImage: {
    // resizeMode: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    aspectRatio: 1,
    top: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  signUpButton: {
    backgroundColor: "#F89880",
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
    backgroundColor: "#FFEAF0",
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
    width: 30,
    height: 30,
    borderColor: "#794436",
    borderWidth: 1,
    borderRadius: 50,
  },
});

const eventStyles = StyleSheet.create({
  eventInfoContainer: {
    width: 354,
    // height: 193,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32,
    justifyContent: "center",
    padding: 24,
    borderColor: "#AFB1B6",
    borderWidth: 2,
    borderRadius: 8,
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
    height: 32,
    backgroundColor: "#F7C1CD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingLeft: 14,
    paddingRight: 14,
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  followButton: {
    backgroundColor: "#F7C1CD",
    left: 6,
    width: 108,
    height: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingRight: 4,
    borderRadius: 5,
  },
});

const popUpStyles = StyleSheet.create({
  register: {
    width: 302,
    // height: 520,
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
    // height: 158,
    borderColor: "#AFB1B6",
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 6,
    justifyContent: "center",
    padding: 10,
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
    backgroundColor: "#F7A38E",
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  confirmButton: {
    width: "100%",
    height: 54,
    backgroundColor: "#F88E73",
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
    // height: 381,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 48,
  },
  modifyRegistration: {
    width: 324,
    // height: 560,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  attendedEvent: {
    width: 324,
    // height: 713,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  missedEvent: {
    width: 324,
    // height: 521,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  reasonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 19,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 30,
  },
  reason: {
    width: 112,
    height: 63,
    backgroundColor: "#F7C1CD",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmCancelContainer: {
    width: 324,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmCancelButton: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
});

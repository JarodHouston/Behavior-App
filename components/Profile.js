import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

import Navbar from "./items/Navbar";
import users from "./users.json";

export default function Profile({ navigation, route }) {
  const { displayType } = route.params ?? {
    displayType: "default",
  };

  const [editProfile, setEditProfile] = useState(false);
  const [friendsPage, setFriendsPage] = useState(false);
  const [friendFilterOption, setFriendFilterOption] = useState("");

  const settingsIconSize = 25;

  function setProfile(state) {
    if (state === "default") {
      setEditProfile(false);
      setFriendsPage(false);
    }
    if (state === "settings") {
      setEditProfile(true);
      setFriendsPage(false);
    }
  }

  const mainUser = {
    username: "McKenna Allard",
    // image: require("./images/profiles/McKenna2.jpeg"),
    image: require("./images/profiles/McKenna3.png"),
  };

  const friendFilters = [
    { key: "1", value: "Filter 1" },
    { key: "2", value: "Filter 2" },
    { key: "3", value: "Filter 3" },
  ];
  const badges = [
    {
      id: 1,
      title: "Explorer",
      image: require("./badges/OutdoorsIcon.png"),
    },
    {
      id: 2,
      title: "Creative",
      image: require("./badges/ArtIcon.png"),
    },
    {
      id: 3,
      title: "Concert",
      image: require("./badges/SingingIcon.webp"),
    },
    {
      id: 4,
      title: "Zen",
      image: require("./badges/YogaIcon.png"),
    },
  ];
  const activityList = [
    {
      id: 1, // 8
      eventTitle: "Indie Film Festival",
      date: "Saturday, February 3",
      time: "12 pm - 9 pm PST",
      price: 3,
      eventDescription:
        "Celebrate the art of independent filmmaking with screenings of short films, documentaries, and feature-length movies from up-and-coming directors and producers. The festival includes Q&A sessions with filmmakers, panel discussions on the future of indie cinema, and networking events.",
      venueDescription:
        "The festival takes place at the historic Egyptian Theatre in Hollywood, offering a classic cinema experience. Screenings and events are scheduled throughout the day and evening, providing flexible options for attendees.",
      image: require("./images/events/FilmFestival.png"),
      registered: true,
      passed: false,
    },
    {
      id: 2, // 1
      eventTitle: "Echo Park Lake Sunrise Yoga",
      date: "Saturday, February 3",
      time: "6 am - 8 am PST",
      price: 1,
      eventDescription:
        "Welcome the new day with a rejuvenating yoga session by the serene waters of Echo Park Lake. This early morning class focuses on mindful movements and breathwork, set to the calming sounds of nature, creating a peaceful start to your day.",
      venueDescription:
        "Taking place on the north side of Echo Park Lake, participants will enjoy a scenic view of the water and downtown LA skyline. The session begins at 6:00 AM, allowing yogis to enjoy the tranquil beauty of the park at dawn.",
      image: require("./images/events/EchoPark.png"),
      registered: true,
      passed: false,
    },
    {
      id: 3, // 5
      eventTitle: "Tech Innovators Expo",
      date: "Saturday, February 3",
      time: "10 am - 5 pm PST",
      price: 3,
      eventDescription:
        "A gathering of the brightest minds in the tech industry, showcasing the latest in tech innovations, startups, and digital trends. This event includes keynote speeches, panel discussions, and interactive workshops led by industry leaders and emerging entrepreneurs.",
      venueDescription:
        "Located at the Los Angeles Convention Center, this event spans multiple exhibition halls, providing ample space for demonstrations, networking, and hands-on experiences. The expo runs from 10:00 AM to 5:00 PM.",
      image: require("./images/events/TechExpo.png"),
      registered: true,
      passed: false,
    },
    {
      id: 4, // 6
      eventTitle: "Culinary Carnival",
      date: "Saturday, February 3",
      time: "11 am - 10 pm PST",
      price: 3,
      eventDescription:
        "A food lover's paradise, featuring a wide array of cuisines from around the world. This event highlights LA's diverse culinary scene, with food trucks, pop-up restaurants, and live cooking demonstrations by renowned chefs. Attendees can indulge in tasting sessions, cooking classes, and culinary competitions.",
      venueDescription:
        "Set in Grand Park, this outdoor event offers a festive atmosphere with plenty of seating areas and live music stages. The carnival is open from 11:00 AM to 10:00 PM, providing a full day of gastronomic exploration.",
      image: require("./images/events/CulinaryCarnival.png"),
      registered: true,
      passed: false,
    },
  ];
  const pastActivityList = [
    {
      id: 1, // 2
      eventTitle: "Silverlake Yoga in the Park",
      date: "Saturday, February 3",
      time: "9 am - 10 am PST",
      price: 2,
      eventDescription:
        "Join a community of yoga enthusiasts for an outdoor session in the heart of Silverlake. This event caters to all levels, from beginners to advanced practitioners, and offers a variety of yoga styles. After the session, enjoy mingling with fellow yogis in one of LA's most vibrant neighborhoods.",
      venueDescription:
        "This yoga gathering is located in Silver Lake Meadow, a spacious and grassy area known for its relaxed atmosphere. The event starts at 9:00 AM, making it an ideal morning activity that leaves the rest of the day open for exploration.",
      image: require("./images/events/Silverlake.png"),
      registered: false,
      passed: true,
    },
    {
      id: 2, // 9
      eventTitle: "Urban Art Walk",
      date: "Saturday, February 3",
      time: "3 pm - 8 pm PST",
      price: 3,
      eventDescription:
        "Explore the vibrant street art scene of LA with a guided tour through the city's most iconic murals, graffiti, and installations. This event also includes live art demonstrations, pop-up galleries, and discussions on the impact of urban art on community and culture.",
      venueDescription:
        "The art walk begins in the Arts District and winds through various neighborhoods, showcasing the work of both renowned and underground artists. The walk starts at 3:00 PM and concludes with an after-party at a local gallery.",
      image: require("./images/events/UrbanArtWalk.png"),
      registered: false,
      passed: true,
    },
  ];
  const friends = [
    {
      id: 1,
      name: "Giulia",
      image: require("./images/profiles/Giulia.png"),
      activity: "Outdoors Running Enthusiast",
    },
    {
      id: 2,
      name: "Kevin",
      image: require("./images/profiles/Kevin.png"),
      activity: "Nature lover",
    },
    {
      id: 3,
      name: "Lincoln",
      image: require("./images/profiles/Lincoln.png"),
      activity: "Food Connoisseur",
    },
    {
      id: 4,
      name: "Richard",
      image: require("./images/profiles/Richard.png"),
      activity: "Aspiring future coffeeshop owner",
    },
    {
      id: 5,
      name: "Jarod",
      image: require("./images/profiles/Jarod.png"),
      activity: "Coding Party",
    },
  ];
  const recommendedFriends = [
    {
      id: 1,
      name: "Person",
    },
    {
      id: 2,
      name: "Person",
    },
    {
      id: 3,
      name: "Person",
    },
    {
      id: 4,
      name: "Person",
    },
  ];

  return (
    <View>
      <Navbar navigation={navigation} setProfile={setProfile} />
      <ScrollView style={{ height: "100%" }}>
        <View>
          {/* <Image style={mainStyles.profileImage} source={mainUser.image} /> */}
          <View style={mainStyles.userHeader}>
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
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  borderColor: "#FA8366",
                  borderWidth: 1,
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  source={mainUser.image}
                />
              </View>
              <View style={{ gap: 4 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {mainUser.username}
                </Text>
                <Text>Concert Fangirl</Text>
              </View>
            </View>
            {!editProfile && displayType !== "settings" && (
              <Pressable
                style={mainStyles.editButton}
                onPress={() => {
                  setEditProfile(true);
                  setFriendsPage(false);
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 22, height: 22 }}
                    source={require("./icons/edit-text.png")}
                  />
                  <Text>Edit Profile</Text>
                </View>
              </Pressable>
            )}
          </View>
        </View>
        {!editProfile && !friendsPage && displayType !== "settings" && (
          <View>
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 20,
                  textDecorationLine: "underline",
                  marginLeft: 30,
                }}
              >
                My Badges
              </Text>
              <View style={{ marginTop: 24, marginLeft: 10 }}>
                <FlatList
                  key={"_"}
                  data={badges}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View style={mainStyles.badge}>
                      <Image style={mainStyles.badgeIcon} source={item.image} />
                      <View style={mainStyles.badgeTitle}>
                        <Text style={{ fontSize: 15, color: "white" }}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <Text style={mainStyles.sectionTitle}>Upcoming Activities</Text>
              <View style={mainStyles.activityContainer}>
                {activityList.map((activity) => {
                  return (
                    <View key={activity.id} style={mainStyles.activityCard}>
                      <Image
                        style={mainStyles.activityImage}
                        source={activity.image}
                      />
                      <View style={mainStyles.activityDetails}>
                        <Text>Details</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <Text
                style={mainStyles.sectionEndText}
                onPress={() =>
                  navigation.navigate("Home", { displayType: "registered" })
                }
              >
                View your activity list
              </Text>
              <Text style={mainStyles.sectionTitle}>Past Activities</Text>
              <View style={mainStyles.activityContainer}>
                {pastActivityList.map((activity) => {
                  return (
                    <View key={activity.id} style={mainStyles.activityCard}>
                      <Image
                        style={mainStyles.activityImage}
                        source={activity.image}
                      />
                      <View style={mainStyles.activityDetails}>
                        <Text>Details</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <Text
                style={mainStyles.sectionEndText}
                onPress={() =>
                  navigation.navigate("Home", { displayType: "history" })
                }
              >
                View your activity history
              </Text>
              <Text style={mainStyles.sectionTitle}>My Friends</Text>
              <View style={mainStyles.friendContainer}>
                {friends.map((friend) => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("FriendProfile")}
                      activeOpacity={1}
                      key={friend.id}
                    >
                      <View style={[mainStyles.friendCard, {}]}>
                        {/* <View style={mainStyles.friendProfile}></View> */}
                        <Image
                          style={mainStyles.friendProfile}
                          source={friend.image}
                        />
                        <View style={{ justifyContent: "center" }}>
                          <Text style={{ fontWeight: "bold" }}>
                            {friend.name}
                          </Text>
                          <View
                            style={{
                              // flexDirection: "row",
                              gap: 5,
                              width: 120,
                              height: 20,
                            }}
                          >
                            <Text numberOfLines={1} style={{ flex: 1 }}>
                              {friend.activity}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Pressable onPress={() => setFriendsPage(true)}>
                <Text style={mainStyles.sectionEndText}>View your friends</Text>
              </Pressable>
            </View>
          </View>
        )}
        {(editProfile || displayType === "settings") && (
          <View>
            <Text style={mainStyles.sectionTitle}>Account Settings</Text>
            <View style={editStyles.optionContainer}>
              <Image
                style={{ width: settingsIconSize, height: settingsIconSize }}
                source={require("./icons/mail.png")}
              />
              <Text style={editStyles.option}>E-mail</Text>
            </View>
            <View style={editStyles.optionContainer}>
              <Image
                style={{ width: settingsIconSize, height: settingsIconSize }}
                source={require("./icons/telephone.png")}
              />
              <Text style={editStyles.option}>Mobile phone</Text>
            </View>

            <Text style={editStyles.sectionTitle}>Preference Settings</Text>
            <View style={editStyles.optionContainer}>
              <Image
                style={{ width: settingsIconSize, height: settingsIconSize }}
                source={require("./icons/padlock.png")}
              />
              <Text style={editStyles.option}>Frequency of activity</Text>
            </View>
            <View style={editStyles.optionContainer}>
              <Image
                style={{ width: settingsIconSize, height: settingsIconSize }}
                source={require("./icons/unlock.png")}
              />
              <Text style={editStyles.option}>Edit activity preferences</Text>
            </View>

            <Text style={editStyles.sectionTitle}>Privacy Settings</Text>
            <View style={editStyles.optionContainer}>
              <Image
                style={{ width: settingsIconSize, height: settingsIconSize }}
                source={require("./icons/edit.png")}
              />
              <Text style={editStyles.option}>Reviews I wrote</Text>
            </View>
            <View style={editStyles.optionContainer}>
              <Image
                style={{ width: settingsIconSize, height: settingsIconSize }}
                source={require("./icons/grid.png")}
              />
              <Text style={editStyles.option}>Badges</Text>
            </View>
            <Pressable onPress={() => setEditProfile(false)}>
              <View style={editStyles.optionContainer}>
                <Image
                  style={{ width: settingsIconSize, height: settingsIconSize }}
                  source={require("./icons/user.png")}
                />
                <Text style={editStyles.option}>Profile</Text>
              </View>
            </Pressable>
          </View>
        )}
        {friendsPage && (
          <View>
            <Text style={mainStyles.sectionTitle}>Recently added friends</Text>
            <View style={{ marginTop: 24, marginLeft: 10 }}>
              <FlatList
                key={"_"}
                data={friends}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("FriendProfile")}
                    activeOpacity={1}
                  >
                    <View>
                      <View style={mainStyles.badge}>
                        <View style={mainStyles.badgeTitle}>
                          <Text style={{ fontSize: 15, color: "white" }}>
                            Tag
                          </Text>
                        </View>
                      </View>
                      <Text style={{ marginTop: 12, textAlign: "center" }}>
                        Person
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={mainStyles.sectionTitle}>My Friends</Text>
              <View style={friendStyles.filter}>
                <Text style={{ fontSize: 12, color: "#61646B" }}>
                  Filter by
                </Text>
              </View>
            </View>
            <View style={[mainStyles.friendContainer, { marginTop: 26 }]}>
              {friends.map((friend) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("FriendProfile")}
                    activeOpacity={1}
                    key={friend.id}
                  >
                    <View style={mainStyles.friendCard}>
                      <View style={mainStyles.friendProfile}></View>
                      <View style={{ justifyContent: "center" }}>
                        <Text>{friend.name}</Text>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                          <Text>Activity</Text>
                          <Text>Expert</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={mainStyles.sectionEndText}>See all connections</Text>
            <View>
              <Text style={editStyles.sectionTitle}>Find Friends</Text>
              <View style={friendStyles.searchBar}>
                <Text style={{ fontSize: 16, color: "#61646B" }}>Search</Text>
              </View>
              <View style={[mainStyles.friendContainer, { marginTop: 26 }]}>
                {recommendedFriends.map((friend) => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("FriendProfile")}
                      activeOpacity={1}
                      key={friend.id}
                    >
                      <View key={friend.id} style={mainStyles.friendCard}>
                        <View style={mainStyles.friendProfile}></View>
                        <View style={{ justifyContent: "center" }}>
                          <Text>{friend.name}</Text>
                          <View style={{ flexDirection: "row", gap: 5 }}>
                            <Text>Activity</Text>
                            <Text>Expert</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <Text style={mainStyles.sectionEndText}>
              View more recommendations
            </Text>
          </View>
        )}
        <View style={{ marginBottom: 160 }}></View>
      </ScrollView>
    </View>
  );
}

const mainStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    textDecorationLine: "underline",
    marginLeft: 30,
    marginTop: 38,
  },
  sectionEndText: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 15,
  },
  userImage: {
    width: 414,
    height: 275,
    backgroundColor: "#D9D9D9",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  userHeader: {
    width: "100%",
    height: 54,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingLeft: 25,
    paddingRight: 50,
  },
  editButton: {
    width: 133,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7C1CD",
    borderRadius: 8,
    marginLeft: 20,
  },
  badge: {
    width: 125,
    height: 125,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#F7A38E",
    marginLeft: 6,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  badgeTitle: {
    backgroundColor: "#F89880",
    width: 107,
    height: 23,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FA8366",
    borderWidth: 2,
  },
  badgeIcon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    width: 125,
    height: 125,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#794436",
  },
  activityContainer: {
    marginTop: 24,
    marginBottom: 32,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activityCard: {
    width: 176,
    height: 152,
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  activityImage: {
    position: "absolute",
    width: 176,
    height: 152,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: "#794436",
  },
  activityDetails: {
    marginBottom: 8,
    marginRight: 12,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 22,
  },
  friendContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 16,
    marginTop: 12,
    marginBottom: 32,
    left: -8,
    marginLeft: 30,
  },
  friendCard: {
    width: 158,
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    paddingLeft: 10,
    //backgroundColor: "blue",
  },
  friendProfile: {
    // backgroundColor: "D9D9D9",
    width: 42,
    height: 42,
    borderColor: "#AFB1B6",
    borderWidth: 1,
    borderRadius: 50,
  },
});

const editStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    textDecorationLine: "underline",
    marginLeft: 30,
    marginTop: 50,
  },
  option: {
    fontSize: 18,
  },
  optionContainer: {
    marginTop: 18,
    marginLeft: 38,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const friendStyles = StyleSheet.create({
  filter: {
    width: 112,
    height: 26,
    marginTop: 38,
    marginRight: 30,
    paddingLeft: 12,
    borderColor: "#AFB1B6",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  searchBar: {
    width: 308,
    height: 42,
    borderColor: "#AFB1B6",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 20,
    paddingLeft: 20,
  },
});

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
    image: require("./images/profiles/McKenna2.jpeg"),
    pfp: require("./images/profiles/McKenna.png"),
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
  ];
  const pastActivityList = [
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
  ];
  const friends = [
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
    {
      id: 5,
      name: "Person",
    },
    {
      id: 6,
      name: "Person",
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
        <View style={mainStyles.userImage}>
          <Image style={mainStyles.profileImage} source={mainUser.image} />
          <View style={mainStyles.userHeader}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <View
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 50,
                  borderColor: "#AFB1B6",
                  borderWidth: 1,
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%", borderRadius: 50 }}
                  source={mainUser.pfp}
                />
              </View>
              <View>
                <Text>{mainUser.username}</Text>
                <Text>Preference</Text>
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
                      <Text>Details</Text>
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
                      <Text>Details</Text>
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
    marginTop: 20,
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
    backgroundColor: "#D9D9D9",
    borderColor: "#AFB1B6",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 8,
    paddingRight: 16,
  },
  friendContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    marginTop: 12,
    marginBottom: 32,
    left: -8,
  },
  friendCard: {
    width: 158,
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  friendProfile: {
    backgroundColor: "D9D9D9",
    width: 29,
    height: 29,
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

import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { useState } from "react";

import Navbar from "./items/Navbar";

export default function Profile({ navigation }) {
  const badges = [
    {
      id: 1,
      title: "Master",
    },
    {
      id: 2,
      title: "Explorer",
    },
    {
      id: 3,
      title: "Enthusiast",
    },
    {
      id: 4,
      title: "Streak",
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
  ];

  return (
    <View>
      <Navbar navigation={navigation} />
      <ScrollView style={{ height: "100%" }}>
        <View style={mainStyles.userImage}>
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
              ></View>
              <View>
                <Text>Username</Text>
                <Text>Preference</Text>
              </View>
            </View>
            <Pressable style={mainStyles.editButton}>
              <Text>Edit Profile</Text>
            </Pressable>
          </View>
        </View>
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
                <View style={mainStyles.activityCard}>
                  <Text>Details</Text>
                </View>
              );
            })}
          </View>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 15,
            }}
          >
            View your activity list
          </Text>
          <Text style={mainStyles.sectionTitle}>Past Activities</Text>
          <View style={mainStyles.activityContainer}>
            {pastActivityList.map((activity) => {
              return (
                <View style={mainStyles.activityCard}>
                  <Text>Details</Text>
                </View>
              );
            })}
          </View>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 15,
            }}
          >
            View your activity history
          </Text>
          <Text style={mainStyles.sectionTitle}>My Friends</Text>
          <View style={mainStyles.friendContainer}>
            {friends.map((friend) => {
              return (
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
              );
            })}
          </View>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 15,
            }}
          >
            View your friends
          </Text>
          <View style={{ marginBottom: 160 }}></View>
        </View>
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
  userImage: {
    width: 414,
    height: 275,
    backgroundColor: "#D9D9D9",
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
    width: 123,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFB1B6",
    borderRadius: 8,
  },
  badge: {
    backgroundColor: "#D9D9D9",
    width: 125,
    height: 125,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#AFB1B6",
    marginLeft: 6,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  badgeTitle: {
    backgroundColor: "#61646B",
    width: 107,
    height: 23,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
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

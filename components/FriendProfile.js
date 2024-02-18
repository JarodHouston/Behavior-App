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
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

import Navbar from "./items/Navbar";

export default function FriendProfile({ navigation }) {
  const [following, setFollowing] = useState(false);

  return (
    <View>
      <Navbar navigation={navigation} />
      <ScrollView>
        <View style={styles.userImage}>
          <View style={styles.userHeader}>
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
            <Pressable
              style={styles.headerButton}
              onPress={() => setFollowing(true)}
            >
              {following ? <Text>Message</Text> : <Text>Follow</Text>}
            </Pressable>
          </View>
          <View style={styles.sharedPhotoContainer}>
            <View style={styles.sharedPhoto}></View>
            <View style={styles.sharedPhoto}></View>
            <View style={styles.sharedPhoto}></View>
            <View style={styles.sharedPhoto}></View>
            <View style={styles.sharedPhoto}></View>
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Recently joined events</Text>
          <View style={styles.activityContainer}>
            <View style={styles.activityCard}>
              <Text>Details</Text>
            </View>
            <View style={styles.activityCard}>
              <Text>Details</Text>
            </View>
            <View style={styles.activityCard}>
              <Text>Details</Text>
            </View>
            <View style={styles.activityCard}>
              <Text>Details</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.sectionTitle}>User's Reviews</Text>
            <View style={styles.filter}>
              <Text style={{ fontSize: 12, color: "#61646B" }}>Filter by</Text>
            </View>
          </View>
          <View style={styles.userReviewHeader}>
            <View style={{ flexDirection: "row", gap: 16 }}>
              <View style={styles.sharedPhoto}></View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Event Name
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textDecorationLine: "underline",
                  }}
                >
                  35 Reviews
                </Text>
              </View>
            </View>
            <Text>January 5</Text>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
              Review Title
            </Text>
            <Text style={{ fontSize: 16, marginTop: 16, lineHeight: 22 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text>Tag</Text>
            </View>
            <View style={styles.tag}>
              <Text>Tag</Text>
            </View>
            <View style={styles.tag}>
              <Text>Tag</Text>
            </View>
            <View style={styles.tag}>
              <Text>Tag</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 160 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  headerButton: {
    width: 123,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFB1B6",
    borderRadius: 8,
  },
  sharedPhotoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
    position: "relative",
    marginTop: "auto",
    marginBottom: 12,
    marginRight: 34,
  },
  sharedPhoto: {
    width: 41,
    height: 41,
    backgroundColor: "#EFEFF0",
    borderColor: "#AFB1B6",
    borderWidth: 1.2,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    textDecorationLine: "underline",
    marginLeft: 30,
    marginTop: 38,
  },
  activityContainer: {
    marginTop: 24,
    marginBottom: 14,
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
  userReviewHeader: {
    display: "flex",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewContainer: {
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
});

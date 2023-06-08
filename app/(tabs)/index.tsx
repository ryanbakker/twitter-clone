import { StyleSheet, View, FlatList, Pressable } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <>
      <View style={styles.page}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Tweet tweet={item} />}
        />

        <Pressable style={styles.floatingButton}>
          <Link href="/new-tweet" asChild>
            <Entypo name="plus" size={24} color="white" />
          </Link>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    padding: 14,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

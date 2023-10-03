import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ElementContext from "../contexts/ElementContext";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const { state, remove } = useContext(ElementContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("FormScreen")}>
          <MaterialIcons name="add-circle-outline" size={35} color="#61dafb" />
        </Pressable>
      ),
    });
  }, [state]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.navigate("BookSearch")}>
          <MaterialIcons name="search" size={35} color="#61dafb" />
        </Pressable>
      ),
    });
  }, [state]);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(element) => element.id.toString()}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("Details", {
                  id: item.id,
                  bookTitle: item.bookTitle,
                  pagesFrom: item.pagesFrom,
                  pagesTo: item.pagesTo,
                  parentComment: item.parentComment,
                  teacherComment: item.teacherComment,
                  enjoymentRating: item.enjoymentRating,
                  date: item.date.toUTCString(),
                })
              }
            >
              <View style={styles.itemContainer}>
                <FontAwesome5 name="book" size={30} color="purple" />
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>
                    {item.date.toLocaleDateString()}
                  </Text>
                </View>
                <Text style={styles.titleText}>{item.bookTitle}</Text>
                <Pressable onPress={() => remove(item.id)}>
                  <AntDesign name="delete" size={35} color="purple" />
                </Pressable>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 5,
    padding: 15,
    borderWidth: 2,
    backgroundColor: "#61dafb",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "purple",
  },
  dateContainer: {
    paddingLeft: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  dateText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "purple",
  },
  titleText: {
    fontSize: 16,
    paddingLeft: 15,
    flex: 1,
    fontWeight: "bold",
    color: "purple",
    alignItems: "center",
  },
});

export default HomeScreen;

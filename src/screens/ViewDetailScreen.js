import React, { useContext, useEffect } from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ElementContext from "../contexts/ElementContext";
import BookDetailInfo from "../components/BookDetailInfo/BookDetailInfo";

const ViewDetailScreen = ({ navigation, route }) => {
  const {
    id,
    bookTitle,
    pagesFrom,
    pagesTo,
    parentComment,
    teacherComment,
    enjoymentRating,
    date,
  } = route.params;

  const { state } = useContext(ElementContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate("EditElementScreen", { id, id });
          }}
        >
          <AntDesign name="edit" size={35} color="#61dafb" />
        </Pressable>
      ),
    });
  }, [state]);

  return (
    <BookDetailInfo
      bookTitle={bookTitle}
      pagesFrom={pagesFrom}
      pagesTo={pagesTo}
      teacherComment={teacherComment}
      parentComment={parentComment}
      enjoymentRating={enjoymentRating}
    />
  );
};
export default ViewDetailScreen;

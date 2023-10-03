import React from "react";
import { View } from "react-native";
import BookDetailItem from "../BookDetailItem/BookDetailItem";

export default function BookDetailInfo(props) {
  return (
    <View>
      <BookDetailItem size={30} color="purple" materialIconName="book">
        <>Book title: {props.bookTitle}</>
      </BookDetailItem>

      <BookDetailItem
        size={30}
        color="purple"
        materialIconName="book-open-outline"
      >
        <>Page range: {`${props.pagesFrom} - ${props.pagesTo}`}</>
      </BookDetailItem>
      <BookDetailItem
        size={30}
        color="purple"
        materialIconName="comment-text-outline"
      >
        <>Parent comment: {props.parentComment}</>
      </BookDetailItem>
      <BookDetailItem
        size={30}
        color="purple"
        materialIconName="comment-text-outline"
      >
        <>Teacher comment: {props.teacherComment}</>
      </BookDetailItem>
      <BookDetailItem
        size={30}
        color="purple"
        materialIconName="thumb-up-outline"
      >
        <>Enjoyment rating: {props.enjoymentRating}</>
      </BookDetailItem>
    </View>
  );
}

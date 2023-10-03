import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import FormField from "../FormField/FormField";

export default function ReusableForm(props) {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={75}
      style={{ flex: 1 }}
      behavior="padding"
      enabled={true}
    >
      <ScrollView horizontal={false}>
        <View style={styles.form}>
          <FormField
            text={"Enter a book title:"}
            placeholder={"Type book title here"}
            value={props.bookTitle}
            setItem={props.setBookTitle}
          />
          <FormField
            text={"Enter the pages read from:"}
            placeholder={"Enter the pages read from"}
            value={props.pagesFrom}
            setItem={props.setPagesFrom}
          />
          <FormField
            text={"Enter the pages read to:"}
            placeholder={"Enter the pages read to"}
            value={props.pagesTo}
            setItem={props.setPagesTo}
          />
          <FormField
            text={"Comment from parent:"}
            placeholder={"Type a comment from parent"}
            value={props.parentComment}
            setItem={props.setParentComment}
          />
          <FormField
            text={"Comment from teacher:"}
            placeholder={"Type a comment from teacher"}
            value={props.teacherComment}
            setItem={props.setTeacherComment}
          />

          <FormField
            text={"Child Enjoyment Rating"}
            placeholder={"Type a child enjoyment rating"}
            value={props.enjoymentRating}
            setItem={props.setEnjoymentRating}
          />

          {props.mode == "create" ? (
            <Pressable
              style={styles.button}
              title="Submit Item"
              onPress={() => {
                props.create(
                  props.bookTitle,
                  props.pagesFrom,
                  props.pagesTo,
                  props.parentComment,
                  props.teacherComment,
                  props.enjoymentRating,
                  () => props.navigation.pop()
                );
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.button}
              title="Submit Item"
              onPress={() => {
                props.update(
                  props.currentElement.id,
                  props.bookTitle,
                  props.pagesFrom,
                  props.pagesTo,
                  props.parentComment,
                  props.teacherComment,
                  props.enjoymentRating,
                  props.currentElement.date,
                  () => props.navigation.pop()
                );
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    color: "purple",
  },
  textLabel: {
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 10,
    color: "purple",
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "#61dafb",
  },
  button: {
    alignItems: "center",
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 5,
    width: 200,
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: "#61dafb",
    fontWeight: "bold",
    fontSize: 25,
  },
  emojiGroup: {
    flexDirection: "row",
    alignSelf: "center",
  },
  emoji: {
    padding: 15,
  },
});

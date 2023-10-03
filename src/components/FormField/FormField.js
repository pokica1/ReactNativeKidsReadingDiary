import React from "react";
import { Text, StyleSheet, TextInput } from "react-native";

export default function FormField(props) {
  return (
    <>
      <Text style={styles.textLabel}>{props.text}:</Text>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text) => {
          props.setItem(text);
        }}
      />
    </>
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
});

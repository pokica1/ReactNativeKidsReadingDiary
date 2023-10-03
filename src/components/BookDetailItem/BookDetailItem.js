import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BookDetailItem(props) {
  return (
    <View style={styles.entry}>
      <MaterialCommunityIcons
        name={props.materialIconName}
        size={props.size}
        color={props.color}
      />
      <View>
        <Text style={styles.detail}>{props.children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    color: "purple",
    fontWeight: "bold",
    paddingLeft: 5,
  },
  entry: {
    marginTop: 5,
    padding: 15,
    borderWidth: 2,
    backgroundColor: "#61dafb",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "purple",
  },
});

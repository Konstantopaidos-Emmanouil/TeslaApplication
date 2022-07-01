import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = (props) => {
  //const type = props.type;
  //const content = props.content;
  //const onPress = props.onPress

  const { type, content, onPress } = props;

  const bgColor = type === "primary" ? "#303436" : "white";
  const textColor = type === "primary" ? "white" : "#303436";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: bgColor }]}
        onPress={() => {
          console.warn("hey there");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagLine, tagLineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          {' '}
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>{" "}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"CUSTOM ORDER"}
          onPress={() => {
            console.warn("content was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"EXISTING INVENTORY"}
          onPress={() => {
            console.warn("existing inv was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

import React from "react";
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

export const Card = ({ navigation, name, stars, revs, image, id }) => {
  const onPressFunction = () => {
    navigation.navigate("Details");
  };

  return (
    <Pressable onPress={onPressFunction}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text>{name}</Text>
          <View>
            <Text>{stars} stars</Text>
            <Text>{revs} revs</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    margin: 15,
    width: 360,
    elevation: 4,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#333",
    shadowRadius: 7,
    shadowOpacity: 0.4,
  },
});

import * as React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { Card } from "./Card";

export default function Section({ navigation, title, resList }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {resList && resList.length > 0 && (
        <FlatList
          data={resList}
          renderItem={({ item }) => (
            <Card
              navigation={navigation}
              title={item.name}
              stars={item.stars}
              revs={item.revs}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

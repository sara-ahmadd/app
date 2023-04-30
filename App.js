import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#eee" },
          headerTitleAlign: "center",
          headerTintColor: "#333",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <view style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text>Restaurants</Text>
              </view>
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    width: 200,
  },
});
export default App;

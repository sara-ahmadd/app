import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import Section from "../components/Section";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [text, onChangeText] = React.useState("search");
  const [sections, setSections] = React.useState([
    {
      id: 123,
      title: "cost Effective",
      restaurants: [],
    },
    {
      id: 12345,
      title: "bit pricer",
      restaurants: [],
    },
    {
      id: 123667,
      title: "Big spender",
      restaurants: [],
    },
  ]);

  const baseUrl = "https://api.yelp.com/v3/businesses/search";
  const apiKey =
    "Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx";

  const params = {
    Location: "san-jose",
    Limit: 50,
  };
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        `${baseUrl}?Location=${encodeURIComponent(
          params.Location
        )}&Limit=${encodeURIComponent(params.Limit)}`,
        {
          headers: {
            Authorization: apiKey,
          },
          mode: "cors",
        }
      );
      const res = await response.json();
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.main}>
        <Feather name="list" size={24} color="black" />
        <View style={styles.list}>
          {sections &&
            sections.length > 0 &&
            sections.map((x) => {
              return (
                <Section
                  title={x.title}
                  resList={x.restaurants}
                  navigation={navigation}
                />
              );
            })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  main: {
    alignItems: "space-between",
    flexDirection: "row-reverse",
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
    paddingTop: 10,
  },
  list: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
    paddingTop: 10,
  },
});

export default Home;

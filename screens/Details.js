import React from "react";
import { View } from "react-native";

const Details = () => {
  const baseUrl = `https://api.yelp.com/v3/businesses/${id}`;
  const apiKey =
    "Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx";
  const getRestaurant = async () => {
    try {
      const response = await fetch(baseUrl + apiKey);
      const res = await response.json();
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <View>
      <Text>Restaurant Name</Text>
    </View>
  );
};

export default Details;

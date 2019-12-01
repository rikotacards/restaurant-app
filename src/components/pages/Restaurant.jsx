import React from "react";
import axios from "axios";
import { SingleRestaurant } from "../layout/singleRestaurant/SingleRestaurant";


export const Restaurant = () => {
  const [restaurantData, setData] = React.useState({
    restaurantDescription: "",
    mains: [],
    restaurantName: ""
  });
  let fetchError = false;

  React.useEffect(() => {
    axios
      .get("/soul_food")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        fetchError = true;
      });
  }, []);
  return fetchError ? (
    "sorry"
  ) : (
      <SingleRestaurant restaurantData={restaurantData} />
  );
};

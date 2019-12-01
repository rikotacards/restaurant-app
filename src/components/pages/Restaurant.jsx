import React from "react";
import axios from "axios";
import { SingleRestaurant } from "../layout/singleRestaurant/SingleRestaurant";

export const Restaurant = () => {
  const [restaurantData, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/soul_food")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("error");
        // throw new Error (error, 'error no api')
      });
  }, []);

  return restaurantData ? (
    <SingleRestaurant
      restaurantData={restaurantData || { restaurantName: "no Name" }}
    />
  ) : (
    <div>Sorry No Data for this restaurant</div>
  );
};

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let restaurantL = [
    {
      info: {
        id: "456986",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/ae6581d6-a1b5-449a-916e-23c50575794c_456986.JPG",
        locality: "Somwar Peth",
        areaName: "Rasta Peth",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.8,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "456987",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/ae6581d6-a1b5-449a-916e-23c50575794c_456986.JPG",
        locality: "Somwar Peth",
        areaName: "Rasta Peth",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.5,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "456988",
        name: "MacD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/ae6581d6-a1b5-449a-916e-23c50575794c_456986.JPG",
        locality: "Somwar Peth",
        areaName: "Rasta Peth",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 25,
        },
      },
    },
  ];
  // console.log(restaurantL);
  const [topRestaurant, setTopRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-res"
          onClick={() => {
            setTopRestaurant(
              topRestaurant.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

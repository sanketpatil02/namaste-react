import RestaurantCard, { withHigherRating } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const HighRatedRes = withHigherRating(RestaurantCard);

  // console.log("ListOFRest ", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   setFilteredRestaurants(listOfRestaurants);
  // }, [listOfRestaurants]);

  const fetchData = async () => {
    // use this before api link: (https://corsproxy.io/?)
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    // console.log(jsonData);

    //optional chaining
    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === "offline")
    return (
      <h1>Looks like you're offline. Please check your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-2 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log("Filtered list: ", filteredList);

              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-4">
          <button
            className="bg-gray-200 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              setFilteredRestaurants(
                filteredRestaurants.filter((res) => res.info.avgRating > 4.3)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-2 p-4 flex items-center">
          <label className={"pr-2"}>UserName:</label>
          <input
            value={loggedInUser}
            className="border border-black p-1"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="card"
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {/* if restaurant has rating higher than 4.2, then add a label to that resCard */}
            {restaurant.info.avgRating > 4.2 ? (
              // console.log(restaurant.info.name, ": ", restaurant.info.avgRating)

              <HighRatedRes resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

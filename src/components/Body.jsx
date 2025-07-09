import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restList1, setRestList1] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/restaurants");
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestList1(restaurants);
    setAllRestaurants(restaurants);
  };

  // Filter top-rated restaurants
  const TopRestaurantsFilter = () => {
    const filteredList = allRestaurants.filter(
      (restaurant) => restaurant.info?.avgRating > 4.2
    );
    setRestList1(filteredList);
  };

  // Clear all filters
  const ClearFilter = () => {
    setRestList1(allRestaurants);
    setsearchtext("");
    setSuggestions([]);
  };

  // Handle search input and show suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setsearchtext(value);
    if (value.trim() === "") {
      setSuggestions([]);
      setRestList1(allRestaurants);
      return;
    }
    const query = value.trim().toLowerCase();
    const filtered = allRestaurants.filter((res) =>
      res.info?.name?.toLowerCase().includes(query)
    );
    setSuggestions(filtered.slice(0, 5)); // show top 5 suggestions
    setRestList1(filtered);
  };

  // 🧠 Show shimmer only if data hasn't loaded yet
  if (allRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter-btn" style={{ position: 'relative' }}>
        <input
          type="text"
          className="search-box"
          value={searchtext}
          onChange={handleSearchChange}
          placeholder="Search restaurants..."
          autoComplete="off"
        />
        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="suggestion-list">
            {suggestions.map((res, idx) => (
              <li
                key={res.info.id + idx}
                onClick={() => {
                  setsearchtext(res.info.name);
                  setSuggestions([]);
                  setRestList1([res]);
                }}
              >
                {res.info.name}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => {
            const query = searchtext.trim().toLowerCase();
            const filteredRestaurant = allRestaurants.filter((res) =>
              res.info?.name?.toLowerCase().includes(query)
            );
            setRestList1(filteredRestaurant);
            setSuggestions([]);
          }}
        >
          Search
        </button>
        <button className="Top-Rated-Restaurants" onClick={TopRestaurantsFilter}>
          Top Rated Restaurants
        </button>
        <button className="Clear-Filter" onClick={ClearFilter}>
          Clear Filter
        </button>
      </div>
      {/* 🧠 Show message if no restaurants match the search/filter */}
      {restList1.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          No restaurants found
        </h2>
      ) : (
        <div className="res-container">
          {restList1.map((restaurant, index) => (
            <RestaurantCard
              key={`${restaurant.info.id}-${index}`}
              RestData={restaurant}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

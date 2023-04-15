import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(restaurants, searchText) {
  const result = restaurants.filter((temp) =>
    temp.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return result;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);

  useEffect (() =>{
    //API call
   getfetchData();
  }, [])

  async function getfetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5236317&lng=73.8411226&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    //optional chaining ?.
    setallRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards) 
  }

   // if allRestaurants is empty don't render restaurants cards
  if(!allRestaurants) return null;

  // if(filteredRestaurants.length === 0) return <h1>No Restaurants to show.</h1>

  return ( allRestaurants.length === 0)  ? <Shimmer/> : (
    <>
      <div className="search-cont">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a Restaurant"
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(allRestaurants, searchText);
            // update the state of restaurants list
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-card">
        {filteredRestaurants.map((temp) => {
          return <RestaurantCard key={temp.data.id} {...temp.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

/*To toggle between true false on button click

  const [clicked, setClicked] = useState("false");
  
  return(
    <h1>{clicked}</h1>
     <button
        onClick={()=>{
            setClicked(clicked=== "false" ? "true" : "false");
        }} >
            Search
        </button>
  ) */

/* JS VS React variable

   const searchText = "Hello"
   const [searchText, setSearchText] = useState("Hello");
   */

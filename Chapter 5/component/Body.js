import { restaurantList } from "./Constants";
import RestaurantCard from "./Restaurantcard";
import { useState } from "react";

function filterData(restaurants, searchText) {
  const result = restaurants.filter((temp) =>
    temp.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return result;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-cont">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(restaurants, searchText);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-card">
        {restaurants.map((temp) => {
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

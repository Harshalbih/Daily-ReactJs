import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read id


const RestaurantMenu = () => {
  const { id } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in res state variable
  });

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=18.5236317&lng=73.8411226&menuId=" +
          id
      );
      const json = await response.json();
      setRestaurant(json?.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        {
          <img
            className="restaurant-img"
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              restaurant?.cloudinaryImageId
            }
            alt={restaurant?.name}
          />
        }
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurant?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            {restaurant && restaurant.menu && restaurant.menu.items && (
              <p className="menu-count">
                {Object.keys(restaurant.menu.items).length} ITEMS
              </p>
            )}
          </div>
          {restaurant && restaurant.menu && restaurant.menu.items && (
            <div className="menu-items-list">
              {Object.values(restaurant.menu.items).map((item) => (
                <div className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <h4 className="item-title">{item?.name}</h4>
                    <p className="item-cost">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc">{item?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.cloudinaryImageId && (
                      <img
                        className="menu-item-img"
                        src={
                          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                          item?.cloudinaryImageId
                        }
                        alt={item?.name}
                      />
                    )}
                    <button className="add-btn"> ADD +</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

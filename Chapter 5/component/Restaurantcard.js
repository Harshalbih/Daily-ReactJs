
import { IMG_CDN_URL } from "./Constants";
// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          src={ IMG_CDN_URL + cloudinaryImageId }
          alt="cardimg"
        />
        <h5>
          {name}
          {/** restaurant[0].data.name */}
        </h5>
        
        <h6>{area}</h6>
        <p style={{fontSize: "12px"}}>{cuisines.join(", ")}</p>
        <span>
          <h4 style={
            avgRating < 4 ? {backgroundColor: "red"} : {backgroundColor: "green"}
          }>
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <p>{costForTwoString}</p>
        </span>
        <hr style={{display: "none"}}></hr>
        <a href="/" className="quick" style={{display: "none"}}><strong>Quick View</strong></a>
      </div>
    );
  };

  export default RestaurantCard;
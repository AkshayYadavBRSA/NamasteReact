
import "../../index.css";
const RestaurantCard = (props) =>{
    const {RestData} = props;
    const {info} = RestData;
    
    const{cloudinaryImageId,avgRating,name,cuisines,costForTwo,sla} = info;
    const {deliveryTime} = sla;
    
    
    
    return(
        <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>  
            <img  alt="res-logo"
            src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                cloudinaryImageId
             }
            className="res-logo" />

            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo }</h4>

        </div>
    )
}
export default RestaurantCard
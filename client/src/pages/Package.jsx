import "./css/Package.css";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

export const Package = () => {
  const { tourPackage } = useAuth();

  return (
    <>
        <div className="main-package">
      {tourPackage.map((curElement, index) => {
        const { destination, price,des_image, _id } = curElement;
        return (
          <>
            
            <NavLink to={`/singletourpackage/${_id}`}>
                <div className="package-card" key={index}>
                  <img src={des_image[0]} alt=""/>
                  <label type="text">{destination}</label>
                  <p><span>{price}</span>₹ / person</p>
                </div>
            </NavLink>
          </>
        );
      })}
      </div>
    </>
  );
};

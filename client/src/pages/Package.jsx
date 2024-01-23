import "./css/Package.css";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

export const Package = () => {
  const { tourPackage } = useAuth();

  return (
    <>
      {tourPackage.map((curElement, index) => {
        const { destination, des_image, _id } = curElement;
        return (
          <>
            <NavLink to={`/singletourpackage/${_id}`}>
              <div className="home-package">
                <div className="p-card" key={index}>
                  <img src={des_image[0]} alt=""/>
                  <label type="text">{destination}</label>
                </div>
              </div>
            </NavLink>
          </>
        );
      })}
    </>
  );
};

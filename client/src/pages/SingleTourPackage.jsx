import "./css/SingleTourPackage.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const SingleTourPackage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [tourPackage, setTourPackage] = useState([]);
  const getSingleTourPackage = async () => {
    try {
      const response = await fetch(`http://localhost:5005/packages?_id=${id}`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setTourPackage(data.data);
      }
    } catch (error) {
      console.log(`error while fetching single package ${error}`);
    }
  };

  
  useEffect(() => {
    getSingleTourPackage();
  }, []);
  
  


  return (
    <>
      {tourPackage.map((curElement, index) => {
        const {
          destination,
          des_image,
          des_discription,
          source,
          duration,
          price,
          includedServices,
          itinerary,
          age,
          altitude,
        } = curElement;

        return (
          <>
            <div className="pac-main" key={index}>
              <div className="pac-container">
                <div className="pac-head">
                  <div id="slideshow">
                    {des_image.map((element, index) => {
                      return (
                        <>
                          <div className="slide-wrapper">
                            <div className="slide">
                              <img
                                src={element}
                                alt=""
                                className="slide-number"
                              />
                              {index < des_image.length - 1 ? ", " : ""}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="pac-detail">
                  <div className="pac-detail-left">
                    <div className="pac-detail-head">
                      {destination.map((element, index) => {
                        return (
                          <>
                            <h1>{element}</h1>
                            {index < destination.length - 1 ? " " : ""}
                          </>
                        );
                      })}
                      <p>{des_discription}</p>
                    </div>
                    <div className="pac-detail-time">
                      <div className="pac-detail-all">
                        <i className="ri-calendar-line"></i>Duration :{" "}
                        {duration} Days
                      </div>

                      <div className="pac-detail-all">
                        <i className="ri-landscape-line"></i>Max Altitude :{" "}
                        {altitude} ft
                      </div>
                      <div className="pac-detail-all">
                        <i className="ri-user-line"></i>Age : {age} years
                      </div>
                    </div>
                  </div>
                  <div className="pac-detail-right">
                    <div className="pac-detail-price">
                      <p>
                        {" "}
                        <span>{price}</span>₹ / person
                        <NavLink to={`/booking/${id}` }>
                        <button type="submit" >Booking</button>
                        </NavLink>
                      </p>
                    </div>
                    <br />
                    <p>Included Services</p>
                    <br />
                    <div className="pac-detail-include">
                      {includedServices.map((element, index) => {
                        return (
                          <>
                            <div className="p-card" style={{ width: "49%" }}>
                              <i className="ri-git-commit-fill"></i>
                              {element}
                              {index < source.length - 1 ? " " : ""}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="pac-from">
                  <div className="pac-detail-alll">
                    <i className="ri-map-pin-line"></i>From :
                    <p>
                      {source.map((element, index) => {
                        return (
                          <>
                            <div
                              className="package  -from"
                              style={{ width: "auto" }}
                            >
                              {element}
                              {index < source.length - 1 ? ", " : ""}
                            </div>
                          </>
                        );
                      })}
                    </p>
                  </div>
                </div>
                <div className="pac-schedule">
                  <h1>Itinerary</h1>
                  {itinerary.map((element) => {
                    const { day, activities } = element;
                    {
                      return (
                        <>
                          <div className="pac-schedule-day">
                            <div
                              className="p-card"
                              key={element.day}
                              style={{ width: "100%" }}
                            >
                              Day: {day}
                            </div>
                            <div
                              className="p-card"
                              key={element.day}
                              style={{ width: "100%" }}
                            >
                              Activities: {activities}
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

import { Home_Package } from "../components/Home-Package";
import "./css/Home.css";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="home-main">
        {/* <!-- contant'''''''''''''''''''''''''''''''''''''''--> */}

        <div className="component">
          <img
            src="\images\background trippo.jpg"
            alt=""
            className="component-bc"
          />
        </div>
        <div className="explore">
          <div className="type-word">
            <Typewriter
              className="type-word"
              options={{
                strings: [
                  "W e l c o m e",
                  "E x p l o r e",
                  "A d v e n t u r e",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="buttonn">
            <button type="button" className="btnn btnn--purple">
              <span className="btnn__txt">Custom Package</span>
              <i className="btnn__bg" aria-hidden="true"></i>
              <i className="btnn__bg" aria-hidden="true"></i>
              <i className="btnn__bg" aria-hidden="true"></i>
              <i className="btnn__bg" aria-hidden="true"></i>
            </button>

            <button type="buttonn" className="btnn btnn--green">
              <NavLink to="/package">
                <span className="btnn__txt">Static Package</span>
                <i className="btnn__bg" aria-hidden="true"></i>
                <i className="btnn__bg" aria-hidden="true"></i>
                <i className="btnn__bg" aria-hidden="true"></i>
                <i className="btnn__bg" aria-hidden="true"></i>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="head">Packages</div>
      <div className="home-package">
        <Home_Package />
      </div>
    </>
  );
};

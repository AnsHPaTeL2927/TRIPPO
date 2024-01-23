import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./css/Register.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(
        `http://localhost:5000/TRIPPO/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const res_data = await response.json();
      console.log("responce from server", res_data.message);
      if (response.ok) {

        //store token in local storage
        storeTokenInLS(res_data.token); 

        setUser({ username: "", email: "", password: "", phone: "" });
        navigate("/");
      }
      else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }

      console.log(response);
    } catch (error) {
      console.log(`Register data fetch ${error}`);
    }
  };

  return (
    <>
      <div className="Register">
        <div className="container-reg">
          <div className="form-container sign-up">
            <form onSubmit={handleSubmit}>
              <h1>Create Account</h1>

              <span>or use your email for registeration</span>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                id="username"
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
                required
              />
              <input
                type="number"
                placeholder="Enter Contact"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
                required
              />
              <div className="i-container">
                <p>
                  If You already have an Account, click
                  <NavLink to="/login"> Sign In</NavLink>
                </p>
              </div>
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

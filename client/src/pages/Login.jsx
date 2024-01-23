import "./css/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }; 

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/TRIPPO/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
        
      })
      const res_data = await response.json()
      if(response.ok){
        toast.success("Login Successfully");

        //store token in local storage
        // localStorage.setItem("token", res_data.token)
        storeTokenInLS(res_data.token)

        setUser({ email: "", password: ""})
        console.log(response);
        navigate("/")
      }
      else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    } catch (error) {
      console.log(`Error from Login file ${error}`)
    }
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="form-container sign-in">
            <form onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              
              <span>or use your email password</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                required
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
                required
              />
              <a href="#">Forget Your Password?</a>
              <div className="i-container">
                <p>
                  If You do not have an Account, click
                  <NavLink to="/register"> Sign Up</NavLink>
                </p>
              </div>
              <button>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

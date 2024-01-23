import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

//context
export const AuthContext = createContext();

//provider
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [tourPackage, setTourPackage] = useState("");
  const [username, setUsername] = useState()
  
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("username", user.username);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn;
  if (token) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
  console.log("isLoggedIn", isLoggedIn);


  const LogoutUser = () => {
    setToken("");
    setUsername("")
    return localStorage.removeItem("token");
  };

  //jwt authentication - get the currently LOGGEDIN user data
  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/TRIPPO/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User Data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log(`Error From userAuthentication Funtion ${error}`);
    }
  };

  const getPackages = async () => {
    try {
      const response = await fetch("http://localhost:5005/packages", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setTourPackage(data.data);
      }
    } catch (error) {
      console.log(`Error when Feching packages ${error}`);
    }
  };


  useEffect(() => {
    getPackages();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, tourPackage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//consumer

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextvalue = useContext(AuthContext);
  if (!authContextvalue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextvalue;
};

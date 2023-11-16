import AppNavbar from "./components/layout/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState, useEffect } from "react";

function UserLogged(user, userInfo) {
  this.user = user;
  this.userInfo = userInfo;
}

function App() {
  const [logged, setLogged] = useState([]);

  // Google login 
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log('Success Login', codeResponse);

      getUserInfoToken(codeResponse);
    },

    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  // Google logout 
  const logOut = () => {
    googleLogout();
    setLogged(false);
    console.log("logOut",getUserLooged() );
    window.localStorage.removeItem("userLogged");
  };

  // Get userInfo 
  const getUserInfoToken = (user) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        window.localStorage.setItem(
          "userLogged",
          JSON.stringify(new UserLogged(user, res.data))
        );

        console.log( "User Info Success call localStorage",getUserLooged());
        setLogged(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTokenInfo = (user) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        window.localStorage.setItem(
          "userLogged",
          JSON.stringify(new UserLogged(user, res.data))
        );

        console.log( "User Info Success call localStorage",getUserLooged());
        setLogged(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserLooged = () => {
    return JSON.parse(window.localStorage.getItem("userLogged")); 
  }

  return (
    <div>
      {getUserLooged() ? (
        <div> 
          <AppNavbar logoutEvent={logOut} />
        </div>
      ) : (
        <div>
          <Login loginEvent={login} />
        </div>
      )}
    </div>
  );
}

export default App;

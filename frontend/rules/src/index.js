import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./commons/utils/AppContext";
import loginBackgroundImg from "./img/login_background.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{
    height: "9050vh",
    backgroundImage: `url(${loginBackgroundImg})`,
  }}>
    <GoogleOAuthProvider clientId="925845673666-53lju5olbklsnf4bqbkfsdkj1fu350ta.apps.googleusercontent.com">
      <React.StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const getUserLooged = () => {
    return JSON.parse(window.localStorage.getItem("userLogged"));
  };


  return (
    <AppContext.Provider value={{getUserLooged }}>
      {children}
    </AppContext.Provider>
  );
};

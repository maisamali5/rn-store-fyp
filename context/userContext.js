// UserContext.js
import React, { createContext, useState } from "react";

// create the context
export const UserContext = createContext();

// provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

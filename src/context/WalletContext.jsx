import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [address, setAddress] = useState();

  const handleAddress = (wallet) => {
    setAddress(wallet);
  };

  return (
    <ThemeContext.Provider
      value={{
        handleAddress,
        address,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

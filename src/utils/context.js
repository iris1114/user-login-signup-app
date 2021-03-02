import React, { createContext, useState } from "react";

const AuthContext = createContext({
  authData: {},
  setAuthData: null,
});

export const AuthProvider = ({ children }) => {
  const [authContextData, setAuthContextData] = useState({});
  return (
    <AuthContext.Provider
      value={{ authData: authContextData, setAuthData: setAuthContextData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

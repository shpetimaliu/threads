import { createContext, useState, useEffect } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const contextData = {};

  return (
    <authContext.Provider value={contextData}>
      {loading ? <p>Ju lutem prisni...</p> : children}
    </authContext.Provider>
  );
};

export default authContext;

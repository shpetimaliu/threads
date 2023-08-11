import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../../appWriteConfig";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const loginUser = async (userInfo) => {
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
    } catch (err) {
      console.log(err);
    }
  };

  const contextData = {
    loginUser,
  };

  return (
    <authContext.Provider value={contextData}>
      {loading ? <p>Ju lutem prisni...</p> : children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

export default authContext;

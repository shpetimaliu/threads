import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  COLLECTION_ID_PROFILES,
  DB_ID,
  account,
  database,
} from "../../appWriteConfig";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getUserOnLoad();
  }, []);

  const getUserOnLoad = async () => {
    try {
      let accountDetails = await account.get();

      const profile = await database.getDocument(
        DB_ID,
        COLLECTION_ID_PROFILES,
        accountDetails.$id
      );
      console.log("profili:", profile);

      accountDetails["profile"] = profile;
      console.log(accountDetails);

      setUser(accountDetails);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const loginUser = async (userInfo) => {
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      const accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logoutUser = async () => {
    account.deleteSession("current");
    setUser(null);
    navigate("/login");
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
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

// eslint-disable-next-line no-unused-vars
import React from "react";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, logoutUser } = useAuth();
  console.log(user);
  return (
    <div className="text-center">
      {user ? (
        <div>
          <strong>Hello {user.name} </strong>
          <button
            onClick={logoutUser}
            className="bg-white text-black py-2 px-4 border text-sm border-black rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={logoutUser}
          className="bg-white text-black py-2 px-4 border text-sm border-black rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

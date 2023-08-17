// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, logoutUser } = useAuth();
  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center gap-2 py-4">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={user.profile.profile_pic}
          />
          <strong>Hello {user.name} </strong>
          <button
            onClick={logoutUser}
            className="bg-white text-black py-2 px-4 border text-sm border-black rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          onClick={logoutUser}
          className="bg-white text-black py-2 px-4 border text-sm border-black rounded"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, logoutUser } = useAuth();
  return (
    <div className="flex items-center py-8 justify-between px-10">
      <Link to={`/`}>
        <strong className="text-4xl text-white">@</strong>
      </Link>
      {user ? (
        <div className="flex items-center justify-center gap-2">
          <Link to={`/profile/${user.profile.username}`}>
            <img
              className="h-10 w-10 object-cover rounded-full"
              src={user.profile.profile_pic}
            />
          </Link>
          <strong>{user.name} </strong>

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

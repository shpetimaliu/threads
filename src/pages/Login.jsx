import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const loginForm = useRef(null);

  const { loginUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    loginUser({ email, password });
  };

  return (
    <div className="container mx-auto max-w-[500px] rounded-md border border-[rgba(49, 49, 50, 0.5)] p-4">
      <form onSubmit={handleSubmit} ref={loginForm}>
        <div className="py-2">
          <label>Email:</label>
          <input
            required
            type="email"
            name="email"
            className="w-full p-2 rounded-md"
          />
        </div>

        <div className="py-2">
          <label>Password:</label>
          <input
            required
            type="password"
            name="password"
            className="w-full p-2 rounded-md"
          />
        </div>
        <div className="py-2">
          <input
            type="submit"
            name="Login"
            className="bg-white cursor-pointer text-black py-2 text-sm px-4 border border-black rounded"
          />
        </div>
      </form>
      <p>
        Don't have an account?<Link to="/register"> Register here</Link>
      </p>
    </div>
  );
};

export default Login;

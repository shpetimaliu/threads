import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loginForm = useRef(null);

  return (
    <div>
      <form ref={loginForm}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" name="Login" />
        </div>
      </form>
      <p>
        Don't have an account?<Link to="/register"> Register here</Link>
      </p>
    </div>
  );
};

export default Login;

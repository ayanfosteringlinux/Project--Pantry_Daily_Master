import React from "react";
import "./Login.css";

import coffeeCup from "../assets/login-cup.jpeg";

const Login = () => {

  


  return (
    <div className="outer-container">
      <div className="container">
        <div className="left-container">
          <img className="loginImg" src={coffeeCup} alt="Cup of Coffee" />
        </div>
        <div className="right-outer-container">
          <div className="right-inner-container">
            <div className="top-details">
              <p className="heading">Welcome Back</p>
              <p className="desc">Enter your account credentials to view your orders</p>
            </div>

            <form className="form">
              <div className="details-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>
              <div className="details-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="form-input"
                />
              </div>

              <p className="forgot-password">Forgot your Password?</p>
              <button type="submit" className="btn login-btn">Login</button>
            </form>
            <p>Don't have an account?</p> <a href="/signup"> Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./Login.css";

import coffeeCup from "../assets/login-cup.jpeg";

const Login = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="left-container">
          <img src={coffeeCup} alt="Cup of Coffee" />
        </div>
        <div className="right-outer-container">
          <div className="right-inner-container">
            <div className="top-details">
              <p className="heading">Welcome</p>
              <p className="desc">
                Enter your details to create your account and start your journey
              </p>
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
              <div className="details-container">
                <label htmlFor="password">Re-enter Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn login-btn">
                Create Account
              </button>
            </form>
            <p>Already have an account?</p> <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

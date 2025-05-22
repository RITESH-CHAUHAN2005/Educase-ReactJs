import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-container">
      <h1 className="welcome-title">
        Welcome to <span className="welcome-highlight">PopX</span>
      </h1>
      <p className="welcome-message">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="welcome-buttons">
        <Link to="/signup">Create Account</Link>
        <Link to="/login" className="secondary">Already Registered? Login</Link>
      </div>
    </section>
  );
};

export default Welcome;

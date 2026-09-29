//imr-for import
//ffc-for function

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Landing() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Confersync</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Cover a distance with Confersync</p>
          <div role="button">
            <Link to={"/auth"}>Get started</Link>
          </div>
        </div>
        <div>
            <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;

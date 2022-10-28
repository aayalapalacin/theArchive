import React from "react";
import { Link } from "react-router-dom";
import "../../styles/custom.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">SHOP</li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">DISCOVER</li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">SECONDHAND</li>
          </ul>
        </div>

        <div>
          <img src="https://i.imgur.com/rxlJC7G.png" height="20px" />
        </div>

        <div>
          <img src="https://i.imgur.com/yM8VTqT.png" height="20px" />
        </div>

        <div>
          <img src="https://i.imgur.com/lQw4fSR.png" height="20px" />
        </div>

        <div>
          <img src="https://i.imgur.com/Px0k0VF.png" height="20px" />
        </div>
      </div>
    </nav>
  );
};

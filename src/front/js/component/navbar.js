import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">SHOP</span>
        </Link>

        <Link to="/">
          <span className="navbar-brand mb-0 h1">DISCOVER</span>
        </Link>

        <Link to="/">
          <span className="navbar-brand mb-0 h1">SECONDHAND</span>
        </Link>

        <div>
          <img src="https://i.imgur.com/rxlJC7G.png" height="20px" />
        </div>

        <div>
          <img src="https://i.imgur.com/yM8VTqT.png" height="20px" />
        </div>

        <div>
          <form>
            <input type="text" value="What are you looking for?"></input>
          </form>
        </div>

        <div>
          <img src="https://i.imgur.com/lQw4fSR.png" height="20px" />
        </div>

        <div>
          <img src="https://i.imgur.com/2UfDpDh.png" height="20px" />
        </div>

        <div>
          <img src="https://i.imgur.com/Px0k0VF.png" height="20px" />
        </div>
      </div>
    </nav>
  );
};

import React from "react";

function Nav(props) {
  return (
    <nav className="main-nav open">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <a href="customers/index.html">Home</a>
        </li>
        <li className="main-nav__item main-nav__item--cta">
          <a href="start-hosting/index.html">Start Hosting</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

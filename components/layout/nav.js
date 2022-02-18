import React from "react";

function Nav(props) {
  return (
    <nav class="main-nav">
      <ul class="main-nav__items">
        <li class="main-nav__item">
          <a href="customers/index.html">Home</a>
        </li>
        <li class="main-nav__item main-nav__item--cta">
          <a href="start-hosting/index.html">Start Hosting</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

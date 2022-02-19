import Link from "next/link";
import React from "react";

function Nav(props) {
  return (
    <nav className="main-nav open">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

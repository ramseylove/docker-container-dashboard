import React from "react";

import Header from "./header";
import Nav from "./nav";

function Layout(props) {
  return (
    <div>
      <Header />
      <Nav />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

import React, { useContext } from "react";
import NavigationContext from "../../store/nav-context";

import Header from "./header";
import Nav from "./nav";

function Layout(props) {
  const navigationCtx = useContext(NavigationContext);
  return (
    <div>
      <Header />
      {navigationCtx.navigationVisible && <Nav />}

      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

import { useContext } from "react";

import NavigationContext from "../store/nav-context";

function HomePage(props) {
  const navigationCtx = useContext(NavigationContext);

  return <div>Welcome to earth</div>;
}

export default HomePage;

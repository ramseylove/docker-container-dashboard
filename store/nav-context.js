import { createContext, useState } from "react";

const NavigationContext = createContext({
  pageTitle: "",
  pageNavigationItems: null,
  navigationViewable: false,
  showNavigation: function () {},
  hideNavigation: function () {},
});

export function NavigationContextProvider(props) {
  const [navigationItems, setNavigationItems] = useState({});
  const [navigationVisible, setNavigationVisible] = useState(false);
  const [pageTitle, setPageTitle] = useState("C-DASH");

  function showNavigationHandler() {
    if (!navigationVisible) {
      setNavigationVisible(true);
    } else {
      setNavigationVisible(false);
    }
    // setNavigationItems(navigationData);
  }
  function hideNavigationHandler() {
    if (navigationVisible) {
      setNavigationVisible(false);
    }
    // setNavigationItems(null);
  }

  const context = {
    pageTitle: pageTitle,
    pageNavigationItems: navigationItems,
    navigationVisible: navigationVisible,
    showNavigation: showNavigationHandler,
    hideNavigation: hideNavigationHandler,
  };
  return (
    <NavigationContext.Provider value={context}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;

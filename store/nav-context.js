import { createContext, useState } from "react";

const NavigationContext = createContext({
  pageNavigationItems: null,
  showNavigation: function (navigationData) {},
  hideNavigation: function () {},
});

export function NavigationContextProvider(props) {
  const [navigationItems, setNavigationItems] = useState({});

  function showNavigationHandler(navigationData) {
    setNavigationItems(navigationData);
  }
  function hideNavigationHandler() {
    setNavigationItems(null);
  }

  const context = {
    pageNavigationItems: navigationItems,
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

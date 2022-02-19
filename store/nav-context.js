import { createContext, useState } from "react";

const NavigationContext = createContext({
  pageNavigationItems: null,
  navigationViewable: false,
  showNavigation: function () {},
  hideNavigation: function () {},
});

export function NavigationContextProvider(props) {
  const [navigationItems, setNavigationItems] = useState({});
  const [navigationVisible, setNavigationVisible] = useState(false);

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

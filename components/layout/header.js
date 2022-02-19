import React, { useContext, useEffect } from "react";
import NavigationContext from "../../store/nav-context";
import ThemeContext from "../../store/theme-context";

function Header(props) {
  const navigationCtx = useContext(NavigationContext);
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeCtx.theme);
  }, [themeCtx.theme]);

  return (
    <header className="header">
      <div className="header-content">
        <button
          className="toggle-button"
          type="button"
          name="nav_toggle"
          onClick={navigationCtx.showNavigation}
        >
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
        </button>
        {/* <!-- Dark Mode Switch --> */}
        <div className="theme-switch-wrapper">
          <span id="toggle-icon">
            <span className="toggle-text">Light Mode</span>
            <i className="fas fa-sun"></i>
          </span>
          <label className="theme-switch" for="toggle-check">
            <input
              type="checkbox"
              id="toggle-check"
              checked={themeCtx.theme === "light" ? false : true}
              onChange={themeCtx.changeThemeHandler}
            />
            <div className="slider round"></div>
          </label>
        </div>
        <h3>{props.title}</h3>
      </div>
    </header>
  );
}

export default Header;

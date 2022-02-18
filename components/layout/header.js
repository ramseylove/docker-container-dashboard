import React from "react";

function Header(props) {
  return (
    <header class="header">
      <div class="header-content">
        <button class="toggle-button" type="button" name="nav_toggle">
          <span class="toggle-button__bar"></span>
          <span class="toggle-button__bar"></span>
          <span class="toggle-button__bar"></span>
        </button>
        {/* <!-- Dark Mode Switch --> */}
        <div class="theme-switch-wrapper">
          <span id="toggle-icon">
            <span class="toggle-text">Light Mode</span>
            <i class="fas fa-sun"></i>
          </span>
          <label class="theme-switch" for="toggle-check">
            <input type="checkbox" id="toggle-check" />
            <div class="slider round"></div>
          </label>
        </div>
        <h3>{props.title}</h3>
      </div>
    </header>
  );
}

export default Header;

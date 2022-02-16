var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".main-nav");

var navState = false;

toggleButton.addEventListener("click", function () {
  //   mobileNav.classList.add("open");
  if (!navState) {
    mobileNav.classList.add("open");
    navState = true;
  } else {
    mobileNav.classList.remove("open");
    navState = false;
  }
});

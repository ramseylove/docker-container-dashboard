var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".main-nav");
const themeToggle = document.getElementById("toggle-check");
const toggleIcon = document.getElementById("toggle-icon");

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

//Dark Mode styling change functions
function darkMode() {
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
}
function lightMode() {
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

themeToggle.addEventListener("change", switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeToggle.checked = true;
    darkMode();
  }
}

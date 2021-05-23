const body = document.querySelector("body");
const theamSwitcher = document.querySelector(".theme-switcher");

/**
 *
 * @param {String} mode
 * set theme class to root and theme div
 */
function switchThemeTo(mode) {
  body.className = mode;
  theamSwitcher.classList.toggle("active");
}

/**
 * check if theme has set to localStorage or not
 */
window.addEventListener("load", () => {
  const isThemeSet = getTheme();
  isThemeSet ? switchThemeTo(isThemeSet) : switchThemeTo("light");
});

/**
 * handle click event when swicther for theme is changed
 */

theamSwitcher.addEventListener("click", () => {
  const theme = getTheme();
  if (theme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
  switchThemeTo(getTheme());
});

/**
 *
 * @param {String} mode
 * Set theme to localStorage
 */

function setTheme(mode) {
  localStorage.setItem("mode", mode);
}

/**
 * Remove theme from localStorage
 */
function removeTheme() {
  localStorage.removeItem("mode");
}

/**
 * Get current theme from localStorage
 */
function getTheme() {
  return localStorage.getItem("mode");
}

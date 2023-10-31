/***HAMBURGER AND XMARK ICON***/
/* Declare and populate variables related to hamburger menu and mobile navigation */
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".navigation");
const hamburgerIcon = document.querySelector(".fa-solid");

/* Set mobile navigation and change hamburger icon to xmark icon */
menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark");
        hamburgerIcon.classList.remove("fa-bars");
        menuList.style.display = "flex";
    } else {
        hamburgerIcon.classList.add("fa-bars");
        hamburgerIcon.classList.remove("fa-xmark");
        menuList.style.display = "none";
    }
})

/***DARKMODE***/
/* Declare and populate variables related to dark mode */
const darkmodeIcon = document.querySelector(".darkmode-icon");
const bodyDarkmode = document.querySelector("body");
const headerDarkmode = document.querySelector(".header");
const navigationDarkmode = document.querySelector(".navigation");
const darkmodeArrowUp = document.querySelector(".arrow-up");
const darkmodeFooter = document.querySelector(".footer");

/* Change elements color to dark or light mode and save mode to local storage */

function setDarkmode() {
  const isDarkMode = bodyDarkmode.classList.contains("body-dark-mode");
  if (isDarkMode) {
    bodyDarkmode.classList.remove("body-dark-mode");
    headerDarkmode.classList.remove("header-dark-mode");
    navigationDarkmode.classList.remove("navigation-dark-mode");
    darkmodeIcon.classList.remove("darkmode-icon-reverted");
    darkmodeArrowUp.classList.remove("arrow-up-reverted");
    darkmodeFooter.classList.remove("footer-reverted");
    localStorage.setItem("mode", "light");
  } else {
    bodyDarkmode.classList.add("body-dark-mode");
    headerDarkmode.classList.add("header-dark-mode");
    navigationDarkmode.classList.add("navigation-dark-mode");
    darkmodeIcon.classList.add("darkmode-icon-reverted");
    darkmodeArrowUp.classList.add("arrow-up-reverted");
    darkmodeFooter.classList.add("footer-reverted");
    localStorage.setItem("mode", "dark");
  }
}

/* Set dark mode on click */
darkmodeIcon.addEventListener("click", setDarkmode);

/* Check localStorage for the current mode */
const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
  /* If dark mode was saved, enable it */
  setDarkmode();
} else {
  /* If it's not saved or set to "light," ensure it's off */
  bodyDarkmode.classList.remove("body-dark-mode");
  headerDarkmode.classList.remove("header-dark-mode");
  navigationDarkmode.classList.remove("navigation-dark-mode");
  darkmodeIcon.classList.remove("darkmode-icon-reverted");
  darkmodeArrowUp.classList.remove("arrow-up-reverted");
  darkmodeFooter.classList.remove("footer-reverted");
}

/***SCROLL UP BUTTON***/
/* Get the button */
let scrollUpButton = document.querySelector(".arrow-up");

/* When the user scrolls down 50px from the top of the document, show the button */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

/* When the user clicks on the button, scroll to the top of the document */
function topFunction() {
  document.body.scrollTop = 0; /* For Safari */
  document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE and Opera */
}

scrollUpButton.addEventListener("click", topFunction);

/***PASSWORD CHECK FORM***/
const form = document.querySelector(".form");
const firstField = document.querySelector(".password");
const secondField = document.querySelector(".password-check");
const fieldsEmpty = document.querySelector(".empty");
const secondFieldEmpty = document.querySelector(".second-field-empty");
const passwordsMismatch = document.querySelector(".passwords-mismatch");
const passwordsMatch = document.querySelector(".passwords-match");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (firstField.value !== "") {
    if (secondField.value !== "") {
      if (firstField.value === secondField.value) {
        passwordsMatch.style.display = "block";
        passwordsMismatch.style.display = "none";
        secondFieldEmpty.style.display = "none";
        fieldsEmpty.style.display = "none";
      } else {
        passwordsMismatch.style.display = "block";
        passwordsMatch.style.display = "none";
        secondFieldEmpty.style.display = "none";
        fieldsEmpty.style.display = "none";
      }
    } else {
      secondFieldEmpty.style.display = "block";
      passwordsMismatch.style.display = "none";
      passwordsMatch.style.display = "none";
      fieldsEmpty.style.display = "none";
    } 
  } else {
      fieldsEmpty.style.display = "block";
      secondFieldEmpty.style.display = "none";
      passwordsMismatch.style.display = "none";
      passwordsMatch.style.display = "none";
  }
})